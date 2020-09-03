import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Interfaces = {
  image_file: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.number,
}

const defaultProps = {
  image_file: 'https://files.sirclocdn.xyz/frontend-test-37/images/women-product-3.jpg',
  name: 'Product Name Display',
  price: 'IDR 250,000',
  discount: 20
};

export const Card = ({ image_file, name, price, discount, ...rest }) => (
  <div className="card">
    <div className="card__image">
      <img src={image_file} />
      {
        discount &&
        <>
          <div className="badge__diskon">
            <p>
              OFF<br />{discount}%
            </p>
            <div className="triangle"></div>
          </div>
        </>
      }

    </div>
    <div className="slicker__paragraph">
      <div className="product__category__card">Accessories</div>
      <div className="product_desc">{name}</div>
      <div className="product_desc">{price}</div>
    </div>
  </div>
);

Card.propTypes = Interfaces
Card.defaultProps = defaultProps
