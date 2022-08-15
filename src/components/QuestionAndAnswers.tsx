import { AxiosResponse } from 'axios';

import React, { Fragment, useEffect, useState } from 'react';

import { fetchQuestions } from '../utils/fetch-data';
import Answers from './Answers';
import Question from './Question';

interface IQuestion {
	category: string;
	id: string;
	correctAnswer: string;
	incorrectAnswers: string[];
	question: string;
	tags: string[];
	type: string;
	difficulty: string;
	regions: string[];
}

function QuestionAndAnswers() {
	const [questions, setQuestions] = useState<IQuestion[]>([]);
	const [questionCounter, setQuestionCounter] = useState(0);

	useEffect(() => {
		fetchQuestions()
			.then((response: AxiosResponse) => {
				setQuestions(response.data);
				console.log(questions);
			})
			.catch((err) => console.log(err.message));
	}, []);

	let isLoading = questions.length === 0;

	return (
		<Fragment>
			{isLoading && <div>'Loading...'</div>}
			{!isLoading && (
				<Fragment>
					<Question question={questions[questionCounter].question} />
					<Answers
						correctAnswer={questions[questionCounter].correctAnswer}
						incorrectAnswers={questions[questionCounter].incorrectAnswers}
					/>
				</Fragment>
			)}
		</Fragment>
	);
}
export default QuestionAndAnswers;
