import React from 'react';
import PropTypes from 'prop-types';
import './carousel.scss';

const Interfaces = {
  imageLists: PropTypes.array,
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
  return (

    <div className="carousel relative shadow-2xl bg-white">
      <div className="carousel-inner relative overflow-hidden w-full">
        {/* <!--Slide 1--> */}
        {
          imageLists.map((v, i) => {
            return (
              <div key={i}>
                <input className="carousel-open" type="radio" id={`carousel-${i}`} name="carousel" aria-hidden="true" hidden="" defaultChecked />
                <div className="carousel-item absolute opacity-0" >
                  <img
                    key={i}
                    src={`https://${v.image_file}`}
                    alt={v.title}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <label htmlFor={`carousel-${i}`} className={`prev control-${i} w-10 h-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-black bg-black hover:bg-white leading-tight text-center inset-y-0 left-0 my-auto`} >‹</label>
                <label htmlFor={`carousel-${i}`} className={`next control-${i} w-10 h-10 absolute cursor-pointer hidden text-3xl font-bold text-white hover:text-black bg-black hover:bg-white leading-tight text-center inset-y-0 right-0 my-auto`} >›</label>
              </div>
            )
          })
        }

        {/* <!-- Add additional indicators htmlFor each slide--> */}
        <ol className="carousel-indicators">
          {
            imageLists.map((v, i) => {
              return (
                <li key={i} className="inline-block mr-3">
                  <label htmlFor={`carousel-${i}`} className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-black-700">•</label>
                </li>
              )
            })
          }
        </ol>

      </div >
    </div >
  )
};

Carousel.propTypes = Interfaces
Carousel.defaultProps = defaultProps
