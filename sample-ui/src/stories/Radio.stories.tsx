import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'theme-ui';

import RadioGroup from 'react-ui/components/Radio/RadioGroup';
import { RadioGroupProps } from 'react-ui/components/Radio/types';
import { Typograhpy } from 'react-ui/components/Typography';

import CustomDocs from './RadioDoc.mdx';
import { Radio } from '../components/Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      page: CustomDocs,
    },
  },
} as ComponentMeta<typeof Radio>;

const RadioTemplate: ComponentStory<typeof Radio> = (args) => {
  const { label, ...rest } = args;

  return (
    <>
      <Box>
        <Box sx={{ mb: '5px' }}>
          <Radio {...rest} label={label || 'Normal'} />
        </Box>
        <Box sx={{ mb: '5px' }}>
          <Radio {...rest} disabled label={label || 'Disabled'} />
        </Box>
        <Box sx={{ mb: '5px' }}>
          <Radio {...rest} defaultChecked label={label || 'Checked'} />
        </Box>
        <Box sx={{ mb: '5px' }}>
          <Radio {...rest} checked disabled label={label || 'Disabled Checked'} />
        </Box>
      </Box>
      <Box sx={{ mt: '20px', display: 'inline-flex' }}>
        <Radio {...rest} label={label || 'Poor'} name="quality" sx={{ mr: '16px' }} />
        <Radio {...rest} label={label || 'Good'} name="quality" sx={{ mr: '16px' }} />
        <Radio {...rest} label={label || 'Best'} name="quality" />
      </Box>
    </>
  );
};

export const Simple = RadioTemplate.bind({});
Simple.args = {
  children: '',
};

const RadioSizesTemplate: ComponentStory<typeof Radio> = (args) => {
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
        <Radio {...rest} label={label || 'Normal'} size="small" />
        <Radio {...rest} disabled label={label || 'Disabled'} size="small" />
        <Radio {...rest} defaultChecked label={label || 'Checked'} size="small" />
        <Radio {...rest} checked disabled label={label || 'Disabled Checked'} size="small" />
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
        <Radio {...rest} label={label || 'Normal'} size="large" />
        <Radio {...rest} disabled label={label || 'Disabled'} size="large" />
        <Radio {...rest} defaultChecked label={label || 'Checked'} size="large" />
        <Radio {...rest} checked disabled label={label || 'Disabled Checked'} size="large" />
      </Box>
    </Box>
  );
};

export const Sizes = RadioSizesTemplate.bind({});
Simple.args = {
  children: '',
};

const RadioColorTemplate: ComponentStory<typeof Radio> = (args) => {
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
        <Radio {...rest} label={label || 'Primary'} defaultChecked color="primary" />
        <Radio {...rest} label={label || 'Secondary'} defaultChecked color="secondary" />
        <Radio {...rest} label={label || 'Tertiary'} defaultChecked color="tertiary" />
        <Radio {...rest} label={label || 'Neutral'} defaultChecked color="neutral" />
        <Radio {...rest} disabled label={label || 'Disabled'} defaultChecked color="secondary" />
      </Box>
    </Box>
  );
};

export const Colors = RadioColorTemplate.bind({});
Simple.args = {
  children: '',
};

const RadioGroupTemplate: ComponentStory<typeof Radio> = () => {
  const groupName = 'response';
  const radioOptions: RadioGroupProps['options'] = [
    {
      label: 'Yes',
    },
    {
      label: 'No',
    },
    {
      label: 'Not sure',
    },
  ];

  return (
    <>
      <Box sx={{ mb: '40px' }}>
        <Typograhpy as="h5" sx={{ mb: '10px' }}>
          Horizontal
        </Typograhpy>
        <RadioGroup name={groupName} options={radioOptions} />
      </Box>
      <Box>
        <Typograhpy as="h5" sx={{ mb: '10px' }}>
          Vertical
        </Typograhpy>
        <RadioGroup name={groupName} options={radioOptions} direction="vertical" />
      </Box>
    </>
  );
};

export const SimpleRadioGroup = RadioGroupTemplate.bind({});
SimpleRadioGroup.args = {};
