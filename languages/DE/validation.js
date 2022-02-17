import _ from 'lodash';

export default {
	enterValue: (fieldName, languageSchema) => `Geben Sie ${languageSchema[fieldName] || fieldName}`,
	outOfBounds: (fieldName, languageSchema, min, max) =>
		`Die ${_.upperFirst(languageSchema[fieldName] || fieldName)} muss zwischen ${min} und ${max} zeichen`,
	invalidField: (fieldName, languageSchema) => `Geben Sie treu ${languageSchema[fieldName] || fieldName}`,
	invalidCharacters: () => 'Sie haben ein ungültiges Zeichen eingegeben',
	chooseField: (fieldName, languageSchema) => `Auswählen ${languageSchema[fieldName] || fieldName}`,
	required: () => 'Unbedingt',
	validatePhone: (min, max) =>
		`Die Telefonnummer muss von ${min} bis ${max} Zeichen erhalten`,
	validatePasswordConfirmation: () => 'Die angegeben Passwörtern stimmen nicht überein',
};
