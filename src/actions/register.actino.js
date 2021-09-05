import {

    REGISTER_FETCHING,
  
    REGISTER_FAILED,
  
    REGISTER_SUCCESS,
  
    server,
  
  } from "../constants";
  
  import swal from "sweetalert";
  
  import { httpClient } from "./../utils/HttpClient";

  export const setRegisterStateToFetching = () => ({

    type: REGISTER_FETCHING,
  
  });
  
  export const setRegisterStateToFailed = () => ({
  
    type: REGISTER_FAILED,
  
  });
  
  export const setRegisterStateToSuccess = (payload) => ({
  
    type: REGISTER_SUCCESS,
  
    payload,
  
  });