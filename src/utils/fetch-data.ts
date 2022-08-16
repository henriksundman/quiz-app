import axios from 'axios';

export const fetchQuestions = async () => {
	try {
		return await axios.get('https://the-trivia-api.com/api/questions?limit=5');
	} catch (error: any) {
		throw new Error(error);
	}
};
