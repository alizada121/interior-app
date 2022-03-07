import React,{useRef,useEffect} from 'react'
import "../header/Logo.css"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap';


function Logo() {
  const lineLogoRef= useRef();
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
    
  //   gsap.fromTo(
      
  //     lineLogoRef.current,
  //     {
  //       width: "0%",
  //     },
  //     {
  //       width: "100%",
  //       duration: 0.6,
  //       scrollTrigger: {
  //         trigger: "#line-logo",
  //         start: "top 10%",
  //         // start: "-=300",
  //         end: "+=300",
  //         scrub: false,
  //         markers:true,
  //       },
  //     }
  //   )
  // })



  return (
    <div className='logo-container'>
      <div className='logo-desktop'>
      <svg width="90" height="633" viewBox="0 0 90 633" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M65 306.756L25.784 306.756L25.784 300.315L65 300.315L65 306.756ZM65 264.981L37.526 283.506L37.526 283.734L65 283.734L65 289.89L25.784 289.89L25.784 283.221L52.289 265.209L52.289 264.981L25.784 264.981L25.784 258.825L65 258.825L65 264.981ZM65 240.27L31.769 240.27L31.769 252.183L25.784 252.183L25.784 221.916L31.769 221.916L31.769 233.829L65 233.829L65 240.27ZM65 215.244L25.784 215.244L25.784 189.081L31.598 189.081L31.598 208.803L42.314 208.803L42.314 191.76L48.128 191.76L48.128 208.803L59.186 208.803L59.186 189.081L65 189.081L65 215.244ZM65 157.137L50.18 162.951L50.18 163.065L50.18 174.18L65 174.18L65 180.621L25.784 180.621L25.784 162.324C25.784 159.132 26.278 156.719 27.266 155.085C28.216 153.413 29.565 152.311 31.313 151.779C33.023 151.209 35.246 150.924 37.982 150.924C40.604 150.924 42.96 151.323 45.05 152.121C47.102 152.881 48.527 154.42 49.325 156.738L65 150.297L65 157.137ZM44.423 165.003C44.423 162.685 44.233 160.994 43.853 159.93C43.435 158.828 42.789 158.125 41.915 157.821C41.041 157.517 39.73 157.365 37.982 157.365C36.158 157.365 34.828 157.517 33.992 157.821C33.156 158.087 32.548 158.733 32.168 159.759C31.788 160.785 31.598 162.457 31.598 164.775L31.598 174.18L44.423 174.18L44.423 165.003ZM65 141.879L25.784 141.879L25.784 135.438L65 135.438L65 141.879ZM65.456 109.965C65.456 115.209 64.924 118.952 63.86 121.194C62.758 123.398 60.915 124.804 58.331 125.412C55.747 126.02 51.434 126.324 45.392 126.324C39.35 126.324 35.037 126.02 32.453 125.412C29.869 124.804 28.045 123.398 26.981 121.194C25.879 118.952 25.328 115.209 25.328 109.965C25.328 104.721 25.879 100.978 26.981 98.7358C28.045 96.4938 29.888 95.0688 32.51 94.4608C35.094 93.8528 39.388 93.5488 45.392 93.5488C51.396 93.5488 55.709 93.8528 58.331 94.4608C60.915 95.0688 62.758 96.4938 63.86 98.7358C64.924 100.978 65.456 104.721 65.456 109.965ZM59.642 109.965C59.642 106.469 59.414 104.113 58.958 102.897C58.502 101.681 57.381 100.902 55.595 100.56C53.809 100.18 50.408 99.9898 45.392 99.9898C40.376 99.9898 36.975 100.18 35.189 100.56C33.403 100.902 32.282 101.681 31.826 102.897C31.37 104.113 31.142 106.469 31.142 109.965C31.142 113.461 31.37 115.817 31.826 117.033C32.282 118.211 33.403 118.99 35.189 119.37C36.975 119.712 40.376 119.883 45.392 119.883C50.408 119.883 53.809 119.712 55.595 119.37C57.381 118.99 58.502 118.211 58.958 117.033C59.414 115.817 59.642 113.461 59.642 109.965ZM65 60.8941L50.18 66.7081L50.18 66.8221L50.18 77.9371L65 77.9371L65 84.3781L25.784 84.3781L25.784 66.0811C25.784 62.8891 26.278 60.4761 27.266 58.8421C28.216 57.1701 29.565 56.0681 31.313 55.5361C33.023 54.9661 35.246 54.6811 37.982 54.6811C40.604 54.6811 42.96 55.0801 45.05 55.8781C47.102 56.6381 48.527 58.1771 49.325 60.4951L65 54.0541L65 60.8941ZM44.423 68.7601C44.423 66.4421 44.233 64.7511 43.853 63.6871C43.435 62.5851 42.789 61.8821 41.915 61.5781C41.041 61.2741 39.73 61.1221 37.982 61.1221C36.158 61.1221 34.828 61.2741 33.992 61.5781C33.156 61.8441 32.548 62.4901 32.168 63.5161C31.788 64.5421 31.598 66.2141 31.598 68.5321L31.598 77.9371L44.423 77.9371L44.423 68.7601Z" fill="#9C917B"/>
      <line x1="81" y1="-4.37114e-08" x2="81" y2="633" stroke="#435877" stroke-width="2" opacity="1" className='line-logo' id="line-logo" ref={lineLogoRef}/>
     </svg>
     </div>


     <div className='logo-mobile'>
       <div className='logo-name-mobile'>
            <h3>Interior</h3>
       </div>

       <div className='logo-empty-mobile'>

       </div>

     </div>
    </div>

    
  )
}

export default Logo