import { Fragment, useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { GameContext } from '../store/game-context';
import Answers from './Answers';
import Question from './Question';

const QuestionAndAnswers = () => {
	const [questionCounter, setQuestionCounter] = useState(0);

	const { onLoadQuestions, numberOfQuestions, questions } =
		useContext(GameContext);

	useEffect(() => {
		onLoadQuestions(numberOfQuestions);
	}, [numberOfQuestions, onLoadQuestions]);

	let isLoading = questions.length === 0;

	const clickAnswerHandler = () => {
		setQuestionCounter((prevCount: number) => prevCount + 1);
	};

	return (
		<Fragment>
			{isLoading && <ThreeDots color="#00BFFF" height={80} width={80} />}
			{!isLoading && (
				<Fragment>
					<Question question={questions[questionCounter].question} />
					<Answers
						correctAnswer={questions[questionCounter].correctAnswer}
						incorrectAnswers={questions[questionCounter].incorrectAnswers}
						onClickAnswer={clickAnswerHandler}
					/>
				</Fragment>
			)}
		</Fragment>
	);
};
export default QuestionAndAnswers;
