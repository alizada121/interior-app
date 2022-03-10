import React,{useState,useRef} from 'react'
import Contact from './Contact'
import Menu from './Menu'

import { Link } from 'react-router-dom';

import "../menu/Navbar.css"
import { compose } from 'redux'



function Navbar() {
  const menuBtnRef=useRef();
  const [open,setOpen]=useState(false);
  
  
  const hamburger=()=>{
    

    if(open){
      console.log("Salam")
      

      
      setOpen(false)
    }else{
      console.log("sagol")

      
      setOpen(true)
      
    }

  }
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <Menu/>
        <Contact/>
      </div>
      
      <div  id="menu-btn" className={` menu-btn ${ open ? " open" : ""}`}  ref={menuBtnRef} onClick={hamburger}>
        <div className="menu-btn-burger">

        </div>
    </div>
   
        

    </div>
  )
}

export default Navbar