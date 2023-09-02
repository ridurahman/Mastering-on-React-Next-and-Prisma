import axios from "axios";

const baseURL = "https://basic-blog.teamrabbil.com/api";

export async function postCatagories(){
    let res = await axios.get(baseURL + "/post-categories");

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function postLatest(){
    let res = await axios.get(baseURL + "/post-newest");

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function postByCatagory(id){
    let res = await axios.get(baseURL + "/post-list/"+id);

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function postDetails(id){
    let res = await axios.get(baseURL + "/post-details/"+id);

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}