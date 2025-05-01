import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';

import Button from 'lightning/button';

buildAndRegisterCustomElement('lightning-button', Button);

storiesOf('Button', module)
  .add('base', () => `
    <div class="slds-p-around_medium">
      <lightning-button label="Base Button XXX"></lightning-button>
    </div>
  `);
