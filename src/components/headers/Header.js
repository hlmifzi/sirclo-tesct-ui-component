import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core'

import Icon from '../icons/Icon'
import { Container } from '../grid/Container'

import './header.scss';

const Interfaces = {
  menus: PropTypes.arrayOf({}),
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

export const Header = ({ menus, isLoggin }) => (
  <div className="header">
    <header>
      <div className="header__top">
        <div className="header__menu">
          {
            menus.map((v, i) => (
              <div className="header__option" onClick={() => window.open(v.url)} >
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

    <div className="header__bottom">

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
        </div>
      </div>
    </div>

  </div >
);

Header.propTypes = Interfaces
Header.defaultProps = defaultProps
