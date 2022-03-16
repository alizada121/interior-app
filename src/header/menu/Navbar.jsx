import React,{useState,useRef} from 'react'
import {Link,Route} from 'react-router-dom'
import Contact from './Contact'
import Menu from './Menu'



import "../menu/Navbar.css"
import { compose } from 'redux'



function Navbar() {
  const menuBtnRef=useRef();
  const MobileMenuRef=useRef();
  const [open,setOpen]=useState(true);
  
  
  const hamburger=()=>{
    

    if(open){
      console.log("Salam")
      

      MobileMenuRef.current.style.display="block"
      setOpen(false)
    }else{
      console.log("sagol")

      MobileMenuRef.current.style.display="none"
      setOpen(true)
      
    }

  }
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <Menu/>
        <Contact/>
      </div>
      
      <div  id="menu-btn" className={` menu-btn ${ !open ? " open" : ""}`}  ref={menuBtnRef} onClick={hamburger}>
        <div className="menu-btn-burger">
       

        </div>
    </div>

   
    <div className='mobile-menu-container' ref={MobileMenuRef}> 
    <div className='mobile-menu'>
     
        <div className='mobile-menu-div'><p>Services</p></div>
        <div className='mobile-menu-div'><p>Portfolio</p></div>
        <div className='mobile-menu-div'><p>Contact</p></div>
     


    </div>
    

    

    </div>

    
   
        

    </div>
  )
}

export default Navbar