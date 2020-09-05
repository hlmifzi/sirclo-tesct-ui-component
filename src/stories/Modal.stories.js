import React from 'react';

import { Modal } from '../components/modal/Modal';

export default {
    title: 'Store Design System/Modal',
    component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const ModalMain = Template.bind({});
ModalMain.args = {
    product: {
        image_file: 'https://files.sirclocdn.xyz/frontend-test-37/images/women-product-3.jpg',
        name: 'Women Product 3',
        price: 'IDR 150, 000',
        discount: 0
    },
}