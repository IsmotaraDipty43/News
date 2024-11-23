import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='font-semibold mb-3'>
            <h2 className=''>
                Find Us On
            </h2>
            <div className="join  flex join-vertical ">
  <button className="btn border-2 border-gray bg-white join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
  <button className="btn border-2 border-gray bg-white join-item justify-start"><BsTwitter></BsTwitter> Twitter</button>
  <button className="btn border-2 border-gray bg-white join-item justify-start"><BsInstagram></BsInstagram> Instagram</button>
</div>
        </div>
    );
};

export default FindUs;