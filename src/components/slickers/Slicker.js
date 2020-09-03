import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icons/Icon'
import { Card } from '../cards/Card'

import './slicker.scss';

const Interfaces = {
  title: PropTypes.string,
  imageList: PropTypes.arrayOf({}),
  slickerId: PropTypes.string
}

const defaultProps = {
  title: "This is For Title",
  imageList: [
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://i.ibb.co/p1NQwdc/Screen-Shot-2020-09-02-at-1-26-25-AM.png', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
  ],
  slickerId: "slicker_id",
};

export const Slicker = ({ title, imageList, width, slickerId, ...rest }) => {
  const onClickNextSlide = () => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      document.getElementById(slickerId).scrollLeft += 30;
      scrollAmount += 30;
      if (scrollAmount >= 300) window.clearInterval(slideTimer);
    }, 25);
  }

  const onClickPreviousSlide = () => {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      document.getElementById(slickerId).scrollLeft -= 30;
      scrollAmount += 30;
      if (scrollAmount >= 300) window.clearInterval(slideTimer);
    }, 25);
  }

  return (
    <section>
      <div className="slicker">
        <div className="slicker__top">
          <p>{title.toUpperCase()}</p>
          <div> ...ini tititk </div>
        </div>

        <div className="w-full px-16">
          <div className="slicker__product" id={slickerId}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            <a tabindex="0" onClick={onClickPreviousSlide} className="previous button__slide" aria-label="Previous Slide">
              <Icon.NavigateBefore fontSize="large" />
            </a>
            <a tabindex="0" onClick={onClickNextSlide} className="next button__slide" aria-label="Next Slide">
              <Icon.NavigateNext fontSize="large" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
};

Slicker.propTypes = Interfaces
Slicker.defaultProps = defaultProps
