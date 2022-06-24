import React, { useEffect, useState } from 'react'

function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY> 100){
                handleShow(true)
            }
            else handleShow(false)
        })
    },[])
  return (
    <nav className={`nav ${show && 'nav-black'}`}>
        <img
         className='nav-logo' 
         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
         alt="Netflix" />

         <img
          className='nav-avatar' 
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="Netflix" />
    </nav>
  )
}

export default Navbar