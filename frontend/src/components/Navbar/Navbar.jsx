import React from 'react'
import Logo from '../../assets/image.png' // Adjust the path as necessary


const Navbar = () => {
  return (
    <div>

        {/* upper navbar */}
        <div className="bg-orange-400 text-blue">
            <div className="container flex justify-between items-center py-4 px-6 ">
                <div className="div">
                    <a href="#home" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="logo" className="w-10" />
                        Shopsy
                    </a>
                </div>
        {/* search bar and order button */}
                <div className="div">
                    <div className="group">
                        <input type="text" placeholder="Search..." className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-3 focus:border-black" />
                    </div>
                </div>

            </div>
        </div>

        {/* lower navbar */}


    </div>
  )
}

export default Navbar