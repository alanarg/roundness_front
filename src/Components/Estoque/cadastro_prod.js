import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Header from '../Header'
import axios from 'axios'
import swal from 'sweetalert'
const FILE_SIZE = 160 * 1024
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
// eslint-disable-next-line
const ProfileSchema = Yup.object().shape({
  avatars: Yup.mixed()
    .required('A file is required')
    .test(
      'fileSize',
      'File too large',
      value => value && value.size <= FILE_SIZE
    )
    .test(
      'fileFormat',
      'Unsupported Format',
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  username: Yup.string()
    .min(2, 'username is Too Short!')
    .max(50, 'username is Too Long!')
    .required('username is Required'),
  first_name: Yup.string()
    .min(2, 'firstname is Too Short!')
    .max(30, 'firstname is Too Long!')
    .required('firstname is Required'),
  last_name: Yup.string()
    .min(2, 'lastname is Too Short!')
    .max(30, 'lastname is Too Long!')
    .required('lastname is Required'),
  phone: Yup.number('Phone number is use only number')
    .min(10, 'Phone number must be 10 characters!')
    .required('Phone number is Required'),
  address: Yup.string()
    .min(12, 'address is Too Short!')
    .max(50, 'address is Too Long!')
    .required('address is Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required')
})

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      response: {},
      error_message: null,
      avatar: ''
    }
  }
  //The only way to identify the logged-in user is the JWT token stored in the local storage. 
  //If you can remember, we stored the user id inside the JWT token during token creation. However, this data is encrypted. So we need to decode
  // the data to retrieve the associated user id. 
  //Following parseJwt function decodes the token and returns the user id.
  parseJwt () {
    let token = localStorage.getItem('TOKEN_KEY')
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('') 

    )

    return JSON.parse(jsonPayload)
  }
  //retrieve the user id and get user data.
  componentDidMount () {
    let { id } = this.parseJwt()
    this.getData(id)
  }

  showPreviewImage = values => {
    console.log(this.state.response.avatars);
    return (
      <div class='text-center'>
        <img
          id="avatars"
          name="avatars"
          alt="avatar"
          src={
            values.file_obj !== undefined
              ?  values.file_obj
              : null
          }
          class='profile-user-img img-fluid img-circle'
          width={500}
          height={500}
        />
      </div>
    )
  }
  //Now, create a function that store the user id returned 
  //from the above function in the component state.

  getData = async id => {
    await axios
      .get("usuario/" + id)
      .then(async response => {
        console.log(response.data)
        this.setState({ response: response.data })
        document.getElementById('avatars').src = "https://roundness.herokuapp.com/images/" + response.data.avatars
      })
      .catch(error => {
        this.setState({ error_message: error.message })
      })
  }
  submitForm = async formData => {
    await axios
      .put("profile", formData)
      .then(res => {
        console.log(res.data.result)
        if (res.data.result === 'success') {
          swal('Success!', res.data.message, 'success').then(value => {
            //s window.location.reload();
          })
        } else if (res.data.result === 'error') {
          swal('Error!', res.data.message, 'error')
        }
      })
      .catch(error => {
        console.log(error)
        swal('Error!', 'Unexpected error', 'error')
      })
  }
  showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    onSubmit,
    isSubmitting,
    setFieldValue
  }) => {
    
    return (
      <form  onSubmit={handleSubmit}>
        {this.showPreviewImage(values)}
        <div className='card-body'>
          <span style={{ color: '#00B0CD', marginLeft: 10 }}>Add Picture</span>
          <div className='form-group'>
            <label htmlFor='exampleInputFile'>Avatar upload</label>
            <div className='input-group'>
              <div className='custom-file'>
                
                <input
                  type='file'
                  
                  onChange={e => {
                    e.preventDefault()
                    setFieldValue('avatars', e.target.files[0]) // for upload
                    setFieldValue(
                      'file_obj',
                      URL.createObjectURL(e.target.files[0])
                    ) // for preview image
                  }}
                
                  accept='image/*'
                  className={
                    errors.avatars && touched.avatars
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  name="avatars"
                  id='avatars'
                />
               
              </div>
            </div>
          </div>

          <input type='hidden' name='id' value={values._id} />
          <div className='form-group  has-feedback'>
            <label htmlFor='email'>Email address</label>
            <input
              onChange={handleChange}
              value={values.email}
              type='email'
              name='email'
              className={
                errors.email && touched.email
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              id='email'
              placeholder='Enter email'
            />
            {errors.email && touched.email ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.email}
              </small>
            ) : null}
          </div>
          <div className='form-group has-feedback'>
            <label htmlFor='username'>Username</label>
            <input
              onChange={handleChange}
              value={values.username}
              type='text'
              name='username'
              className={
                errors.username && touched.username
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              id='username'
              placeholder='Enter UserName'
            />
            <label htmlFor='first_name'>First Name</label>
            <input
              onChange={handleChange}
              value={values.first_name}
              type='text'
              name='first_name'
              className={
                errors.first_name && touched.first_name
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              id='first_name'
              placeholder='Enter First Name'
            />
            {errors.first_name && touched.first_name ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.first_name}
              </small>
            ) : null}
          </div>
          <div className='form-group has-feedback'>
            <label htmlFor='last_name'>Last Name</label>
            <input
              onChange={handleChange}
              value={values.last_name}
              type='text'
              name='last_name'
              className={
                errors.last_name && touched.last_name
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              id='last_name'
              placeholder='Enter Last Name'
            />
            {errors.last_name && touched.last_name ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.last_name}
              </small>
            ) : null}
          </div>
          <div className='form-group has-feedback'>
            <label htmlFor='phone'>phone number</label>
            <input
              onChange={handleChange}
              value={values.phone}
              type='text'
              name='phone'
              className={
                errors.phone && touched.phone
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              id='phone'
              placeholder='Enter phone number'
            />
            {errors.phone && touched.phone ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.phone}
              </small>
            ) : null}
          </div>
          <div className='form-group has-feedback'>
            <label htmlFor='address'>address</label>
            <textarea
              onChange={handleChange}
              value={values.address}
              name='address'
              className={
                errors.address && touched.address
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
              id='address'
              placeholder='Address'
            />
            {errors.address && touched.address ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.address}
              </small>
            ) : null}
          </div>
        </div>
        {/* /.card-body */}
        <div className='card-footer'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='btn btn-block btn-primary'
          >
            Save
          </button>
        </div>
      </form>
    )
  }

  render () {
    let result = this.state.response
    console.log(result)
    return (
        <>
        <Header/>
      <div className='content-wrapper'>
        <section className='content-header'>
          <div className='container-fluid'>
            <div className='row mb-2'>
              <div className='offset-md-3 col-sm-8'>
                <h1>Profile</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <section className='content'>
          <div className='container-fluid'>
            <div className='row'>
              {/* left column */}
              <div className='offset-md-3 col-md-6'>
                {/* general form elements */}
                <div className='card card-primary'>
                  <div className='card-header'>
                    <h3 className='card-title'>update profile</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <Formik
                    enableReinitialize={true}
                    initialValues={
                      result
                        ? result
                        : {
                            id: '',
                            avatars:'',
                            username: '',
                            email: '',
                            first_name: '',
                            last_name: '',
                            phone: '',
                            address: ''
                          }
                    }
                    onSubmit={(values, { setSubmitting }) => {
                      let formData = new FormData()
                      formData.append('id', values._id)
                      formData.append('username', values.username)
                      formData.append('first_name', values.first_name)
                      formData.append('last_name', values.last_name)
                      formData.append('phone', values.phone)
                      formData.append('address', values.address)
                      formData.append('email', values.email)
                      if (values.avatars) {
                        formData.append('avatars', values.avatars)
                      }
                      console.log(values.avatars)
                      this.submitForm(formData, this.props.history)
                      setSubmitting(false)
                    }}
                    // validationSchema={ProfileSchema}
                  >
                    {props => this.showForm(props)}
                  </Formik>
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
        </section>
      </div>
      </>
    )
  }
}

export default Profile;