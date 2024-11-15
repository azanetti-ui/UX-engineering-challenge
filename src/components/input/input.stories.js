import React from "react"
import Input from "./input"
import 'src/styles/challenge.css'

export default {
    title: 'components/input',
    component: Input,
    tags: ['autodocs']
}

const Template = args => <Input {...args} />

export const Medium = Template.bind({}) 
Medium.args = {
    size: 'medium',
}
