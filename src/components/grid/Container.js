import React from 'react';
import PropTypes from 'prop-types';

import './grid.scss';

const Interfaces = {
    children: PropTypes.element
}

const defaultProps = {
    children: <> </>,
};

export const Container = ({ children }) => (
    <div className="container">{children}</div>
);

Container.propTypes = Interfaces
Container.defaultProps = defaultProps
