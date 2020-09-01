import React from 'react';

import { Header } from '../components/headers/Header';

export default {
  title: 'Store Design System/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  menus: [
    { title: 'NEW ARRIVAL', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'WOMAN', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'MAN', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'ACCESSORIES', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'SALE', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'BLOG', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'CONTACT', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
    { title: 'LOOK BOOK', url: 'https://www.linkedin.com/in/helmi-fauzi-12b872143/' },
  ],
  isLoggin: true
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  isLoggin: false
};
