import { Fragment, useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { GameContext } from '../store/game-context';
import { Answers } from './Answers';
import { Question } from './Question';
import { Card } from './ui/Card';

export const GameScreen = () => {
	const [questionCounter, setQuestionCounter] = useState(0);

	const { loadQuestions, numberOfQuestions, questions } =
		useContext(GameContext);

	useEffect(() => {
		loadQuestions(numberOfQuestions);
	}, [numberOfQuestions, loadQuestions]);

	let isLoading = questions.length === 0;

	const clickAnswerHandler = () => {
		setQuestionCounter((prevCount: number) => prevCount + 1);
	};

	return (
		<Card>
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
		</Card>
	);
};
