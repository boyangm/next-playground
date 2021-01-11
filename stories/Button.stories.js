import React from 'react';

import {UIButton} from '../components/Button/Button.js'

export default {
  title: 'Example/Button',
  component: UIButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: ""
  },
};

const Template = (args) => <UIButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'secondary',
  size: 'small',
  label: 'Button',
};
