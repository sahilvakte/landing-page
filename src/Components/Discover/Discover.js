import React from 'react'
import "../Discover/Discover.css"

import Discpicone from "../../Assets/SVG/discpicone.svg"
import Discpictwo from "../../Assets/SVG/discpictwo.svg"

const Discover = () => {
  return (
    <div className='discover-black-container'>
    {/* Container 1 */}
        <div className='discover-first-images'>
            <img className='discover-first-images-logo' 
            alt='discpicone'
            // src='https://svgsilh.com/svg/28783-f49690.svg'
            src={Discpicone}
      
            />
        </div>
        {/* Container 2 */}
        <div className='discover-blackbox-text'>
            <p className='discover-blackbox-text-first-block'>New Trend </p>
            <h3 className='discover-blackbox-text-second-block'>Discover The <br/> Natural Beauty</h3>
        </div>
        {/* Container 3 */}
        <div className='discover-second-images'>
            <img className='discover-second-images-logo' 
            alt='discpictwo'
            // src='https://svgsilh.com/svg/2611803-e91e63.svg'
            
              src={Discpictwo}
            />
        </div>
    </div>
  )
}

export default Discover