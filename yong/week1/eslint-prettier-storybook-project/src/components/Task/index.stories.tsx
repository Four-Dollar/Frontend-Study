import React from 'react';

import Task from './index';

import { ComponentStory } from '@storybook/react';

export default {
	title: 'Task',
	component: Task,
};

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
	task: {
		id: '1',
		title: 'Test Task',
		state: 'TASK_INBOX',
	},
};

export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		id: '2',
		title: 'Test Task',
		state: 'TASK_PINNED',
	},
};

export const Archived = Template.bind({});
Archived.args = {
	task: {
		id: '3',
		title: 'Test Task',
		state: 'TASK_ARCHIVED',
	},
};
