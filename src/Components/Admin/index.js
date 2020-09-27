import React from 'react';
import Head from '../Header/index';
import Dash from './dashboard';
import "./style.css";

const Admin = ()=>{
    return (
        <>
        <Head></Head>
      <div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>AdminLTE 3 | Fixed Sidebar</title>
  {/* Tell the browser to be responsive to screen width */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Font Awesome */}
  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
  {/* Ionicons */}
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
  {/* overlayScrollbars */}
  <link rel="stylesheet" href="../../plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
  {/* Theme style */}
  <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
  {/* Google Font: Source Sans Pro */}
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
  {/* Site wrapper */}
  <div className="BOX">

 
      <Dash></Dash>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Fixed Layout</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  {/* eslint-disable-next-line */}
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  {/* eslint-disable-next-line */}
                  <a href="#">Layout</a>
                </li>
                <li className="breadcrumb-item active">Fixed Layout</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* Default box */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Title</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                      <i className="fas fa-minus" /></button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
                      <i className="fas fa-times" /></button>
                  </div>
                </div>
                <div className="card-body">
                  Start creating your amazing application!
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  Footer
                </div>
                {/* /.card-footer*/}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
    {/* /.content-wrapper */}
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 3.0.3-pre
      </div>
      <strong>Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong> All rights
      reserved.
    </footer>
    {/* Control Sidebar */}
    <aside className="control-sidebar control-sidebar-dark">
      {/* Control sidebar content goes here */}
    </aside>
    {/* /.control-sidebar */}
  </div>
  {/* ./wrapper */}
  {/* jQuery */}
  {/* Bootstrap 4 */}
  {/* overlayScrollbars */}
  {/* AdminLTE App */}
  {/* AdminLTE for demo purposes */}

</>

    );
}

export default Admin;





