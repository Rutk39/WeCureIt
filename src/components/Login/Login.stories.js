import { Login } from ".";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    property1: {
      options: ["signup-btn", "variant-3", "clicked"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "signup-btn",
    className: {},
    buttonPrimaryWithButtonPrimaryWithClassName: {},
    buttonPrimaryWithText: "Login / Sign-Up",
  },
};
