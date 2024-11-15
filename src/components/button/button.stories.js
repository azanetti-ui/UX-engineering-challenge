import React from "react";
import Button from "./button";
import 'src/styles/challenge.css'

export default {
    title: "components/buttons",
    component: Button,
    tags: ['autodocs'],
};

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    children: 'Button'
}