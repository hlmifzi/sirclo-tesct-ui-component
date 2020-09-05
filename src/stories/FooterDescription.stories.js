import React from 'react';

import { FooterDescription } from '../components/pages/static/FooterDescription';

export default {
    title: 'Static Page/FooterDescription',
    component: FooterDescription,
};

const Template = (args) => <FooterDescription {...args} />;

export const FooterDescriptionMain = Template.bind({});
FooterDescriptionMain.args = {}