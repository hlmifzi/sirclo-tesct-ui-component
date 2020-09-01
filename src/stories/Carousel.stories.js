import React from 'react';

import { Carousel } from '../components/carousel/Carousel';

export default {
  title: 'Store Design System/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const CarouselStandard = Template.bind({});
CarouselStandard.args = {
  menus: [
    { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { imgUrl: 'https://ibb.co/FhcX3z2', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
  ],
}