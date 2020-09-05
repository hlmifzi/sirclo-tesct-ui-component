import React from 'react'
import './static.scss'
import Icon from '../../icons/Icon'

export const FooterSubcribe = () => {
    return (
        <section className="flex justify-center flex-wrap items-center subcribe__section ">
            <div className="flex">
                <Icon.Facebook className="m-4" />
                <Icon.Twitter className="m-4" />
                <Icon.Instagram className="m-4" />
                <Icon.Pinterest className="m-4" />
            </div>
            <div className="input__subcribe ml-16">
                <input />
                <p>SUBCRIBE</p>
            </div>
        </section>
    )
}

