import React, { useRef,useEffect} from 'react'
import { gsap } from "gsap";
import "../Team/Team.css"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import team1 from "../assets/Team1.png"


function Team() {

  const team1Ref=useRef();
  const team2Ref=useRef();
  const team3Ref=useRef();
  const team4Ref=useRef();

  const click1Ref=useRef();
  const click2Ref=useRef();
  const click3Ref=useRef();
  const click4Ref=useRef();


  const TeamEmptyLeftRef=useRef();
  const TeamEmptyRightRef=useRef();

  
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    
    gsap.fromTo(TeamEmptyLeftRef.current,  {
        
            width: "0%"
        },
        {
         width: "70%",
         duration:2,
         scrollTrigger:{
             
             trigger:".team-container",
             start:" 50% 20% ",
             end:"50% 90%",
            //  markers:true
         }
        
        
        
        });



        gsap.fromTo( TeamEmptyRightRef.current,  {
        
            width: "0%"
        },
        {
         width: "20%",
         duration:2,
         scrollTrigger:{
            
             trigger:".team-container",
             start:" 50% 20% ",
             end:"50% 90%",
            //  markers:true
         }
        
        
        
        });
  },[]);
  

  



  const changeTeam1=()=>{
   
    gsap.from(team1Ref.current, {  opacity:"0",duration:2,y: 100});
    team1Ref.current.style.display="flex"
    team2Ref.current.style.display="none"
    team3Ref.current.style.display="none"
    team4Ref.current.style.display="none"

  }

  const changeTeam2=()=>{
    gsap.from(team2Ref.current, {  opacity:"0",duration:2,y: 100});
    team1Ref.current.style.display="none"
    team2Ref.current.style.display="flex"
    team3Ref.current.style.display="none"
    team4Ref.current.style.display="none"
  }

  const changeTeam3=()=>{
    gsap.from(team3Ref.current, {  opacity:"0",duration:2,y: 100});
    team1Ref.current.style.display="none"
    team2Ref.current.style.display="none"
    team3Ref.current.style.display="flex"
    team4Ref.current.style.display="none"
    
  }

  const changeTeam4=()=>{
    gsap.from(team4Ref.current, {  opacity:"0",duration:2,y: 100});
    team1Ref.current.style.display="none"
    team2Ref.current.style.display="none"
    team3Ref.current.style.display="none"
    team4Ref.current.style.display="flex"
    
  }
  return (
    <div className='team-container' >
        <div className='team-header'>
            <div className='team-empty-left' ref={TeamEmptyLeftRef}></div>
            <div className='team-heading'><h1>Team</h1></div>
            <div className='team-empty-right'  ref={TeamEmptyRightRef}></div>
        </div>

        <div className='team-general'>
          <div className='changable-team' ref={team1Ref} >

          
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
        


          <div className='team-image-container'>
              <div className='team-image'>
                <img src={team1}></img>

              </div>
          </div>

          </div>


        </div>

         

        <div className='changable-team team2' id="team2" ref={team2Ref} >
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



        <div className='changable-team team3' id="team3" ref={team3Ref}>
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


          <div className='team-image-container3'>
              <div className='team-image'>
                <img src={team1}></img>

              </div>
          </div>
        </div>


        <div className='changable-team '  id="team4" ref={team4Ref}>
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


          <div className='team-list-container'>
            <div className='team-list'>
                <p className='main-team' onClick={changeTeam1} >Main architector</p>
                <p  onClick={changeTeam2}>Manager</p>
                <p  onClick={changeTeam3}>Visualizer</p>
                <p  onClick={changeTeam4}>Designer</p>

            </div>


          </div>
        </div>

    </div>
  )
}

export default Team