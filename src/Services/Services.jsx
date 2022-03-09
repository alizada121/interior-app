import React from 'react'
import "../Services/Services.css"

import services1 from "../assets/services1.png"
import services2 from "../assets/services2.png"
import services3 from "../assets/services3.png"

function Services() {
  return (
    <div className='services-container'>
        <div className='services-header'>
            <div className='services-header-empty leftServ'></div>
            <div className='services-heading'>
                <h2>Types of services</h2>
            </div>
            <div className='services-header-empty rightServ' ></div>

        </div>

        <div className='services-body'>
            <div className='service'>
                
                <h4>Standart</h4>
                <p>
                In ipsum at mi magna lorem massa. Risus viverra faucibus mauris integer augue semper vestibulum. Sit praesent
                </p>
                <div className='services-img'>
                <img src={services1}></img>
                <div className='services-description'>
                <p>Blandit augue dictum</p>
                </div>
                </div>
            </div>

            <div className='service Premium'>
                <h4>Premium</h4>
                <p>
                Urna vel augue in dui porta nisl. Sed aenean mauris, a, nullam lobortis amet porttitor non in. Lorem id
                </p>

                <div className='services-img'>
                <img src={services2}></img>
                <div className='services-description'>
                    <p>
                        Posuere quis id inder
                    </p>

                </div>
                </div>

            </div>

            <div className='service'>
                <h4>Luxury</h4>
                <p>
                    Massa non orci pharetra risus suspendisse. Cras viverra sed id tincidunt hendrerit augue ut. Ipsum aliquet euismod
                </p>

                <div className='services-img'>
                <img src={services3}></img>
                <div className='services-description'>
                    <p>
                     Aliquam molestie nullam
                    </p>

                </div>
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default Services