import React from 'react';
import '../src/stories/styles.css';
import '@fontsource/roboto-flex/400.css';
import '@fontsource/material-icons-rounded/400.css';

import CustomThemeProvider from '../src/core/provider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (StoryFn) => {
    return (
      <CustomThemeProvider>
        <StoryFn />
      </CustomThemeProvider>
    );
  },
];
