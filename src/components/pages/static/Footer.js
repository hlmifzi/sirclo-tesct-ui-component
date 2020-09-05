import React from 'react'
import logoFooter from '../../../resource/logoFooter.png'
import './static.scss'

export const Footer = () => {
    return (
        <footer>
            <section className="flex px-16 pt-20 flex-wrap justify-between footer__section ">
                <div className="description">
                    <img src={logoFooter} alt="" />
                    <p>Mavelin is a WordPress E-Commerce theme focused to collecting, grouping your content Then selling your stuffs. it's perfect for small-to-high traffic e-commercebussiness site,</p>
                    <div>COPYRIGHTS 2017 MAVELIN POWERED BY SIRCLO</div>
                </div>
                <div className="flex flex-col justify-between pb-20 fast__menu">
                    <h4 className="pb-4">Categories</h4>
                    <p>Men</p>
                    <p>Woman</p>
                    <p>Sunglasses</p>
                    <p>Necklaces</p>
                    <p>Sandals</p>
                    <p>T-Shirt</p>
                    <p>Parents</p>
                    <p>Kids</p>
                    <p>Jeans</p>
                    <p>Jackets</p>
                    <p>Blazer</p>
                    <p>Luggage</p>
                </div>
                <div className="flex flex-col justify-between pb-20 fast__menu">
                    <h4 className="pb-4">Brand</h4>
                    <p>Ken Munk</p>
                    <p>Artistoys</p>
                    <p>Simon * ME</p>
                    <p>WlideSkin</p>
                    <p>PooMS</p>
                    <p>mimibobot</p>
                    <p>2K</p>
                    <p>Jamungo</p>
                    <p>AIAIAI</p>
                    <p>Die Gestalten Verlag</p>
                    <p>Arkitip</p>
                </div>
                <div className="flex flex-col justify-between pb-40 fast__menu">
                    <h4 >Connect with Us</h4>
                    <p>Email Us</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                    <p>Radio</p>
                    <p>Foursquare</p>
                    <p>Newsletter</p>
                    <p>RSS</p>
                </div>
            </section>
        </footer>
    )
}

