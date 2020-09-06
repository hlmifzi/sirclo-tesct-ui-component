import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core'

import Icon from '../icons/Icon'

import './header.scss';

const Interfaces = {
  menus: PropTypes.array,
  isLoggin: PropTypes.bool
}

const defaultProps = {
  menus: [
    { title: 'NEW ARRIVAL', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'WOMAN', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'MAN', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'ACCESSORIES', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'SALE', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'BLOG', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'CONTACT', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'LOOK BOOK', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
  ],
  isLoggin: false

};

export const Header = ({ menus, isLoggin }) => {
  const [toogleMenu, setToogleMenu] = useState(false)
  return (
    <div className="header">
      <header>
        <div className="header__top">
          <div className="menu-toogle">
            <input type="checkbox" onClick={() => setToogleMenu(!toogleMenu)} />
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__language__top ml-6">
            <select name="cars" id="cars">
              <option value="volvo">IDR</option>
              <option value="saab">US</option>
            </select>
          &nbsp;
          &nbsp;
          <p>BAHASA - <b>ENGLISH</b></p>
          </div>
          <div className={`header__menu ${toogleMenu && 'slide'}`}>
            {
              menus.map((v, i) => (
                <div key={i} className="header__option" onClick={() => window.open(v.url)} >
                  {v.title}
                </div>
              ))
            }
          </div>

          <div className="header__search">
            <Icon.Search />
          </div>
        </div>
      </header>

      <div className="header__bottom justify-center flex-wrap items-center">

        <div className="header__language">
          <select name="cars" id="cars">
            <option value="volvo">IDR</option>
            <option value="saab">US</option>
          </select>
          <p>BAHASA - <b>ENGLISH</b></p>
        </div>

        <div className="header__logo__middle">
          <img
            src="https://i.ibb.co/C9mqBZ7/Screen-Shot-2020-09-02-at-12-00-18-AM.png"
            alt="brand-logo"
          />
        </div>

        <div className="header__right">
          {isLoggin ? 'Hi, Helmi' : "Login / Register"}
          <div className="header__cart">
            <IconButton>
              <Icon.LocalMall />
            </IconButton>
          0
        </div>
        </div>
      </div>

    </div >
  )
};

Header.propTypes = Interfaces
Header.defaultProps = defaultProps
