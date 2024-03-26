import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    property1: {
      options: ["variant-5", "variant-2", "variant-1", "variant-4", "variant-8", "variant-7", "variant-6", "variant-9"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-5",
    className: {},
    frameFrameClassName: {},
    createAnAccountClassName: {},
    text,
  },
};
