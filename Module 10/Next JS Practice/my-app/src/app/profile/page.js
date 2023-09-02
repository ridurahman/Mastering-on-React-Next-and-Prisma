//'use client'
import Menu from '@/components/Menu';
//import { useRouter } from 'next/navigation';
import React from 'react';

async function getData(){
    try{
    let res = await fetch('https://dummyjson.com/products');
    let res1 = await fetch('https://dummyjson.com/products/1');
    let res2 = await fetch('https://dummyjson.com/products/2');
    let res3 = await fetch('https://dummyjson.com/products/3');
    
    let resStatus = res.status;
    let resHeader = res.headers.get('cache-control');
    let resData1 = await res1.json();
    let resData2 = await res2.json();
    let resData3 = await res3.json();

    return {resStatus:resStatus, resHeader:resHeader, data1:resData1, data2:resData2, data3:resData3};
}
catch(e){
    throw new Error("Something went wrong");
}
}

const page = async() => {
    let data = await getData();
    //const router = useRouter();
    

    const goTo=()=>{
        //router.push("/product?name=Mobile&price=6000Taka");
    }

    return (
        <div>
            {/* <Menu/> */}
            {/* {props.name.toString()} */}
            <h1>This is profile page</h1>
            {/* <button className='btn bg-slate-500 p-1 m-2' onClick={()=>{alert("Button Clicked")}}>Click</button>
            <button className='btn bg-slate-500 p-1 m-2' onClick={goTo}>Click</button> */}
            <h1>Status Code: {JSON.stringify(data["resStatus"])}</h1><br/>
            <h1>Header: (cache-control) {JSON.stringify(data["resHeader"])}</h1><br/>
            
            <h1>Product 1: {JSON.stringify(data["data1"])}</h1><br/>
            <h1>Product 2: {JSON.stringify(data["data2"])}</h1><br/>
            <h1>Product 3: {JSON.stringify(data["data3"])}</h1><br/>
        
        </div>
    );
};

export default page;