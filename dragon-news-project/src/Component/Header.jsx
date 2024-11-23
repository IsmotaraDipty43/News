import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    // console.log(import.meta.env.VITE_a)
    return (
        <div className='flex flex-col justify-center items-center py-2'>
            <div className=''>
                <img src={logo} alt="" className='w-[300px]'/>
                </div> 
                <h2 className=' text-gray-500 text-lg py-2'>Journalism Without Fear or Favour</h2>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;