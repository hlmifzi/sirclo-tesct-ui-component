import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon'
import './carousel.scss';

const Interfaces = {
  menus: PropTypes.arrayOf({})
}

const defaultProps = {
  imageList: [
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
  ],
};

export const Carousel = ({ imageList, width, ...rest }) => (
  <div class="carousel" >
    <img src="https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png" alt="slider-1" />
    <a tabindex="0" className="previous button__slide" aria-label="Previous Slide">
      <Icon.NavigateBefore fontSize="large" />
    </a>
    <a tabindex="0" className="next button__slide" aria-label="Next Slide">
      <Icon.NavigateNext fontSize="large" />
    </a>
  </div>
);

Carousel.propTypes = Interfaces
Carousel.defaultProps = defaultProps
