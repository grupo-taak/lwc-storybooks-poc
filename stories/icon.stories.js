import { storiesOf } from '@storybook/html';
import buildAndRegisterCustomElement from './utils/build-custom-element';
import Icon from 'lightning/icon';

buildAndRegisterCustomElement('lightning-icon', Icon);

storiesOf('Icon', module)
	.add('action', () => `
		<div class="slds-p-around_medium">
			<lightning-icon icon-name="action:approval"></lightning-icon>
			<lightning-icon icon-name="action:back"></lightning-icon>
			<lightning-icon icon-name="action:call"></lightning-icon>
		<div class="slds-p-around_medium">
	`)
	.add('doctype', () => `
		<div class="slds-p-around_medium">
			<lightning-icon icon-name="doctype:ai"></lightning-icon>
			<lightning-icon icon-name="doctype:excel"></lightning-icon>
			<lightning-icon icon-name="doctype:folder"></lightning-icon>
		<div class="slds-p-around_medium">
	`)
	.add('standard', () => `
		<div class="slds-p-around_medium">
			<lightning-icon icon-name="standard:account"></lightning-icon>
			<lightning-icon icon-name="standard:address"></lightning-icon>
			<lightning-icon icon-name="standard:all"></lightning-icon>
		<div class="slds-p-around_medium">
	`)
	.add('utitlity', () => `
		<div class="slds-p-around_medium">
			<lightning-icon icon-name="utility:activity"></lightning-icon>
			<lightning-icon icon-name="utility:alert"></lightning-icon>
			<lightning-icon icon-name="utility:emoji"></lightning-icon>
		<div class="slds-p-around_medium">
	`);
