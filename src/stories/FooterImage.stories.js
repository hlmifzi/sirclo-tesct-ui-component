import React from 'react';

import { FooterImage } from '../components/pages/static/FooterImage';

export default {
    title: 'Static Page/FooterImage',
    component: FooterImage,
};

const Template = (args) => <FooterImage {...args} />;

export const FooterImageMain = Template.bind({});
FooterImageMain.args = {}