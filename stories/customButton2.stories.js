import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import cButton from 'c/customButton';

buildAndRegisterCustomElement('c-custom-button', cButton);

// export default {
// 	title: 'Custom Buttom 2'
// };

// export const Base = () => `
// 	<div class="slds-p-around_medium">
// 		<c-custom-button label="Base Button"></c-custom-button>
// 	</div>
// `;

// export const Brand  = () => `
// 	<div class="slds-p-around_medium">
// 		<c-custom-button variant="brand" label="Brand Button"></c-custom-button>
// 	</div>
// `;

const label = 'Base Button 2'

storiesOf('CustomButton2', module)
	.add('custom base', () => `
		<div class="slds-p-around_medium">
			<c-custom-button label='${label}'></c-custom-button>
		</div>
	`).addParameters({label: 'test'})
	.add('custom neutral', () => `
		<div class="slds-p-around_medium">
			<c-custom-button variant="neutral" label="Neutral Button"></c-custom-button>
		</div>
	`)
	.add('custom brand', () => `
		<div class="slds-p-around_medium">
			<c-custom-button variant="brand" label="Brand Button"></c-custom-button>
		</div>
	`)
	.add('custom destructive', () => `
		<div class="slds-p-around_medium">
			<c-custom-button variant="destructive" label="Destructive Button"></c-custom-button>
		</div>
	`)
	.add('custom success', () => `
		<div class="slds-p-around_medium">
			<c-custom-button variant="success" label="Success Button"></c-custom-button>
		</div>
	`);

