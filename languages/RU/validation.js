import _ from 'lodash';

export default {
	enterValue: (fieldName, languageSchema) => `Введите ${languageSchema[fieldName] || fieldName}`,
	outOfBounds: (fieldName, languageSchema, min, max) =>
		`Поле ${_.upperFirst(languageSchema[fieldName] || fieldName)} должно быть от ${min} до ${max} символов`,
	invalidField: (fieldName, languageSchema) => `Неверный формат поля ${languageSchema[fieldName] || fieldName}`,
	invalidCharacters: () => 'Недопустимые символы',
	chooseField: (fieldName, languageSchema) => `Выберите ${languageSchema[fieldName] || fieldName}`,
	required: () => 'Обязательно',
	validatePhone: (min, max) =>
		`Поле Номер телефона должно быть от ${min} до ${max} символов`,
	validatePasswordConfirmation: () => 'Пароли не совпадают',
};
