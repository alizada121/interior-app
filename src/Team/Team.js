import React, { useRef,useState} from 'react'
import { gsap } from "gsap";
import "../Team/Team.css"

import team1 from "../assets/Team1.png"


function Team() {

  // const team1Ref=useRef();
  // const team2Ref=useRef();
  // const team3Ref=useRef();
  // const team4Ref=useRef();

  // const click1Ref=useRef();
  // const click2Ref=useRef();
  // const click3Ref=useRef();
  // const click4Ref=useRef();

  // const [clickTwo,setClickTwo]=useState(false)

  // const tl = gsap.timeline();

  
  // const divArray=[team1Ref,team2Ref,team3Ref,team4Ref]
  // const buttonArray=[click1Ref,click2Ref,click3Ref,click4Ref]

  // if(clickTwo==true){
  //    console.log("hello")
  // }else(console.log("sagol"))

  



  // const changeTeam1=()=>{
   
  //   gsap.from(team1Ref.current, {  opacity:"0",duration:2,y: -50});
  //   team1Ref.current.style.display="flex"
  //   team2Ref.current.style.display="none"
  //   team3Ref.current.style.display="none"
  //   team4Ref.current.style.display="none"

  // }

  // const changeTeam2=()=>{
  //   tl.to(team1Ref.current, {  opacity:"0", duration:0.5,y:-200},);
  //   tl.from(team2Ref.current, {  opacity:"0",duration:1,y:50});
  //   // tl.to(team3Ref.current, {  opacity:"0", duration:0.5,y:-200},);
  //   // team1Ref.current.style.display="none"
  //   team2Ref.current.style.display="flex"
  //   team3Ref.current.style.display="none"
  //   team4Ref.current.style.display="none"
  // }

  // const changeTeam3=()=>{
  //   gsap.from(team3Ref.current, {  opacity:"0",duration:2,y: 100});
  //   team1Ref.current.style.display="none"
  //   team2Ref.current.style.display="none"
  //   team3Ref.current.style.display="flex"
  //   team4Ref.current.style.display="none"
    
  // }

  // const changeTeam4=()=>{
  //   gsap.from(team4Ref.current, {  opacity:"0",duration:2,y: 100});
  //   team1Ref.current.style.display="none"
  //   team2Ref.current.style.display="none"
  //   team3Ref.current.style.display="none"
  //   team4Ref.current.style.display="flex"
    
  // }
  return (
    <div className='team-container'>
        <div className='team-header'>
            <div className='team-empty-left'></div>
            <div className='team-heading'><h1>Team</h1></div>
            <div className='team-empty-right'></div>
        </div>

        <div className='team-general'>
          <div className='changable-team' >

          
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

          <div className='team-list-container'>
            <div className='team-list'>
                <p className='main-team'  >Main architector</p>
                <p>Manager</p>
                <p >Visualizer</p>
                <p >Designer</p>

            </div>


          </div>


        </div>

        <div className='changable-team2' >
        <div className='team-text2'>
              <div className='team-text-para2'>
                <p> IKINCI Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                   A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                    dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                    ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                    tellus elementum”
                 </p>
              </div>

              <div className='team-member-text2'>
                  <h4>
                  Davud Khani-zada
                  </h4>

                  <p>
                  Main architector
                  </p>
              </div>
          </div>


          <div className='team-image-container2'>
              <div className='team-image2'>
                <img src={team1}></img>

              </div>
          </div>
        </div>



        <div className='changable-team3' >
        <div className='team-text3'>
              <div className='team-text-para3'>
                <p> UCUNCU Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                   A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                    dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                    ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                    tellus elementum”
                 </p>
              </div>

              <div className='team-member-text3'>
                  <h4>
                  Davud Khani-zada
                  </h4>

                  <p>
                  Main architector
                  </p>
              </div>
          </div>


          <div className='team-image-container3'>
              <div className='team-image3'>
                <img src={team1}></img>

              </div>
          </div>
        </div>


        <div className='changable-team4' >
        <div className='team-text4'>
              <div className='team-text-para4'>
                <p>DORDUNCU Sit vestibulum dolor ut nisl tortor aliquet id elementum orci.
                   A id nibh dignissim sit semper hac blandit pulvinar. Morbi molestie porttitor
                    dolor quisque imperdiet lorem amet est. Ultrices viverra in cursus aenean a, 
                    ac. Pharetra mattis habitasse justo ullamcorper tortor sociis egestas. Euismod 
                    tellus elementum”
                 </p>
              </div>

              <div className='team-member-text4'>
                  <h4>
                  Davud Khani-zada
                  </h4>

                  <p>
                  Main architector
                  </p>
              </div>
          </div>


          <div className='team-image-container4'>
              <div className='team-image4'>
                <img src={team1}></img>

              </div>
          </div>
        </div>

    </div>
  )
}

export default Team