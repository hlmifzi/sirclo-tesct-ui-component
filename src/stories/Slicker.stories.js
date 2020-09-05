import React from 'react';

import { Slicker } from '../components/slickers/Slicker';

export default {
    title: 'Store Design System/Slicker',
    component: Slicker,
};

const Template = (args) => <Slicker {...args} />;

export const SlickerCarousel = Template.bind({});
SlickerCarousel.args = {
    listProducts: [
        {
            name: 'Men Product 1',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-1.jpg'
        },
        {
            name: 'Men Product 2',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-2.jpg'
        },
        {
            name: 'Men Product 3',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-3.jpg'
        },
        {
            name: 'Men Product 4',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-4.jpg'
        },
        {
            name: 'Men Product 5',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-1.jpg'
        },
        {
            name: 'Men Product 6',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-2.jpg'
        },
        {
            name: 'Men Product 7',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-3.jpg'
        },
        {
            name: 'Men Product 8',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-4.jpg'
        },
        {
            name: 'Men Product 9',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-1.jpg'
        },
        {
            name: 'Men Product 10',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-2.jpg'
        },
        {
            name: 'Men Product 11',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-3.jpg'
        },
        {
            name: 'Men Product 12',
            image_file: 'files.sirclocdn.xyz/frontend-test-37/images/men-product-4.jpg'
        }
    ],
    slickerId: 12,
    title: 'This is for Title'
}