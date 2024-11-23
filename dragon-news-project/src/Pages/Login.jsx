import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';

const Login = () => {
const{  userLogin, setUser} = useContext(Authcontext)
const [error,setError]= useState({});
const location = useLocation();
// console.log(location)
const navigate = useNavigate()
  const hanleSubmit=(e)=>{
e.preventDefault(e)
const form = e.target ;
const email= form.email.value;
const password = form.password.value;
// console.log(email,password);
userLogin(email,password)
.then(result=>
{
  const user = result.user;
  setUser(user)
  navigate(location?.state? location.state : '/')
}
)
.catch(err=>{
setError({...error, login:err.code})
})
  }
    return (
        <div className='min-h-screen  justify-center items-center flex'>
             <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none  p-10">
                <h2 className='text-2xl font-semibold text-center'>Login your Account</h2>
      <form className="card-body" onSubmit={hanleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
     {
      error.login && (
        <label className="label text-sm text-red-600">
      {error.login}
      </label>
      )
     }



          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white">Login</button>
        </div>
      </form>
      <p className='text-center font-semibold'>Dont’t Have An Account ? <Link className='text-red-500' to='/auth/register'> Register</Link></p>
    </div>
</div>
        
    );
};

export default Login;