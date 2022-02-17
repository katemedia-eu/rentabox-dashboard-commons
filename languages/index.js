import RU from './RU';
import EN from './EN';
import DE from './DE';


const languagesSchemas = {
	RU,
	EN,
	DE,
};

export const getLanguageSchema = (language) => languagesSchemas[language];
