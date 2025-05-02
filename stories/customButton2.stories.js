import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import cButton from 'c/customButton';

buildAndRegisterCustomElement('c-custom-button', cButton);

storiesOf('CustomButton2', module)
	.addDecorator(withKnobs)
	.add('button controls', () => {
		const variantOptions = {
			base: 'base',
			neutral: 'neutral',
			brand: 'brand',
			outline: 'outline',
			success: 'success',
			destructive: 'destructive'
		};

		const label = text('label', 'Hello World');
		const variant = select('variant', variantOptions, 'base');
		const disabled = boolean('disabled', false);

		return `
			<div class="slds-p-around_medium">
				<c-custom-button
					label='${label}'
					variant='${variant}'
					${disabled ? 'disabled' : ''}
				>
				</c-custom-button>

				<pre><code>&lt;c-custom-button label='${label}' variant='${variant}' ${disabled ? 'disabled' : ''} &gt; &lt;/c-custom-button&gt;</code></pre>

				&lt;c-custom-button
					label='${label}'
					variant='${variant}'
					${disabled ? 'disabled' : ''}
				&gt;
				&lt;/c-custom-button&gt;
			</div>
		`;
	})
	.add('custom base', () => `
		<div class="slds-p-around_medium">
			<c-custom-button label="Base Button"></c-custom-button>
		</div>
	`)
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

