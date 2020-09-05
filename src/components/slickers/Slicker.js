import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icons/Icon'
import { Card } from '../cards/Card'

import './slicker.scss';

const Interfaces = {
  title: PropTypes.string,
  listProducts: PropTypes.array,
  slickerId: PropTypes.string
}

const defaultProps = {
  title: "This is For Title",
  listProducts: [],
  slickerId: "slicker_id",
};

export const Slicker = ({ title, listProducts, slickerId, ...rest }) => {
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
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-gray hover:text-black-700">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-gray hover:text-black-700">•</label>
            </li>
            <li className="inline-block mr-3">
              <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-gray hover:text-black-700">•</label>
            </li>
          </ol>
        </div>

        <div className="w-full px-16">
          <div className="slicker__product" id={slickerId}>
            {
              listProducts.map((v, i) => {
                const discountExample = i === 3 ? 30 : 0
                return (
                  <Card
                    key={i}
                    image_file={`https://${v.image_file}`}
                    name={v.name}
                    price={`IDR 150, 000`}
                    discount={discountExample}
                  />
                )
              })
            }

            <a tabIndex="0" onClick={onClickPreviousSlide} className="previous button__slide" aria-label="Previous Slide">
              <Icon.NavigateBefore fontSize="large" />
            </a>
            <a tabIndex="0" onClick={onClickNextSlide} className="next button__slide" aria-label="Next Slide">
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
