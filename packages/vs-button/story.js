import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import VSButton from './src/index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Primary', () => {
  return (
    <VSButton
      disabled={ boolean('Disabled', false) }
      size={ text('Size (small/medium/large)', 'small') }
    >
      {text('Text', 'Primary')}
    </VSButton>
  );
});

stories.add('Primary-Dark', () => {
  return (
    <div style={ { padding: '20px', backgroundColor: '#323A40' } }>
      <VSButton
        disabled={ boolean('Disabled', false) }
        size={ text('Size (small/medium/large)', 'small') }
        dark={ boolean('Dark', true) }
      >
        {text('Text', 'Primary-Dark')}
      </VSButton>
    </div>
  );
});
