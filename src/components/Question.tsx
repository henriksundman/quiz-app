import { AxiosResponse } from 'axios';

import React, { useEffect, useState } from 'react';

import { fetchQuestions } from '../utils/fetch-data';

// TODO complete interface
interface IQuestion {
	category: string;
	id: string;
	correctAnswer: string;
}

// TODO format question correctly
export default function Question() {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		fetchQuestions().then((response: AxiosResponse) => {
			setQuestions(response.data);
		});
	}, []);

	console.log(questions);
	return (
		<ul>
			{questions.map((q: IQuestion) => (
				<li key={q.id}>
					{q.category} {q.correctAnswer}
				</li>
			)) || 'Loading'}
		</ul>
	);
}

// [
//   {
//     "category": "History",
//     "id": "622a1c367cc59eab6f950316",
//     "correctAnswer": "Mumtaj Mahal",
//     "incorrectAnswers": [
//       "Taj Bodhi",
//       "Lugah Taj",
//       "Mahal Mahore"
//     ],
//     "question": "Who was the Taj Mahal built in memory of?",
//     "tags": [
//       "tourist_attractions",
//       "india",
//       "history"
//     ],
//     "type": "Multiple Choice",
//     "difficulty": "hard",
//     "regions": []
//   },
