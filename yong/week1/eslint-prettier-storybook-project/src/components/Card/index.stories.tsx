import React from 'react';

import Card from './index';

import { ComponentStory } from '@storybook/react';

export default {
	title: 'Card',
	component: Card,
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	imgUrl: '/logo192.png',
	title: 'Card Default',
};
