import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import cButton from 'c/customButton';

buildAndRegisterCustomElement('c-custom-button', cButton);

storiesOf('CustomButton', module)
	.add('base', () => `
		<div class="slds-p-around_medium">
			<c-custom-button label="Base Button"></c-custom-button>
		</div>
	`)
	.add('neutral', () => `
		<div class="slds-p-around_medium">
			<c-custom-button variant="neutral" label="Neutral Button"></c-custom-button>
		</div>
	`)
	.add('brand', () => `
		<div class="slds-p-around_medium">
			<c-custom-button variant="brand" label="Brand Button"></c-custom-button>
		</div>
	`)
	.add('destructive', () => `
		<div class="slds-p-around_medium">
			<c-custom-button variant="destructive" label="Destructive Button"></c-custom-button>
		</div>
	`)
	.add('success', () => `
		<div class="slds-p-around_medium">
			<c-custom-button variant="success" label="Success Button"></c-custom-button>
		</div>
	`);