import React from "react";
import Register from "./Register";

export default {
  title: "Register",
  component: Register,
};

const Template = (args) => <Register {...args} />;

export const FirstRegister = Template.bind({});
FirstRegister.args = {
  category: "main",
};

export const FirstSubRegister = Template.bind({});
FirstSubRegister.args = {
  label: "sub",
};
