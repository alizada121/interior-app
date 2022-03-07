import React from 'react'
import "../slider-page/SliderText.css"
function SliderText() {
  return (
    <div className='sliderText-container'>
        <div className='sliderText'>
            <div className='sliderText-header'>
            <h1>
             <b>Beautiful and sustainable</b>
            </h1>

            <div className='sliderText-line'>

            </div>
          </div>
            <p className='sliderText-main-text'>
             Eu eu integer turpis et suspendisse cursus.
             Accumsan commodo, lacus sociis pellentesque. Auctor aliquet vitae 
             enim tempor, habitasse massa a bibendum habitant. 
            </p>



            <div className='order-button-container'>
                <button className='order-button' ><p>Order a project</p></button>
            </div>
        </div>

    </div>
  )
}

export default SliderText