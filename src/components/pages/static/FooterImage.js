import React from 'react'
import image1 from '../../../resource/image1.png'
import image2 from '../../../resource/image2.png'
import image3 from '../../../resource/image3.png'
import image4 from '../../../resource/image4.png'
import image5 from '../../../resource/image5.png'
import image6 from '../../../resource/image6.png'
import './static.scss'


export const FooterImage = () => {
    return (
        <section className="flex flex-wrap items-center image__section ">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
        </section>
    )
}