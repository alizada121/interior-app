import React from 'react'
import project1 from '../assets/project1.png'
import "../Project/Project.css"

function Project() {
  return (
    <div className='project-container'>
        <div className='project-image'>
            <img src={project1}></img>
        </div>

        <div className='project-form-container'>
            <div className='project-form-heading'>
                <h2>Let's discuss your project</h2>
                <p>Fill out the form and our manager will contact with you to clarify the details</p>
                 
            </div>

            <div className='project-form'>

                <div className='project-form-row'>
                 <input type="text" placeholder="Name" />
                 <input type="text" placeholder="Your comment" />
                </div>

                <div className='project-form-column'>
                    <input type="text" placeholder="(+994 XX) XXX XX XX" className='number'/> 
                    <input type="submit" value="Send" className='submit' />

                </div>


            </div>
             
        </div>
    </div>
  )
}

export default Project