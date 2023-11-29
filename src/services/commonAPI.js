import axios from 'axios';


// a function for common api calling
export const commonAPI = async (httpMethod,url,reqBody)=>{
    
    // req configuration - type object
    // keys are predefined - must use the same
    const reqConfig = {
        method :httpMethod,
        url,
        data:reqBody,
        headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}