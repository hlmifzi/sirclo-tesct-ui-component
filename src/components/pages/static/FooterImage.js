import React from 'react'
import {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
} from '../../../../index'
import './static.scss'


const FooterImage = () => {
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

export default FooterImage
