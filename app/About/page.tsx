'use client'

import React from 'react';
import Link from 'next/link'
import Image from "next/image";


import styles from "./page.module.css";
//import card from "./components/Card";
import { useRouter } from 'next/navigation';
export default function Home(){
const route = useRouter()
  return (
    <>
   
   
    <nav className='bg-black'>
        <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
<div className='flex items-center'>
    <div className='flex-shrink-0'>
        <a href='/' className='text-white'>
        GIAIC
        </a>
    </div>
</div>
<div className='hidden md:block'>
    <div className='ml-4 flex items-center space-x-4'>
        <a
        href='/'
        className='text-white hover:bg-white hover:text-black rounded-lg p-2'
        >
            Home
        </a>

        <a
        href='/'
        className='text-white hover:bg-white hover:text-black rounded-lg p-2'
        >
        
            About
            
        </a>

        <a
        href='/'
        className='text-white hover:bg-white hover:text-black rounded-lg p-2'
        >
            Services
        </a>

        <a
        href='/'
        className='text-white hover:bg-white hover:text-black rounded-lg p-2'
        >
            Contact
        </a>

        
    </div>
</div>
            </div>
        </div>
    </nav>
    <h1>this is about page</h1>



       
    </> 
            
          
      
    
  );
}
