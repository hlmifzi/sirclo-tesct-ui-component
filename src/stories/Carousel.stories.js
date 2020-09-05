import React from 'react';

import { Carousel } from '../components/carousel/Carousel';

export default {
  title: 'Store Design System/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const CarouselStandard = Template.bind({});
CarouselStandard.args = {
  imageLists: [
    {
      name: 'Accessories 1',
      image_file: 'files.sirclocdn.xyz/frontend-test-37/images/accessories-1.jpg'
    },
    {
      name: 'Accessories 2',
      image_file: 'files.sirclocdn.xyz/frontend-test-37/images/accessories-2.jpg'
    },
  ],
}