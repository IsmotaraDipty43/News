import React from 'react';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navber from '../Component/Navber';
import LeftNav from '../Component/Layoutcomponent/LeftNav';
import RightNav from '../Component/Layoutcomponent/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayouts = () => {
    return (
        <div className='font-poppins'>
           <Header></Header>
           <section className='w-full p-5 md:w-10/12 mx-auto '>
            <LatestNews></LatestNews>
           </section>
          <section className='md:w-10/12 mx-auto w-full  py-2'>
          <Navber></Navber>
          </section>
          <main className='md:w-10/12 w-full mx-auto pt-5 grid md:grid-cols-12 p-5 gap-3 '>
            <aside className='left col-span-3'><LeftNav></LeftNav></aside>
            <section className='col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='col-span-3'><RightNav></RightNav></aside>
          </main>
        </div>
    );
};

export default HomeLayouts;
