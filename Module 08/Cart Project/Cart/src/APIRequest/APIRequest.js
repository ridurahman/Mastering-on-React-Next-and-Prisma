import axios from "axios";

const baseURL = "https://cart-api.teamrabbil.com/api";

export async function allProducts(){
    let res = await axios.get(baseURL + "/product-list");

    if(res.status===200){
        return res.data.data;
    }else{
        return [];
    }

    // let res= await fetch(baseURL + "/product-list");
    // let data=await res.json();
    // return data.data;
}

export async function userLogin(email){
    let res = await axios.post(baseURL + "/user-login",{
        UserEmail: email,
    });

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function verifyLogin(email,pin){
    let res = await axios.post(baseURL + "/verify-login",{
        UserEmail: email,
        OTP: pin,
        
    });

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function createCart(productId){
    let res = await axios.get(baseURL + "/create-cart/" +productId, {
        headers:{
            "token": localStorage.getItem("token"),
        }
    });

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function allCartProducts(pid){
    let res = await axios.get(baseURL + "/cart-list",{
        headers:{
            "token": localStorage.getItem("token"),
       }
    });

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }

    // let res= await fetch(baseURL + "/product-list");
    // let data=await res.json();
    // return data.data;
}

export async function removeCart(productId){
    let res = await axios.get(baseURL + "/remove-cart/" +productId, {
        headers:{
            "token": localStorage.getItem("token"),
        }
    });

    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}