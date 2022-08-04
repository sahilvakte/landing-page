import React from 'react'
import "../Arrival/Arrival.css"

const Arrival = () => {
  return (
    <div className="new-arrival-main-container">

    {/* Main Center Tagline */}
      <div className="new-arrival-text-data">
        <h3 className="new-arrival-tag-line">New Arrival</h3>
        <p className="new-arrival-tag-line-para">
          The line of Women's sprays Cosmetics in 2019 <br/> was replenished with a
          <br /> new masterpiece
        </p>
      </div>

      {/* Cards */}
      <div className="new-arrival-main-container-of-products">

        <div className='new-arrival-card-one'></div>

        {/* Card 1 */}
        <div className="new-arrival-product-card-one">
          <div className="new-arrival-product-card-one-for-image">
            <img className="new-arrival-product-card-one-for-image-product-one" src="https://pbs.twimg.com/media/DZmPFqhUMAA12HJ.jpg"/>
          </div>
          <div className="new-arrival-product-card-one-for-details">
            <div>
            <h4 className='new-arrival-product-desc-date'>26 January 2022</h4>
            <h4 className="new-arrival-product-desc-details">Craftos Master Everyday<br/>Dinnerware Set</h4>
            </div>
          </div>
          <button className='new-arrival-learn-more-button'>Learn More</button>
        </div>

        {/* Card 2 */}
        <div className="new-arrival-product-card-one">
          <div className="new-arrival-product-card-one-for-image">
            <img className="new-arrival-product-card-one-for-image-product-one" src="https://www.decorilla.com/online-decorating/wp-content/uploads/2019/06/online-interior-design-services-in-2019.jpg"/>
          </div>
          <div className="new-arrival-product-card-one-for-details">
            <div>
            <h4 className='new-arrival-product-desc-date'>26 January 2022</h4>
            <h4 className="new-arrival-product-desc-details">Craftos Master Everyday<br/>Dinnerware Set</h4>
            </div>
          </div>
          <button className='new-arrival-learn-more-button'>Learn More</button>
        </div>

        {/* Card 3 */}
        <div className="new-arrival-product-card-one">
          <div className="new-arrival-product-card-one-for-image">
            <img className="new-arrival-product-card-one-for-image-product-one" src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2020/12/12/423d6c80-3607-11eb-8d89-a7d6b31c4b8a_image_hires_133541.jpg?itok=kpFt-kOh&v=1607751352"/>
          </div>
          <div className="new-arrival-product-card-one-for-details">
            <div>
            <h4 className='new-arrival-product-desc-date'>26 January 2022</h4>
            <h4 className="new-arrival-product-desc-details">Craftos Master Everyday<br/>Dinnerware Set</h4>
            </div>
          </div>
          <button className='new-arrival-learn-more-button'>Learn More</button>
        </div>
        <div className="new-arrival-card-one">
          
        </div>
      </div>
    </div>
  )
}

export default Arrival