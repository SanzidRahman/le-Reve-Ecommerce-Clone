import React from 'react'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import Navbar from './Navbar'

const Headers = () => {
  return (
    <div>
        <TopHeader />
        <MiddleHeader />
         <div className="h-[1px] w-full border border-gray-100 "></div>
        <Navbar />
         <div className="h-[1px] w-full border border-gray-100 "></div>
    </div>
  )
}

export default Headers