import { Select, TextInput } from 'flowbite-react'
import React from 'react'

export default function Create() {
  return (
    <div className=''>
      <form action="">
<TextInput type='text' name='username' id='username' className='' placeholder='Enter Youe Username'/>
<TextInput type='email' name='email' id='email' className='' placeholder='Enter Youe Email'/>
<Select name='gender' id='gender' className=''>
    <option selected>Choose Your Gender</option>
   <option value='male'>Male</option>
   <option value='female'>FeMale</option>
   <option value='others'>They/Them</option>

</Select>
<TextInput type='text' name='address' id='address' className='' placeholder='Enter Youe Address'/>
<TextInput type='text' name='contact' id='contact' className='' placeholder='Enter Youe Contact'/>
<TextInput type='legal' name='legal' id='legal' className='' placeholder='Enter Your Legal Document'/>
<TextInput type='number' name='time' id='time' className='' placeholder='What is the Lodging duration(days)'/>
<TextInput type='text' name='room_no' id='room_no' className='' placeholder='What is Your Room No'/>








      </form>
    </div>
  )
}
