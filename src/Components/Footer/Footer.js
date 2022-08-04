import React from 'react'
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <div className='ebeauty-footer'>
        <div className='footer-container-part-social'>

        {/* Social Media */}
            <h5 className='footer-main-components'>eBeauty</h5>
            <div className='ebeauty-social-sites-symbol'>
            <img src='https://svgsilh.com/svg/2029115-ffffff.svg' className='twitter-svg-symbol'/>
            <img src='https://svgsilh.com/svg/2029110-ffffff.svg' className='twitter-svg-symbol'/>
            <img src='https://svgsilh.com/svg/2029113-ffffff.svg' className='twitter-svg-symbol'/>
            </div>
        </div>

        {/* Products Section */}
        <div className='footer-conntainer-part-products'>
            <h5 className='footer-main-components'>Products</h5>
            <div className='footer-components-content-in-detail'>
            <a href='/' className='footer-components'>Beauty & Personal</a><br/>
            <a href='/' className='footer-components'>Baby Care & Items</a>
            </div>
        </div>

        {/* Company Section */}
        <div className='footer-conntainer-part-company'>
            <h5 className='footer-main-components'>Company</h5>
            <div className='footer-components-content-in-detail'>
            <a href='/' className='footer-components'>About Us</a><br/>
            <a href='/' className='footer-components'>Terms % Services</a>
            </div>
        </div>

        {/* Contact Section */}
        <div className='footer-conntainer-part-contact'>
            <h5 className='footer-main-components'>Contact</h5>
            <div className='footer-components-content-in-detail'>
            <a href='/' className='footer-components'>+62 8515 673 8080</a><br/>
            <a href='/' className='footer-components'>fayezahmadawsar@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Footer