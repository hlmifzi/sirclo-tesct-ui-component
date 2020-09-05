import React from 'react';

import { Skeleton } from '../components/skeleton/Skeleton';

export default {
    title: 'Store Design System/Skeleton',
    component: Skeleton,
};

const Template = (args) => <Skeleton {...args} />;

export const SkeletonMain = Template.bind({});
SkeletonMain.args = {}