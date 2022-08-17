import { Fragment, useContext, useEffect, useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';

import { fetchQuestions } from '../utils/fetch-data';
import Answers from './Answers';
import Question from './Question';

import { GameContext } from '../store/game-context';
import { IQuestion } from '../interfaces/IQuestion';

const QuestionAndAnswers = () => {
	const [questions, setQuestions] = useState<IQuestion[]>([]);
	const [questionCounter, setQuestionCounter] = useState(0);

	const ctx = useContext(GameContext);

	useEffect(() => {
		(async () => {
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
			{isLoading && <ThreeDots color="#00BFFF" height={80} width={80} />}
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
