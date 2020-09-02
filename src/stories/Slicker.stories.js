import React from 'react';

import { Slicker } from '../components/slickers/Slicker';

export default {
    title: 'Store Design System/Slicker',
    component: Slicker,
};

const Template = (args) => <Slicker {...args} />;

export const SlickerCarousel = Template.bind({});
SlickerCarousel.args = {
    imageList: [
        { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
        { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    ],
}