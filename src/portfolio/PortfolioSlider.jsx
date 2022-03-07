import React,{useRef, Component} from 'react'

import Swiper from "react-id-swiper";
import cloudinary from "cloudinary-core/cloudinary-core-shrinkwrap.js";

import portfolio1 from "../assets/portfolio3.png"
import portfolio2 from "../assets/portfolio2.png"
import portfolio3 from "../assets/portfolio3.png"

import "../portfolio/PortfolioSlider.css"

function PortfolioSlider() {

    // ///////////////////////////////////////////////Image1
    const portfolioSliderButtonRef1=useRef();
    const portfolioSliderDescriptionRef1=useRef();
    const portfolio1Ref=useRef();

    const hoverOn1=()=>{
        portfolioSliderButtonRef1.current.style.display="block"
        portfolioSliderDescriptionRef1.current.style.display="none"
        portfolio1Ref.current.style.opacity="0.3"
    }

    const hoverOff1=()=>{
        portfolioSliderButtonRef1.current.style.display="none"
        portfolioSliderDescriptionRef1.current.style.display="block"
        portfolio1Ref.current.style.opacity="1"

    }

    // ///////////////////////////////////////////////Image2

    const portfolioSliderButtonRef2=useRef();
    const portfolioSliderDescriptionRef2=useRef();
    const portfolio2Ref=useRef();

    const hoverOn2=()=>{
        portfolioSliderButtonRef2.current.style.display="block"
        portfolioSliderDescriptionRef2.current.style.display="none"
        portfolio2Ref.current.style.opacity="0.3"
    }

    const hoverOff2=()=>{
        portfolioSliderButtonRef2.current.style.display="none"
        portfolioSliderDescriptionRef2.current.style.display="block"
        portfolio2Ref.current.style.opacity="1"

    }

    // ///////////////////////////////////////////////Image3

    const portfolioSliderButtonRef3=useRef();
    const portfolioSliderDescriptionRef3=useRef();
    const portfolio3Ref=useRef();

    const hoverOn3=()=>{
        portfolioSliderButtonRef3.current.style.display="block"
        portfolioSliderDescriptionRef3.current.style.display="none"
        portfolio3Ref.current.style.opacity="0.3"
    }

    const hoverOff3=()=>{
        portfolioSliderButtonRef3.current.style.display="none"
        portfolioSliderDescriptionRef3.current.style.display="block"
        portfolio3Ref.current.style.opacity="1"

    }

    const portfolioSliderLine1Ref=useRef();
    const portfolioSliderLine2Ref=useRef();
    const portfolioSliderLine3Ref=useRef();
    const portfolioSliderLine4Ref=useRef();

    const portfolioSliderLine1 =()=>{
        portfolioSliderLine1Ref.current.style.border=" border: #435877 solid 1.5px;"
        portfolioSliderLine1Ref.current.style.background=" #435877"

        portfolioSliderLine2Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine2Ref.current.style.background=" #B4A890"

        portfolioSliderLine3Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine3Ref.current.style.background=" #B4A890"

        portfolioSliderLine4Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine4Ref.current.style.background=" #B4A890"
    }

    const portfolioSliderLine2 =()=>{
        portfolioSliderLine2Ref.current.style.border=" border: #435877 solid 1.5px;"
        portfolioSliderLine2Ref.current.style.background=" #435877"

        portfolioSliderLine1Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine1Ref.current.style.background=" #B4A890"

        portfolioSliderLine3Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine3Ref.current.style.background=" #B4A890"

        portfolioSliderLine4Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine4Ref.current.style.background=" #B4A890"
    }

    const portfolioSliderLine3 =()=>{
        portfolioSliderLine3Ref.current.style.border=" border: #435877 solid 1.5px;"
        portfolioSliderLine3Ref.current.style.background=" #435877"

        portfolioSliderLine2Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine2Ref.current.style.background=" #B4A890"

        portfolioSliderLine1Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine1Ref.current.style.background=" #B4A890"

        portfolioSliderLine4Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine4Ref.current.style.background=" #B4A890"
    }

    const portfolioSliderLine4 =()=>{
        portfolioSliderLine4Ref.current.style.border=" border: #435877 solid 1.5px;"
        portfolioSliderLine4Ref.current.style.background=" #435877"

        portfolioSliderLine2Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine2Ref.current.style.background=" #B4A890"

        portfolioSliderLine3Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine3Ref.current.style.background=" #B4A890"

        portfolioSliderLine1Ref.current.style.border=" border: #B4A890 solid 1.5px;"
        portfolioSliderLine1Ref.current.style.background=" #B4A890"
    }


    

  



  return (
    <div className='portfolioSlider-container'>
        <div className='portfolioSlider'>
            <div className='portfolioSlider-images'> 
            <div className='portfolioSlider-image' onMouseOver={hoverOn1} onMouseLeave={hoverOff1}>
                <img src={portfolio1} ref={portfolio1Ref}></img>
                <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef1}><p>Nibh habitasse nulla</p></div>
                <div className='portfolioSlider-button' ref={portfolioSliderButtonRef1}> <button><p>Order a Project</p></button></div>
            </div>
            
            <div className='portfolioSlider-image' onMouseOver={hoverOn2} onMouseLeave={hoverOff2}>
            <img src={portfolio2} ref={portfolio2Ref}></img>
            <div className='portfolioSlider-description' ref={portfolioSliderDescriptionRef2}><p>Nibh habitasse nulla</p> </div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef2}> <button><p>Order a Project</p></button></div>
            </div>
            

            <div className='portfolioSlider-image' onMouseOver={hoverOn3} onMouseLeave={hoverOff3}>
            <img src={portfolio3} ref={portfolio3Ref}></img>
            <div className='portfolioSlider-description'  ref={portfolioSliderDescriptionRef3}> <p>Nibh habitasse nulla</p></div>
            <div className='portfolioSlider-button' ref={portfolioSliderButtonRef3}> <button><p>Order a Project</p></button></div>
            </div>
            
            </div>

            <div className='portfolioSlider-lines'>
                <div className='portfolioSlider-line' ref={portfolioSliderLine1Ref} onClick={portfolioSliderLine1}></div>
                <div className='portfolioSlider-line' ref={portfolioSliderLine2Ref} onClick={portfolioSliderLine2}></div>
                <div className='portfolioSlider-line' ref={portfolioSliderLine3Ref} onClick={portfolioSliderLine3}> </div>
                <div className='portfolioSlider-line' ref={portfolioSliderLine4Ref} onClick={portfolioSliderLine4}></div>
            </div>

            

        </div>


        

    </div>
  )
}

export default PortfolioSlider