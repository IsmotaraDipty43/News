
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Component/Navber';

const AuthLayouts = () => {
    return (
        <div className='font-poppins bg-[#F3F3F3]'>
<section className='w-full md:w-10/12 mx-auto py-5'>
<Navber></Navber>
</section>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;