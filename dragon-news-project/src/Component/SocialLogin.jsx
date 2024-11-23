import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='flex flex-col gap-5'>
                <button className="btn bg-white border border-black"><FaGoogle /> Login With Google</button>
                <button className="btn bg-white border border-black"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;