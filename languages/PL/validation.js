import _ from 'lodash';

export default {
	enterValue: (fieldName, languageSchema) => `Wprowadź ${languageSchema[fieldName] || fieldName}`,
	outOfBounds: (fieldName, languageSchema, min, max) =>
		`${_.upperFirst(languageSchema[fieldName] || fieldName)} musi być pomiędzy ${min} a ${max} znaków`,
	invalidField: (fieldName, languageSchema) => `Wybierz poprawnie ${languageSchema[fieldName] || fieldName}`,
	invalidCharacters: () => 'Nieprawidłowe znaki',
	chooseField: (fieldName, languageSchema) => `Wybierz ${languageSchema[fieldName] || fieldName}`,
	required: () => 'Wymagany',
	validatePhone: (min, max) =>
		`Pole numer telefonu musi mieć od ${min} do ${max} znaków`,
	validatePasswordConfirmation: () => 'Hasło różni się',
	invalidAmount: (fieldName, languageSchema, value) => `${languageSchema[fieldName] || fieldName} musi być ${value} znaków`,
};
