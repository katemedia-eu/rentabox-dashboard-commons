import RU from './RU';
import EN from './EN';
import DE from './DE';
import PL from './PL';


const languagesSchemas = {
	RU,
	EN,
	DE,
	PL
};

export const getLanguageSchema = (language) => languagesSchemas[language];
