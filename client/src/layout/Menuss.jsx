import React from 'react'
import { AiOutlineHome } from 'react-icons/Ai';
import { BsBasket } from 'react-icons/Bs';
import { BiUser } from 'react-icons/Bi';


import { Link } from 'react-router-dom';
function Menuss() {
    return (
        <div>
            <div className="">
                {/*              <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
                <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow rounded-xl">
                    <div id="tabs" className="flex justify-between p-2">
                        <a href="#" className="w-full  transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-[#FC5185] duration-300 focus:text-[#FC5185]  hover:text-[#FC5185] justify-center inline-block text-center pt-2 pb-1">
                            <AiOutlineHome className="  inline-block  text-xl" />
                            <span className="tab tab-home block text-xs">Home</span>
                        </a>
                        <a href="#" className="w-full transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-[#FC5185] duration-300 focus:text-[#FC5185] hover:text-[#FC5185] justify-center inline-block text-center pt-2 pb-1">
                            <BsBasket className="inline-block text-xl" />
                            <span className="tab tab-kategori block text-xs">Cart</span>
                        </a>
                        <a href="#" className="w-full transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-125 hover:bg-indigo-[#FC5185] duration-300 focus:text-[#FC5185] hover:text-[#FC5185] justify-center inline-block text-center pt-2 pb-1">
                            <BiUser className="inline-block  text-xl" />
                            <span className="tab tab-explore block text-xs">User</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Menuss