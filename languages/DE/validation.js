import _ from 'lodash';

export default {
	enterValue: (fieldName, languageSchema) => `Geben Sie ${languageSchema[fieldName] || fieldName}`,
	outOfBounds: (fieldName, languageSchema, min, max) =>
		`Die ${_.upperFirst(languageSchema[fieldName] || fieldName)} muss zwischen ${min} und ${max} zeichen`,
	invalidField: (fieldName, languageSchema) => `Bitte geben Sie die richtige ${languageSchema[fieldName] || fieldName} ein`,
	invalidCharacters: () => 'Sie haben ein ungültiges Zeichen eingegeben',
	chooseField: (fieldName, languageSchema) => `Auswählen ${languageSchema[fieldName] || fieldName}`,
	required: (fieldName) => `${fieldName}`,
	validatePhone: (min, max) =>
		`Ihre Telefonnummer muss ${min} bis ${max} Zeichen enthalten`,
	validatePasswordConfirmation: () => 'Die angegeben Passwörtern stimmen nicht überein',
};
