import _ from 'lodash';

export default {
	enterValue: (fieldName, languageSchema) => `Enter ${languageSchema[fieldName] || fieldName}`,
	outOfBounds: (fieldName, languageSchema, min, max) =>
		`${_.upperFirst(languageSchema[fieldName] || fieldName)} must be between ${min} and ${max} characters`,
	invalidField: (fieldName, languageSchema) => `Enter correct ${languageSchema[fieldName] || fieldName}`,
	invalidCharacters: () => 'Invalid characters',
	chooseField: (fieldName, languageSchema) => `Choose ${languageSchema[fieldName] || fieldName}`,
	required: () => 'Required',
	validatePhone: (min, max) =>
		`Field Phone number must be between ${min} and ${max} characters`,
	validatePasswordConfirmation: () => 'Password mismatch',
	invalidAmount: (fieldName, languageSchema, value) => `${languageSchema[fieldName] || fieldName} must be ${value} characters`,
};
