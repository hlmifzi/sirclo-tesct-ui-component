import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';

const Interfaces = {
  image_file: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.number,
  _openModal: PropTypes.func

}

const defaultProps = {
  image_file: 'https://files.sirclocdn.xyz/frontend-test-37/images/women-product-3.jpg',
  name: 'Product Name Display',
  price: 'IDR 250,000',
  discount: 20,
  _openModal: () => { }
};

export const Card = (props) => {
  const { image_file, name, price, discount, _openModal } = props

  const numberPrice = price.match(/\d/g).join("")

  const stripPrice = discount ?
    <>
      <div className="product_desc" >
        <a style={{ textDecoration: 'line-through' }}>{price}</a>&nbsp;&nbsp;
        <a className="product_desc color-gray" >IDR {numberPrice - (discount / 100 * numberPrice)}</a>
      </div>
    </>

    :
    <div className="product_desc" >{price}</div>



  return (
    <div className="card" onClick={() => _openModal(props)}>
      <div className="card__image">
        <img src={image_file} alt={name} />
        {
          discount != 0 &&
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
        {stripPrice}
      </div>
    </div>
  )
};

Card.propTypes = Interfaces
Card.defaultProps = defaultProps
