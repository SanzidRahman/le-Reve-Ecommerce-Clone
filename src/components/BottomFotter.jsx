import Link from 'next/link'
import React from 'react'

const BottomFotter = () => {
  return (
    <div className='flex mb-4 space-x-4  px-4 mt-10 xl:flex max-w-[980] mx-auto justify-evenly xl:space-x-20'>
        <div className='h-[1px] max-w-[980px] border-1 mx-auto '></div>
        <div className='flex flex-col border-r-1 border-r-gray-300 pr-2' >
            <h1 className='font-bold'>Categories</h1>
            <p className='text-[10px]' >Women</p>
            <p className='text-[10px]' >men</p>
            <p className='text-[10px]' >Kids</p>
            <p className='text-[10px]' >Teen</p>
            <p className='text-[10px]' >Home Decor</p>
        </div>
        <div className='flex flex-col border-r-1 border-r-gray-300' >
            <h1 className='font-bold'>Customer Support</h1>
            <Link className='text-[10px]'  href={"/"}>Order and Cancellation</Link>
            <Link className='text-[10px]'  href={"/"}>Shipping & Delivery</Link>
            <Link className='text-[10px]'  href={"/"}>Contact Us</Link>
            <Link className='text-[10px]'  href={"/"}>FAQs</Link>
            <Link className='text-[10px]'  href={"/"}>Return & Exchanges</Link>
            <Link className='text-[10px]'  href={"/"}>Privilege Member</Link>
        </div>
        <div className='flex flex-col border-r-1 border-r-gray-300' >
            <h1 className='font-bold'>Who WU Are</h1>
            <Link className='text-[10px]' href={"/about-us"}>About us</Link>
            <Link className='text-[10px]' href={"/blogs"}>Blogs</Link>
        </div>
        <div className='flex flex-col border-r-1 border-r-gray-300' >
            <h1 className='font-bold'>More</h1>
            <Link className='text-[10px]' href={"/"}>Privacy Policy</Link>
            <Link className='text-[10px]' href={"/"}>Find a Store</Link>
            <Link className='text-[10px]' href={"/"}>Terms & Condition</Link>
            <Link className='text-[10px]' href={"/"}>Site Map</Link>
        </div>
        <div className='flex flex-col border-r-1 border-r-gray-300' >
            <h1 className='font-bold'>Download Mobile App</h1>
        </div>
    </div>
  )
}

export default BottomFotter