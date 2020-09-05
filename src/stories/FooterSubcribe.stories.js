import React from 'react';

import { FooterSubcribe } from '../components/pages/static/FooterSubcribe';

export default {
    title: 'Static Page/FooterSubcribe',
    component: FooterSubcribe,
};

const Template = (args) => <FooterSubcribe {...args} />;

export const FooterSubcribeMain = Template.bind({});
FooterSubcribeMain.args = {}