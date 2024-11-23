// import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';
import { useContext } from 'react';


const Register = () => {
  const {createnewUser,setUser, updateUserProfile } = useContext(Authcontext)
  const[error,seterror]=useState({})
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
      const form = new FormData(e.target)
      const name=form.get('name')
      if(name.length < 5){
        seterror({...error, name:"must be 5 char more"})
        return;
      }

  


      const photo=form.get('photo')
      const email=form.get('email')
      const pass=form.get('password')

      // console.log({name,email,photo,pass});
      createnewUser(email,pass)
      .then(result=>{
        const user=result.user;
        setUser(user)
        updateUserProfile({displayName:name,photoURL:photo})
        .then(()=>{
          navigate('/')
        })
        .catch(error=>{
          // console.log(error);
        })
      })
      // .catch(error=>{console.log(error)})
  }




    return (
        <div className='min-h-screen  justify-center items-center flex'>
             <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none  p-10">
                <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
      <form className="card-body" onSubmit={handleSubmit}>

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        {
          error.name && (
            <label className="label text-xs text-43e-500">
      {error.name}
          </label>
          )
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-black text-white">Register</button>
        </div>
      </form>
      <p className='text-center font-semibold'>Already Have An Account ? <Link className='text-red-500' to='/auth/login'>Login</Link></p>
    </div>
</div>
    );
};

export default Register;