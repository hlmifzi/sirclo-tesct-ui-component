import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon'
import './carousel.scss';

const Interfaces = {
  imageLists: PropTypes.arrayOf({}),
  id: PropTypes.string
}

const defaultProps = {
  imageLists: [
    { image_file: '', title: '' },
    { image_file: '', title: '' }
  ],
  id: 'Carousel',
};

export const Carousel = ({ imageLists, id, ...rest }) => {

  const onClickNextSlide = () => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      document.getElementById(id).scrollLeft += 400;
      scrollAmount += 400;
      if (scrollAmount >= 300) window.clearInterval(slideTimer);
    }, 100);
  }

  const onClickPreviousSlide = () => {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      document.getElementById(id).scrollLeft -= 400;
      scrollAmount += 400;
      if (scrollAmount >= 300) window.clearInterval(slideTimer);
    }, 100);
  }

  return (
    <div className="carousel">
      <div className='list__banner' id={id}>
        {
          imageLists.map((v, i) => {
            return (
              <img
                key={i}
                src={`https://${v.image_file}`}
                alt={v.title}
                className="mr-4"
                style={{ width: '10000px' }}
              />
            )
          })
        }
      </div>
      <a tabindex="0" className="previous button__slide" aria-label="Previous Slide">
        <Icon.NavigateBefore fontSize="large" onClick={onClickPreviousSlide} />
      </a>
      <a tabindex="0" className="next button__slide" aria-label="Next Slide">
        <Icon.NavigateNext fontSize="large" onClick={onClickNextSlide} />
      </a>
    </div>
  )
};

Carousel.propTypes = Interfaces
Carousel.defaultProps = defaultProps
