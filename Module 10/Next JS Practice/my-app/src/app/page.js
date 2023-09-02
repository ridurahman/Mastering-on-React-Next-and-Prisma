'use client'
import React, { useEffect, useState } from 'react';
import styles from './about/page.module.css'
import Menu from '@/components/Menu';

const page = () => {

  let [data,setData] = useState([]);

  useEffect(()=>{
    (async()=>{
      let res=await fetch('https://dummyjson.com/products', {next:{revalidate:300}});
      let resData=await res.json();
      setData(resData.products);
    })()
  },[])

  return (
    <div>
      {/* <Menu/> */}
      <h1 className='global-text'>This is homepage</h1>
      <h1 className={styles.myHeadline}>This is module css</h1>
      <img src='./next.svg' height='200px' width='400px'/>
      {data.map((item,index)=>{
        return <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
        </div>
      })}
    </div>
  );
};

export default page;