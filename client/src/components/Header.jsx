import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Navbar} from 'flowbite-react'

export default function Header() {
  return (
    <Navbar className='flex justify-center items-center top-0 sticky bg-transparent hover:bg-white'>
    {/* logo */}
    <div className="">
      <h1 className='text-2xl font-semibold hover:text-blue-600 cursor-pointer '>Zodd</h1>
    </div>
 
<div className=" flex gap-5">

          <Button gradientDuoTone='purpleToPink' outline>
            
          <Link to='/create'>Create
            
            
            </Link>
            </Button>  
            <Button gradientDuoTone='purpleToBlue' outline>


            <Link to='/sign-in'>Sign in
            
            </Link>
            </Button><Button gradientDuoTone='purpleToBlue' outline>


            <Link to='/sign-up'>Sign Up
            
            </Link>
            </Button>



</div>

     
       
     
      
    </Navbar>
  )
}
