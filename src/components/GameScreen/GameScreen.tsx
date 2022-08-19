import {
	Fragment,
	SyntheticEvent,
	useContext,
	useEffect,
	useState,
} from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { GameContext } from '../../store/game-context';
import { Answers } from '../Answers/Answers';
import { Question } from '../Question/Question';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

import { checkAnswer } from './gameScreenUtils';

export const GameScreen = () => {
	const [questionCounter, setQuestionCounter] = useState(0);
	const [isAnswered, setIsAnswered] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [reset, setReset] = useState(false);

	const { loadQuestions, numberOfQuestions, questions } =
		useContext(GameContext);

	useEffect(() => {
		loadQuestions(numberOfQuestions);
	}, [numberOfQuestions, loadQuestions]);

	const isLoading = questions.length === 0;

	const clickAnswerHandler = (event: SyntheticEvent) => {
		setIsAnswered(true);

		const chosenAnswer = event.currentTarget.textContent;

		chosenAnswer && setSelectedAnswer(chosenAnswer);
		const correctAnswer = questions[questionCounter].correctAnswer;

		let isAnswerCorrect;
		if (chosenAnswer) {
			isAnswerCorrect = checkAnswer(chosenAnswer, correctAnswer);
		}
	};

	const clickNextHandler = () => {
		setQuestionCounter((prevCount: number) => prevCount + 1);
		setIsAnswered(false);
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
						isAnswered={isAnswered}
						chosenAnswer={selectedAnswer}
					/>
				</Fragment>
			)}
			{isAnswered && <Button onClick={clickNextHandler}>Next Question</Button>}
		</Card>
	);
};
