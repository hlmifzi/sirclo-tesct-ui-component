import React from 'react';

import { Card } from '../components/cards/Card';

export default {
    title: 'Store Design System/Card',
    component: Card,
};

const Template = (args) => <Card {...args} />;

export const CardProduct = Template.bind({});
CardProduct.args = {
    product: [
        {
            image_file: 'https://files.sirclocdn.xyz/frontend-test-37/images/women-product-3.jpg',
            url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/',
            category: 'ACCESSORIES',
            name: 'Product Name Display',
            price: 'IDR 250,000',
        },
    ],
}