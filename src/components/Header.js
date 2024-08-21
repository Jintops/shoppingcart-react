import React from 'react'

const Header = () => {
  return (
    <div className='flex  shadow-xl h-24'>
       <div className="">
              <img className="w-96 -mt-10 h-40" src="https://roar.world/english/reports/wp-content/uploads/2015/05/shopbox3.jpg?" alt="image of profile"></img>
              </div>
            <div className= " pl-[550px] flex list-none m-5 font-bold">
                <li className="p-2 text-green hover:text-blue-800 cursor-pointer">Home</li>
                <li  className="p-2 hover:text-blue-800 cursor-pointer">About</li>
                <li  className="p-2 hover:text-blue-800 cursor-pointer">Products</li>
            </div>
    </div>
  )
}

export default Header
