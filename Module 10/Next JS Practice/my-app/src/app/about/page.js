"use client"
import React from 'react';
import styles from './page.module.css'
import Menu from '@/components/Menu';
import { useSearchParams } from 'next/navigation';

const page = () => {
    const params = useSearchParams();
    return (
        <div>
            {/* <Menu /> */}
            <h1 className={styles.myText}>This is about page</h1>
            <h1 className={styles.myHeadline}>This is module css</h1>
            <h1>About: {params.get("name")}</h1>
        </div>
    );
};

export default page;