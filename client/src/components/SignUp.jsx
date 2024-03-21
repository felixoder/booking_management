import { Alert, Button, TextInput } from 'flowbite-react'
import React, { useState  } from 'react'
import { useNavigate } from "react-router-dom";
export default function SignUp() {
    const [formData , setFormData] = useState({});
    const [errorMessage , setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()})

    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!formData.u_name || !formData.u_email || !formData.u_pass || !formData.member_code) {


        return setErrorMessage('Please fill out all fields.');
      }
      try {
        setErrorMessage(null);
        const res = await fetch('/api/member/create-members', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),

        });
        const data = await res.json();
        console.log(data)
        if (data.success === false) {
          return setErrorMessage(data.message);
        }
        if(res.ok) {
          navigate('/sign-in');
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
  return (
    <div className='flex flex-col'>
      {errorMessage && 
      
      <Alert color='red' className='mx-auto' >{errorMessage}</Alert>
      
      }
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col w-[400px] justify-center  mx-auto gap-2 '>
<h1 className='font-semibold text-2xl text-center'>Register Here</h1>
      <TextInput type='text'   id='u_name' placeholder='Enter Your Username' onChange={handleChange}/>
      <TextInput type='email'  id='u_email' placeholder='Enter Your Email' onChange={handleChange}/>
      <TextInput type='password' id='u_pass' placeholder='Enter Your Password' onChange={handleChange}/>
      <TextInput type='text' id='member_code' placeholder='Enter Your Member_code' onChange={handleChange}/>
   
      </div>


        <Button type='submit' gradientDuoTone='purpleToBlue' outline size='sm' className='w-[100px] mx-auto mt-3' >Submit</Button>
        </form>

    </div>
  )
}
