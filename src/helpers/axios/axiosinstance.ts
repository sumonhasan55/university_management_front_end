import { authKey } from "@/constants/storagekey";
import {  IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"]="application/json";
instance.defaults.headers["Accept"]="application/json";
instance.defaults.timeout=60000;


// Add a request interceptor
instance.interceptors.request.use(function (config) {

    const accessToken = getFromLocalStorage(authKey)
    if(accessToken){
        config.headers.Authorization = accessToken
    }
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//@ts-ignore
instance.interceptors.response.use(function (response) {
    const responseOdject:ResponseSuccessType = {
        data:response?.data?.data,
        meta:response?.data?.meta
    }
    return responseOdject;
  }, function (error) {

   const responseOdject:IGenericErrorResponse = {
    statusCode:error?.response?.data?.statusCode || 500,
    messages:error?.response?.data?.message || "Something went Wrong",
    errorMessages:error?.response?.data?.errorMessages
   }
    return responseOdject;
  });


export {instance}