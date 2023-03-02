import React from 'react'
import { styled } from '@mui/material/styles';

import {
    BarChart,
    SearchRounded,
    ShoppingCartRounded,
} from "@mui/icons-material";
function Header() {

    return (
        <header className=' bg-white flex lg:justify-center  justify-between  items-center  z-30 w-full top-0 shadow-xl fixed'>
            <div className='flex lg:justify-center  justify-between  items-center w-full mx-4'>

            <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
                alt=""
                className="logo mr-8 h-[64px] w-[64px] flex md:justify-between"
            />

            <div className=" ml-8">
                <h1 className="userName  text-xl text-rose-400 font-bold lg:text-3xl ">KAMISU</h1>
            </div>
            </div>
            {/* <div className="inputBox">
                <SearchRounded className="searchIcon" />
                <input type="text" placeholder="Search" />
            </div>

            <div className="shoppingCart">
                <ShoppingCartRounded className="cart" />
                
            </div> */}


            {/* <div className="toggleMenu">
                <BarChart className="toggleIcon" />
            </div> */}
        </header>
    )
}

export default Header