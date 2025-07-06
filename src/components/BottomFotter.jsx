import Link from 'next/link'
import React from 'react'

const BottomFotter = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-4 md:flex-row xl:justify-around xl:max-w-[1100px] mx-auto'>
        <div className='flex flex-col text-center mt-4  xl:text-left border-r-1 pr-6' >
            <h1 className='font-semibold uppercase text-[12px]'>Categories</h1>
            <p className='text-[10px]' >Women</p>
            <p className='text-[10px]' >men</p>
            <p className='text-[10px]' >Kids</p>
            <p className='text-[10px]' >Teen</p>
            <p className='text-[10px]' >Home Decor</p>
        </div>
        <div className='flex flex-col text-center mt-4 xl:text-left border-r-1 pr-6' >
            <h1 className='font-semibold uppercase text-[12px]'>Customer Support</h1>
            <Link className='text-[10px]'  href={"/"}>Order and Cancellation</Link>
            <Link className='text-[10px]'  href={"/"}>Shipping & Delivery</Link>
            <Link className='text-[10px]'  href={"/"}>Contact Us</Link>
            <Link className='text-[10px]'  href={"/"}>FAQs</Link>
            <Link className='text-[10px]'  href={"/"}>Return & Exchanges</Link>
            <Link className='text-[10px]'  href={"/"}>Privilege Member</Link>
        </div>
        <div className='flex flex-col text-center xl:text-left border-r-1 pr-6' >
            <h1 className='font-semibold uppercase text-[12px]'>Who WU Are</h1>
            <Link className='text-[10px]' href={"/about-us"}>About us</Link>
            <Link className='text-[10px]' href={"/blogs"}>Blogs</Link>
            <br></br>
            <br></br>
        </div>
        <div className='flex flex-col text-center mt-4 xl:text-left border-r-1 pr-6' >
            <h1 className='font-semibold uppercase text-[12px]'>More</h1>
            <Link className='text-[10px]' href={"/"}>Privacy Policy</Link>
            <Link className='text-[10px]' href={"/"}>Find a Store</Link>
            <Link className='text-[10px]' href={"/"}>Terms & Condition</Link>
            <Link className='text-[10px]' href={"/"}>Site Map</Link>
            <br></br>
        </div>
        <div className='flex flex-col text-center mt-4 xl:text-left border-r-1 pr-6' >
            <h1 className='font-semibold uppercase text-[12px]'>Download Mobile App</h1>
        </div>
    </div>
  )
}

export default BottomFotter