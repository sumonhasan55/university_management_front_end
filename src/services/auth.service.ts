import { authKey } from "@/constants/storagekey"
import { decodedToken } from "@/utils/jwt"
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
   return setToLocalStorage(authKey, accessToken)

};

export const getUserInfo = ()=>{
    const authLocalStorageData = getFromLocalStorage(authKey)
    console.log(authLocalStorageData);
    if(authLocalStorageData){
        const decodedData= decodedToken(authLocalStorageData)
        return decodedData;

    }
    else{
        return ""
    }
};


export const isLoggedIn=()=>{
    const authLocalStorageData=getFromLocalStorage(authKey)
    return !!authLocalStorageData
};


export const removeUserInfo = (key:string) => {
    return localStorage.removeItem(key)
  };
 
