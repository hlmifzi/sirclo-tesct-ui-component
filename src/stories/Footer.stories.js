import React from 'react';

import { Footer } from '../components/pages/static/Footer';

export default {
    title: 'Static Page/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const FooterMain = Template.bind({});
FooterMain.args = {}