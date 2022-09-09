import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PhantasmaLinkProvider } from '.';
import { DemoDapp } from './demo';

export default {
  title: 'Demo',
  component: DemoDapp,
  parameters: {
    componentSubtitle: 'Demo usePhantasmaLink',
  },
} as Meta;

export const Dapp: Story = () => (
  <PhantasmaLinkProvider dappName="Demo">
    <DemoDapp />
  </PhantasmaLinkProvider>
);
