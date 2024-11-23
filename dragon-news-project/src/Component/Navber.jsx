import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import iconuser from '../assets/user.png';
import { Authcontext } from '../Provider/AuthProvider';

const Navber = () => {
    const { user, logOut } = useContext(Authcontext);

    return (
        <div className="flex justify-between items-center">
            {/* Display user email if logged in */}
            <div>{user && user.email}</div>
            
            {/* Navigation Links */}
            <nav className="nav space-x-5">
                <NavLink className="text-lg" to="/">
                    Home
                </NavLink>
                <NavLink className="text-lg" to="/career">
                    Career
                </NavLink>
                <NavLink className="text-lg" to="/about">
                    About
                </NavLink>
            </nav>

            {/* User Profile and Login/Logout Button */}
            <div className="login flex gap-3 justify-center items-center mr-5">
                <div className="icon">
                    {user && user?.email ? (
                        <div className="flex flex-col items-center gap-2">
                            <img 
                                src={user.photoURL || iconuser}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full"
                            />
                            <p className="text-sm">{user.displayName || "Anonymous"}</p>
                        </div>
                    ) : (
                        <img src={iconuser} alt="Default Avatar" className="w-8 h-8 rounded-full" />
                    )}
                </div>

                {/* Logout or Login Button */}
                {user && user?.email ? (
                    <button className="btn btn-neutral rounded-none" onClick={logOut}>
                        Logout
                    </button>
                ) : (
                    <Link to="/auth/login" className="btn btn-neutral rounded-none">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navber;
