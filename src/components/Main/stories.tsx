import { Story, Meta } from '@storybook/react/types-6-0';

import Main, { MainProps } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'Boilerplate with NextJS, TypeScript and Styled Components',
  },
} as Meta;

export const Default: Story<MainProps> = (args) => <Main {...args} />;

export const Custom = Default.bind({});

Custom.args = {
  title: 'Custom title',
  description: 'Custom description',
};
