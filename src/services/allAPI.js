import { commonAPI } from "./commonAPI";
import { ServerbaseUrl } from "./serverUrl";

// uploading a video
export const uploadVideo = async(body)=>{
    // call post http request to http://localhost:4000/videos to 
    // add video in json server 
    // return response to add component
    return await commonAPI("POST",`${ServerbaseUrl}/videos`,body)
}

// get all video
export const getAllVideos = async()=>{
    // call get http request to http://localhost:4000/videos to 
    // get all video from json server 
    // return response to View component
    return await commonAPI('GET',`${ServerbaseUrl}/videos`,"")
}

// get a single video
export const getAVideo = async(id)=>{
    // call get http request to http://localhost:4000/videos/id to 
    // get a video from json server 
    // return response to VideoCard component
    return await commonAPI('GET',`${ServerbaseUrl}/videos/${id}`,"")
}

// delete a video
export const deleteVideo = async (id)=>{
     // call delete http request to http://localhost:4000/videos/id to 
    // delete a video from json server 
    // return response to Videocard component
    return await commonAPI('DELETE',`${ServerbaseUrl}/videos/${id}`,{})
}

// ************WATCH HISTORY*************** 

// Store video watching history to json server
export const addHistory = async(videoHistory)=>{
    // call post http request to http://localhost:4000/history to add video history in json server 
    // return response to videocard component
    return await commonAPI("POST",`${ServerbaseUrl}/history`,videoHistory)
}

// get video watching history
export const getHistory = async ()=>{
    // call get http request to http://localhost:4000/history to get all video history from json server 
    // return response to watch History component
    return await commonAPI("GET",`${ServerbaseUrl}/history`,"")
}

// delete video watching history from json server
export const deleteHistory = async (id)=>{
    // call DELETE http request to http://localhost:4000/history/id to delete video history from json server 
    // return response to watch History component
    return await commonAPI("DELETE",`${ServerbaseUrl}/history/${id}`,{})
}

// *****************CATEGORIES*************

// Add category to json server-categories
export const saveCategory = async(body)=>{
    // call post http request to http://localhost:4000/categories to 
    // add category in json server 
    // return response to category component
    return await commonAPI("POST",`${ServerbaseUrl}/categories`,body)
}


// get all Category
export const getAllCategory = async()=>{
    // call get http request to http://localhost:4000/categories to 
    // get all category from json server 
    // return response to Category component
    return await commonAPI('GET',`${ServerbaseUrl}/categories`,"")
}

// delete a Category
export const deleteCategory = async (id)=>{
    // call delete http request to http://localhost:4000/categories/id to 
   // delete a category from json server 
   // return response to category component
   return await commonAPI('DELETE',`${ServerbaseUrl}/categories/${id}`,{})
}

// update Category from json server
export const updateCategory = async(id,body)=>{
    // call put http request to http://localhost:4000/categories/id to 
    // update category from json server 
    // return response to Category component
    return await commonAPI('PUT',`${ServerbaseUrl}/categories/${id}`,body)
}
