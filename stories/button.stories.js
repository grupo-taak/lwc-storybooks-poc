import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Button from 'lightning/button';

buildAndRegisterCustomElement('lightning-button', Button);

storiesOf('Button', module)
	.add('base', () => `
		<div class="slds-p-around_medium">
			<lightning-button label="Base Button"></lightning-button>
		</div>
	`)
	.add('neutral', () => `
		<div class="slds-p-around_medium">
			<lightning-button variant="neutral" label="Neutral Button"></lightning-button>
		</div>
	`)
	.add('brand', () => `
		<div class="slds-p-around_medium">
			<lightning-button variant="brand" label="Brand Button"></lightning-button>
		</div>
	`)
	.add('destructive', () => `
		<div class="slds-p-around_medium">
			<lightning-button variant="destructive" label="Destructive Button"></lightning-button>
		</div>
	`)
	.add('success', () => `
		<div class="slds-p-around_medium">
			<lightning-button variant="success" label="Success Button"></lightning-button>
		</div>
	`);