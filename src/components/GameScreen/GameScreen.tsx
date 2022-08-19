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
import { ScoreBoard } from '../ScoreBoard/ScoreBoard';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

import { checkAnswer } from './gameScreenUtils';

export const GameScreen = () => {
	const [questionCounter, setQuestionCounter] = useState(0);
	const [isAnswered, setIsAnswered] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState('');

	const {
		loadQuestions,
		numberOfQuestions,
		questions,
		error,
		addCorrectAnswers,
		addIncorrectAnswers,
		isGameOver,
		gameOver,
	} = useContext(GameContext);

	useEffect(() => {
		loadQuestions(numberOfQuestions);
	}, [numberOfQuestions, loadQuestions]);

	let isLoading = questions.length === 0;
	isLoading = error ? false : isLoading;

	const clickAnswerHandler = (event: SyntheticEvent) => {
		setIsAnswered(true);

		const chosenAnswer = event.currentTarget.textContent;

		chosenAnswer && setSelectedAnswer(chosenAnswer);
		const correctAnswer = questions[questionCounter].correctAnswer;

		let isAnswerCorrect;
		if (chosenAnswer) {
			isAnswerCorrect = checkAnswer(chosenAnswer, correctAnswer);
		}

		if (isAnswerCorrect) {
			addCorrectAnswers();
		} else {
			addIncorrectAnswers();
		}
	};

	const clickNextHandler = () => {
		if (questionCounter === questions.length - 1) {
			return gameOver();
		}
		setQuestionCounter((prevCount: number) => prevCount + 1);
		setIsAnswered(false);
	};

	return (
		<Fragment>
			<ScoreBoard currentQuestionIndex={questionCounter} />
			<Card>
				{isGameOver && <h1>Game Is Over</h1>}
				{error && <h1>Something went wrong. Please try again later.</h1>}
				{isLoading && <ThreeDots color="#ccc" height={80} width={80} />}
				{!isLoading && !error && !isGameOver && (
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
				{isAnswered && (
					<Button onClick={clickNextHandler}>Next Question</Button>
				)}
			</Card>
		</Fragment>
	);
};
