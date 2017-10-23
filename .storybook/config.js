import { configure } from '@storybook/react';

function loadStories() {
  // require('./stories/index.js');
  require('../packages/vs-button/story.js');
  require('../packages/vs-input/story.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
