import React from 'react';
import PropTypes from 'prop-types';
import './slicker.scss';

const Interfaces = {
  imageList: PropTypes.arrayOf({})
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

export const Slicker = ({ imageList, width, ...rest }) => (
  <section>
    <div className="slicker">

      <div className="slicker__top">
        <p>POPULAR IN WOMAN</p>
        <div> ... </div>
      </div>

      <div className="slicker__product">
        ini akan jadi card product
      </div>
    </div>
  </section>
);

Slicker.propTypes = Interfaces
Slicker.defaultProps = defaultProps
