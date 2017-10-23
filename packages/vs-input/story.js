import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import VSInput from './src/index';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('Primary', () => {
  return (
    <VSInput
      disable={ boolean('Disabled', false) }
      active={ boolean('Active', false) }
      error={ text('Error', 'Uh Oh Spaghetti O\'s') }
      label={ text('Label', 'Text Input') }
    />
  );
});

stories.add('Primary-Dark', () => {
  return (
    <div style={ { padding: '20px', backgroundColor: '#323A40' } }>
      <VSInput
        dark={ boolean('Dark', true) }
        disable={ boolean('Disabled', false) }
        active={ boolean('Active', false) }
        error={ text('Error', 'Uh Oh Spaghetti O\'s') }
        label={ text('Label', 'Text Input') }
      />
    </div>
  );
});
