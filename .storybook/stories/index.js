import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import VSButton from 'vs-button/VSButton';

storiesOf('Button', module)
  // .add('Primary', () => (
  //   <VSButton text="Normal" />
  // ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));