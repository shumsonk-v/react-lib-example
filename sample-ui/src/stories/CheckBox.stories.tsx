import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'theme-ui';

import CustomDocs from './CheckboxDoc.mdx';
import { Checkbox } from '../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: CustomDocs,
    },
  },
} as ComponentMeta<typeof Checkbox>;

const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const { label, ...rest } = args;

  return (
    <Box>
      <Box sx={{ mb: '5px' }}>
        <Checkbox {...rest} label={label || 'Normal'} />
      </Box>
      <Box sx={{ mb: '5px' }}>
        <Checkbox {...rest} disabled label={label || 'Disabled'} />
      </Box>
      <Box sx={{ mb: '5px' }}>
        <Checkbox {...rest} defaultChecked label={label || 'Checked'} />
      </Box>
      <Box sx={{ mb: '5px' }}>
        <Checkbox {...rest} checked disabled label={label || 'Disabled Checked'} />
      </Box>
    </Box>
  );
};

export const Simple = CheckboxTemplate.bind({});
Simple.args = {
  children: '',
};

const CheckboxSizesTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const { label, ...rest } = args;

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          '& > label': {
            mr: '16px',
            mb: '5px',
          },
        }}
      >
        <Checkbox {...rest} label={label || 'Normal'} size="small" />
        <Checkbox {...rest} disabled label={label || 'Disabled'} size="small" />
        <Checkbox {...rest} defaultChecked label={label || 'Checked'} size="small" />
        <Checkbox {...rest} checked disabled label={label || 'Disabled Checked'} size="small" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          mt: '10px',
          flexFlow: 'row wrap',
          '& > label': {
            mr: '16px',
            mb: '5px',
          },
        }}
      >
        <Checkbox {...rest} label={label || 'Normal'} size="large" />
        <Checkbox {...rest} disabled label={label || 'Disabled'} size="large" />
        <Checkbox {...rest} defaultChecked label={label || 'Checked'} size="large" />
        <Checkbox {...rest} checked disabled label={label || 'Disabled Checked'} size="large" />
      </Box>
    </Box>
  );
};

export const Sizes = CheckboxSizesTemplate.bind({});
Simple.args = {
  children: '',
};

const CheckboxColorTemplate: ComponentStory<typeof Checkbox> = (args) => {
  const { label, ...rest } = args;

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          '& > label': {
            mr: '16px',
            mb: '5px',
          },
        }}
      >
        <Checkbox {...rest} label={label || 'Primary'} defaultChecked color="primary" />
        <Checkbox {...rest} label={label || 'Secondary'} defaultChecked color="secondary" />
        <Checkbox {...rest} label={label || 'Tertiary'} defaultChecked color="tertiary" />
        <Checkbox {...rest} label={label || 'Neutral'} defaultChecked color="neutral" />
        <Checkbox {...rest} disabled label={label || 'Disabled'} defaultChecked color="secondary" />
      </Box>
    </Box>
  );
};

export const Colors = CheckboxColorTemplate.bind({});
Simple.args = {
  children: '',
};

export const Switch = CheckboxTemplate.bind({});
Switch.args = {
  children: '',
  mode: 'switch',
};

export const SwitchSizes = CheckboxSizesTemplate.bind({});
SwitchSizes.args = {
  children: '',
  mode: 'switch',
};

export const SwitchColors = CheckboxColorTemplate.bind({});
SwitchColors.args = {
  children: '',
  mode: 'switch',
};
