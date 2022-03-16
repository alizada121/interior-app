import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import team1 from "../assets/Team1.png"
import "../Team4/team4.css"
// Import Swiper styles
import 'swiper/css';




// import required modules

function Team4() {
  const changable14Ref=useRef();
  const button1Ref=useRef();
  const button2Ref=useRef();
  const button3Ref=useRef();
  const button4Ref=useRef();

  const Team1Ref=useRef();
  const Team2Ref=useRef();
  const Team3Ref=useRef();
  const Team4Ref=useRef();

  const click14=()=>{
    gsap.to(changable14Ref.current, { transform:" translate3d(0px, 0px, 0px)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d(0%, 0%, 0%)",duration:1});
    // changable14Ref.current.style.transform=" translate3d(0px, 0px, 0px)"

   button1Ref.current.style.color="#435877"
   button1Ref.current.style.textDecoration="underline"

   button2Ref.current.style.color="#CCD7E9 "
   button2Ref.current.style.textDecoration="none"

   button3Ref.current.style.color="#CCD7E9 "
   button3Ref.current.style.textDecoration="none"

   button4Ref.current.style.color="#CCD7E9 "
   button4Ref.current.style.textDecoration="none"

   Team1Ref.current.style.opacity="1"
   Team2Ref.current.style.opacity="0"
   Team3Ref.current.style.opacity="0"
   Team4Ref.current.style.opacity="0"
  }
  
  const click24=()=>{
    gsap.to(changable14Ref.current, { transform:" translate3d(0px, -460px, 0px)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d(0%, 25%, 0%)",duration:1});
    // changable14Ref.current.style.transform=" translate3d(0px, , 0px)"

    button2Ref.current.style.color="#435877"
    button2Ref.current.style.textDecoration="underline"
 
    button1Ref.current.style.color="#CCD7E9 "
    button1Ref.current.style.textDecoration="none"
 
    button3Ref.current.style.color="#CCD7E9 "
    button3Ref.current.style.textDecoration="none"
 
    button4Ref.current.style.color="#CCD7E9 "
    button4Ref.current.style.textDecoration="none"

    Team1Ref.current.style.opacity="0"
    Team2Ref.current.style.opacity="1"
    Team3Ref.current.style.opacity="0"
    Team4Ref.current.style.opacity="0"

  }

  const click34=()=>{
    gsap.to(changable14Ref.current, { transform:" translate3d(0px, -920px, 0px)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d(0, 50%, 0%)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d('0vh', '200vh', '0vh')",duration:1});
    // changable14Ref.current.style.transform=" translate3d(0px, -920px, 0px)"

    button3Ref.current.style.color="#435877"
    button3Ref.current.style.textDecoration="underline"
 
    button1Ref.current.style.color="#CCD7E9 "
    button1Ref.current.style.textDecoration="none"
 
    button2Ref.current.style.color="#CCD7E9 "
    button2Ref.current.style.textDecoration="none"
 
    button4Ref.current.style.color="#CCD7E9 "
    button4Ref.current.style.textDecoration="none"

    Team1Ref.current.style.opacity="0"
    Team2Ref.current.style.opacity="0"
    Team3Ref.current.style.opacity="1"
    Team4Ref.current.style.opacity="0"
  }

  const click44=()=>{
    gsap.to(changable14Ref.current, { transform:" translate3d(0px, -1380px, 0px)",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d('0%', '75%', '0%')",duration:1});
    // gsap.to(changable14Ref.current, { transform:" translate3d('0vh', '300vh', '0vh')",duration:1});
    // changable14Ref.current.style.transform=" translate3d(0px, -1380px, 0px)"

    button4Ref.current.style.color="#435877"
    button4Ref.current.style.textDecoration="underline"
 
    button1Ref.current.style.color="#CCD7E9 "
    button1Ref.current.style.textDecoration="none"
 
    button3Ref.current.style.color="#CCD7E9 "
    button3Ref.current.style.textDecoration="none"
 
    button2Ref.current.style.color="#CCD7E9 "
    button2Ref.current.style.textDecoration="none"

    Team1Ref.current.style.opacity="0"
    Team2Ref.current.style.opacity="0"
    Team3Ref.current.style.opacity="0"
    Team4Ref.current.style.opacity="1"
      
}
  


  return (

    <div className="team2-cont">

<div className='team-list-mobile4'>
            <Swiper
                spaceBetween={180}
                slidesPerView={1.3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide  onClick={click14}  ><p >Main architector</p></SwiperSlide>
                <SwiperSlide  onClick={click24}   ><p >Manager</p></SwiperSlide>
                <SwiperSlide   onClick={click34} > <p>Visualizer</p></SwiperSlide>
                <SwiperSlide   onClick={click44} ><p >Designer</p></SwiperSlide>

             </Swiper> 
          
        </div>
        <div className="team2" >
            
            <div  className="changable-team-cont" ref={changable14Ref}>

           
            <div className='changable-team' ref={Team1Ref}>

          
            <div className='team-text'>
              <div className='team-text-para'>
                <p> BIRINCI Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                   A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                    dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                    ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                    tellus elementum”
                 </p>
            </div>          

              <div className='team-member-text'>
                  <h4>
                  Davud Khani-zada
                  </h4>         

                  <p>
                  Main architector
                  </p>
              </div>          

           </div>         

            <div className='team-image-container'>
                <div className='team-image'>
                  <img src={team1}></img>         

                </div>
            </div>          




           </div>
   



    
         <div className='changable-team '  ref={Team2Ref} >
         <div className='team-text'>
               <div className='team-text-para'>
                 <p> IKINCI Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                    A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                     dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                     ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                     tellus elementum”
                  </p>
               </div>

               <div className='team-member-text'>
                   <h4>
                   Davud Khani-zada
                   </h4>

                   <p>
                   Main architector
                   </p>
               </div>
           </div>


           <div className='team-image-container'>
               <div className='team-image'>
                 <img src={team1}></img>

               </div>
           </div>
         </div>
          
         <div className='changable-team'   ref={Team3Ref} >
          <div className='team-text'>
                <div className='team-text-para'>
                  <p> UCUNCU Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                     A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                      dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                      ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                      tellus elementum”
                   </p>
                </div>

                <div className='team-member-text'>
                    <h4>
                    Davud Khani-zada
                    </h4>

                    <p>
                    Main architector
                    </p>
                </div>
            </div>


          <div className='team-image-container'>
              <div className='team-image'>
                <img src={team1}></img>

              </div>
          </div>
            </div>
    
         <div className='changable-team '  ref={Team4Ref} >
         <div className='team-text'>
               <div className='team-text-para'>
                 <p>DORDUNCU Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                    A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                     dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                     ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                     tellus elementum”
                  </p>
               </div>

               <div className='team-member-text'>
                   <h4>
                   Davud Khani-zada
                   </h4>

                   <p>
                   Main architector
                   </p>
               </div>
           </div>

           
          


          <div className='team-image-container'>
              <div className='team-image'>
                <img src={team1}></img>

              </div>
          </div>

        </div>
        </div>
     
        <div className='team-list-cont'>
            <div className='team-list4'>
                <p className='main-team'         onClick={click14} ref={button1Ref}>Main architector</p>
                <p  className=" team-list-para"  onClick={click24}  ref={button2Ref}>Manager</p>
                <p   className=" team-list-para"  onClick={click34} ref={button3Ref} >Visualizer</p>
                <p   className=" team-list-para"  onClick={click44} ref={button4Ref} >Designer</p>

          </div>



         
      </div>
      
       
     
      


     
    </div>
    </div>
  )
}

export default Team4
