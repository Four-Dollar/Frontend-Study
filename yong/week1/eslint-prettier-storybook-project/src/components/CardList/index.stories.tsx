import React from 'react';

import CardList from 'components/CardList';

import { ComponentStory } from '@storybook/react';

export default {
	title: 'CardList',
	component: CardList,
};

const Template: ComponentStory<typeof CardList> = (args) => (
	<CardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
	cards: [
		{ imgUrl: '/logo192.png', title: 'Card Default' },
		{ imgUrl: '/logo192.png', title: 'Card Default' },
		{ imgUrl: '/logo192.png', title: 'Card Default' },
		{ imgUrl: '/logo192.png', title: 'Card Default' },
		{ imgUrl: '/logo192.png', title: 'Card Default' },
	],
};
