import React from 'react'

import "../portfolio/PortfolioHeader.css"
function PortfolioHeader() {
  return (
    <div className='portfolioHeader-container'>
        <div className='portfolioHeader'>
            <div className='portfolioHeader-empty left'> </div>
            <div className='portfolioHeader-heading'> <h4>Portfolio of our works</h4></div>
            <div className='portfolioHeader-empty right'> </div>     
        </div>

        <div className='portfolioHeader-text'>
            <p className='portfolioHeader-text-para'> 
                Cras nam in blandit tellus. 
                Vel in morbi ipsum erat vestibulum donec enim sagittis. 
                Aenean eu in suscipit elementum vestibulum pulvinar commodo semper phasellus.
            </p>
        </div>

    </div>
  )
}

export default PortfolioHeader