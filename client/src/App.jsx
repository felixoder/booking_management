import React from 'react'
import Header from './components/Header'
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import Create from './components/Create'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

export default function App() {
  return (

    <>
    
     <Header/>
    <Routes>
<Route path='/sign-up' element={<SignUp/>}/>
<Route path='/create' element={<Create/>}/>
<Route path='/sign-in' element={<SignIn/>}/>

    </Routes>
    
    
    </>
  )
}

