import axios from 'axios';

export async function fetchQuestions() {
	return await axios.get('https://the-trivia-api.com/api/questions?limit=5');
}
