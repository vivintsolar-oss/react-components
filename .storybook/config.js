import { configure } from '@storybook/react';

function loadStories() {
  // require('./stories/index.js');
  require('../components/vs-button/VSButton-story.jsx')
  // You can require as many stories as you need.
}

configure(loadStories, module);