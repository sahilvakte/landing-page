import React from 'react'
import "./EbeautyPopularPick.css"
import product from '../../Assets/Images/Impulse/prodimg1.jpg'
import product2 from '../../Assets/Images/Impulse/prodimg2.jpg'
import product3 from '../../Assets/Images/Impulse/prodimg3.jpg'
import product4 from '../../Assets/Images/Impulse/prodimg4.jpg'
import product5 from '../../Assets/Images/Impulse/prodimg5.webp'
import product6 from '../../Assets/Images/Impulse/prodimg6.webp'
import product7 from '../../Assets/Images/Impulse/prodimg7.jpg'
import product8 from '../../Assets/Images/Impulse/prodimg8.jpg'

import EbeautyProduct from '../EbeautyProduct/EbeautyProduct';
import Enavbar from '../Enavbar/Enavbar'
import Footer from '../Footer/Footer'

const EbeautyPopularPick = () => {
    const allimpulseproduct = [
        {
            url: product,
            title: "DREAM SHOT BOOSTER SERUM",
            price: "$39 ",
        },
        {
            url: product2,
            title: "ARGAN OIL",
            price: "$39 ",
        }, {
            url: product3,
            title: "COVER FX",
            price: "$50 ",
        },
        {
            url: product4,
            title: "BRIOGEO B. WELL",
            price: "$50 ",
        },
        {
            url: product5,
            title: "FENTY BEAUTY",
            price: "$50 ",
        },
        {
            url: product6,
            title: "REAL MAGNET",
            price: "$50 ",
        },
        {
            url: product7,
            title: "ZTIP GOLDEN GEL",
            price: "$50 ",
        },
        {
            url: product8,
            title: "NAPS",
            price: "$50 ",
        },
    ]
    return (
        <>
        <Enavbar/>
            <div className='flex-div-for-all-popular-products'>
                <div className='div-for-all-popular-products'>
                    {allimpulseproduct.map((val, index) => (

                        <EbeautyProduct impulseproductdetails={val} />
                    ))}

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default EbeautyPopularPick