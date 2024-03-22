import { Alert, Button, TextInput } from 'flowbite-react';
import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

export default function SignIn() {
    const [formData , setFormData] = useState({});
    const [errorMessage , setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()});
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.u_name || !formData.u_pass || !formData.u_email || !formData.member_code ) {
            return dispatch(signInFailure('Please fill all the fields'));
        }
        
        try {
            dispatch(signInStart());
            const res = await fetch('/api/member/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                toast.error('Invalid Credentials');
                dispatch(signInFailure(data.message));
            } else if (res.ok) {
             

                toast.success('You are logged in', {style: { backgroundColor: 'green', color: '#fff' }});
            
                setTimeout(()=>{
                  dispatch(signInSuccess(data));

                  navigate('/create');
                },1000)
            }
        } catch (error) {
            toast.error('Invalid Credentials');
            dispatch(signInFailure(error.message));
        }
    };

    return (
        <div className='flex flex-col'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col w-[400px] justify-center  mx-auto gap-2 '>
                    <h1 className='font-semibold text-2xl text-center'>Sign-In Here</h1>
                    <Toaster />
                    <TextInput type='text'   id='u_name' placeholder='Enter Your Username' onChange={handleChange}/>
                    <TextInput type='email'  id='u_email' placeholder='Enter Your Email' onChange={handleChange}/>
                    <TextInput type='password' id='u_pass' placeholder='Enter Your Password' onChange={handleChange}/>
                    <TextInput type='text' id='member_code' placeholder='Enter Your Member_code' onChange={handleChange}/>
                </div>
                <Button type='submit' gradientDuoTone='purpleToBlue' outline size='sm' className='w-[100px] mx-auto mt-3'>Submit</Button>
            </form>
        </div>
    );
}
