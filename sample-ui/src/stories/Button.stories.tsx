import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'theme-ui';

import CustomDocs from './ButtonDoc.mdx';
import { Button } from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: CustomDocs,
    },
  },
  argTypes: {
    children: {
      description: 'Button label',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => {
  const { children, ...rest } = args;

  const iconDone = <span className="material-icons-round">done</span>;
  const iconClose = <span className="material-icons-round">close</span>;
  const iconThumbUp = <span className="material-icons-round">thumb_up_alt</span>;
  const iconAdd = <span className="material-icons-round">add</span>;

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained">
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined">
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text">
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link">
          {children || 'Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled>
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled>
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled>
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled>
          {children || 'Disabled Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" leftIcon={iconDone}>
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" leftIcon={iconClose}>
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" leftIcon={iconThumbUp}>
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" leftIcon={iconAdd}>
          {children || 'Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled leftIcon={iconDone}>
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled leftIcon={iconClose}>
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled leftIcon={iconThumbUp}>
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled leftIcon={iconAdd}>
          {children || 'Disabled Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" color="secondary" rightIcon={iconDone}>
          {children || 'Success'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" rightIcon={<span className="material-icons-round">navigate_next</span>}>
          {children || 'Next'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" rightIcon={iconThumbUp}>
          {children || 'Like'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" rightIcon={iconAdd}>
          {children || 'Add'}
        </Button>
      </Box>
    </>
  );
};

export const Simple = ButtonTemplate.bind({});
Simple.args = {
  children: '',
};

const ButtonSizesTemplate: ComponentStory<typeof Button> = (args) => {
  const { children, ...rest } = args;

  const iconDone = <span className="material-icons-round">done</span>;
  const iconClose = <span className="material-icons-round">close</span>;
  const iconThumbUp = <span className="material-icons-round">thumb_up_alt</span>;
  const iconAdd = <span className="material-icons-round">add</span>;

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" size="small">
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" size="small">
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" size="small">
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" size="small">
          {children || 'Link'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" size="small" leftIcon={iconDone}>
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" size="small" leftIcon={iconClose}>
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" size="small" leftIcon={iconThumbUp}>
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" size="small" leftIcon={iconAdd}>
          {children || 'Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled size="small">
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled size="small">
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled size="small">
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled size="small">
          {children || 'Disabled Link'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled size="small" leftIcon={iconDone}>
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled size="small" leftIcon={iconClose}>
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled size="small" leftIcon={iconThumbUp}>
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled size="small" leftIcon={iconAdd}>
          {children || 'Disabled Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" size="large">
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" size="large">
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" size="large">
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" size="large">
          {children || 'Link'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" size="large" leftIcon={iconDone}>
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" size="large" leftIcon={iconClose}>
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" size="large" leftIcon={iconThumbUp}>
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" size="large" leftIcon={iconAdd}>
          {children || 'Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled size="large">
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled size="large">
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled size="large">
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled size="large">
          {children || 'Disabled Link'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled size="large" leftIcon={iconDone}>
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled size="large" leftIcon={iconClose}>
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled size="large" leftIcon={iconThumbUp}>
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled size="large" leftIcon={iconAdd}>
          {children || 'Disabled Link'}
        </Button>
      </Box>
    </>
  );
};

export const Sizes = ButtonSizesTemplate.bind({});
Sizes.args = {
  children: '',
};

const ButtonShapesTemplate: ComponentStory<typeof Button> = (args) => {
  const { children, ...rest } = args;

  const iconDone = <span className="material-icons-round">done</span>;
  const iconClose = <span className="material-icons-round">close</span>;
  const iconThumbUp = <span className="material-icons-round">thumb_up_alt</span>;
  const iconAdd = <span className="material-icons-round">add</span>;

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" shape="pill" leftIcon={iconDone}>
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" shape="pill" leftIcon={iconClose}>
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" shape="pill" leftIcon={iconThumbUp}>
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" shape="pill" leftIcon={iconAdd}>
          {children || 'Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled shape="pill" leftIcon={iconDone}>
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled shape="pill" leftIcon={iconClose}>
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled shape="pill" leftIcon={iconThumbUp}>
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled shape="pill" leftIcon={iconAdd}>
          {children || 'Disabled Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" shape="square" leftIcon={iconDone}>
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" shape="square" leftIcon={iconClose}>
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" shape="square" leftIcon={iconThumbUp}>
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" shape="square" leftIcon={iconAdd}>
          {children || 'Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled shape="square" leftIcon={iconDone}>
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled shape="square" leftIcon={iconClose}>
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled shape="square" leftIcon={iconThumbUp}>
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled shape="square" leftIcon={iconAdd}>
          {children || 'Disabled Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" shape="rounded" leftIcon={iconDone}>
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" shape="rounded" leftIcon={iconClose}>
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" shape="rounded" leftIcon={iconThumbUp}>
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" shape="rounded" leftIcon={iconAdd}>
          {children || 'Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" disabled shape="rounded" leftIcon={iconDone}>
          {children || 'Disabled Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" disabled shape="rounded" leftIcon={iconClose}>
          {children || 'Disabled Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" disabled shape="rounded" leftIcon={iconThumbUp}>
          {children || 'Disabled Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" disabled shape="rounded" leftIcon={iconAdd}>
          {children || 'Disabled Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" shape="rounded" leftIcon={iconDone} size="small">
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" shape="rounded" leftIcon={iconClose} size="small">
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" shape="rounded" leftIcon={iconThumbUp} size="small">
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" shape="rounded" leftIcon={iconAdd} size="small">
          {children || 'Link'}
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexFlow: 'row wrap' }}>
        <Button {...rest} sx={{ m: '4px' }} variant="contained" shape="rounded" leftIcon={iconDone} size="large">
          {children || 'Contained'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="outlined" shape="rounded" leftIcon={iconClose} size="large">
          {children || 'Outlined'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="text" shape="rounded" leftIcon={iconThumbUp} size="large">
          {children || 'Text'}
        </Button>
        <Button {...rest} sx={{ m: '4px' }} variant="link" shape="rounded" leftIcon={iconAdd} size="large">
          {children || 'Link'}
        </Button>
      </Box>
    </>
  );
};

export const Shapes = ButtonShapesTemplate.bind({});
Shapes.args = {
  children: '',
};
