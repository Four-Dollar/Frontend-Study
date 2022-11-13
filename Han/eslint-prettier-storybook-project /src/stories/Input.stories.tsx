import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input,Props } from './Input';

const meta: Meta = {
    title: 'Input',
    component: Input,
    
}

export default meta;
//Not using templates 
export const Default = ()=> <Input variant="Primary" ></Input>

//Using Template
const Template: Story<Props> = (args) => <Input {...args} />;
export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'Secondary',
}