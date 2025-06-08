import React from 'react'
import Logo from '../../assets/image.png' // Adjust the path as necessary
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Manu from '../Manu/Manu';

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-800 dark:text-white duration-200 relative z-40"> 

        {/* upper navbar */}
        <div className="bg-orange-400 text-white">
            <div className="container flex justify-between items-center py-4 px-6 ">
                <div className="div">
                    <a href="#home" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="logo" className="w-10" />
                        Shopsy
                    </a>
                </div>
        {/* search bar and order button */}
        <div className="flex justify-between items-center gap-4">
                <div className="">
                    <div className="relative group hidden sm:block">
                        <input type="text" placeholder="Search..." className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-200 rounded-full bg-amber-50 text-gray-900 border-3-white-600 px-3 py-1 focus:outline-none focus:border-3 focus:border-black" />
                         <FaSearch className='text-black group-hover:text-orange-600 absolute top-1/2 -translate-y-1/2 right-5'/>
                    </div>
                   
                </div>
        
        {/* order button */}

                <button
                    onClick={() => alert('Order placed!')}
                    className="bg-gradient-to-r from-orange-700 to-orange-300 transation-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group cursor-pointer"
                >
                <span className="group-hover:black hidden transation-all duration-200 group-hover:block">
                    Order
                </span>
                    <FaCartShopping className="text-white text-2xl group-hover:text-black transition-all duration-200 drop-shadow-sm cursor-pointer " />
                    <span className="hidden group-hover:block">Now</span>
                

                </button>
        </div>

            </div>
        </div>
        

        {/* lower navbar */}

        <Manu />


    </div>
  )
}

export default Navbar