import { Fragment, useEffect, useState } from 'react';

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

const QuestionAndAnswers = () => {
	const [questions, setQuestions] = useState<IQuestion[]>([]);
	const [questionCounter, setQuestionCounter] = useState(0);

	useEffect(() => {
		(async function getQuestions() {
			try {
				const response = await fetchQuestions();
				setQuestions(response.data);
			} catch (error: any) {
				console.log(error.message);
			}
		})();
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
};
export default QuestionAndAnswers;
