import axios from 'axios';

export async function fetchQuestions() {
	try {
		return axios.get('https://the-trivia-api.com/api/questions?limit=5');
	} catch (error: any) {
		throw new Error(error);
	}
}
