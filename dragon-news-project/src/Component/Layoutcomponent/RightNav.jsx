import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightNav = () => {
    return (
        <div className='space-y-10'>
           <SocialLogin></SocialLogin>
        <section>
        <FindUs></FindUs>
        </section>
        </div>
    );
};

export default RightNav;