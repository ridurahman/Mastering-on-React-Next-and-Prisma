import Menu from '@/components/Menu';
import React from 'react';

async function getData(){
    let res = await fetch('https://dummyjson.com/products');
    let resData = await res.json();

    // if(!resData.ok){
    //     throw new Error("Something went wrong");
    // }

    return resData.products;
}

const page = async ({searchParams}) => {
    let data = await getData();
    return (
        <div>
            {/* <Menu/> */}
            <h1>This is product page</h1><br/>
            <h1>Product Name: {searchParams.name}</h1>
            <h1>Product Price: {searchParams.price}</h1><br/>
            {data.map((item,index)=>{
                return <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                </div>
            })}
            
        </div>
    );
};

export default page;