import {
	Fragment,
	SyntheticEvent,
	useContext,
	useEffect,
	useState,
} from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { GameContext } from '../store/game-context';
import { Answers } from './Answers';
import { Question } from './Question';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

const checkAnswer = (chosenAnswer: string, correctAnswer: string) => {
	return chosenAnswer === correctAnswer;
};

export const GameScreen = () => {
	const [questionCounter, setQuestionCounter] = useState(0);
	const [isAnswered, setIsAnswered] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState('');

	const { loadQuestions, numberOfQuestions, questions } =
		useContext(GameContext);

	useEffect(() => {
		loadQuestions(numberOfQuestions);
	}, [numberOfQuestions, loadQuestions]);

	let isLoading = questions.length === 0;

	const clickAnswerHandler = (event: SyntheticEvent) => {
		// setQuestionCounter((prevCount: number) => prevCount + 1);
		setIsAnswered(true);

		const chosenAnswer = event.currentTarget.textContent;

		chosenAnswer && setSelectedAnswer(chosenAnswer);
		const correctAnswer = questions[questionCounter].correctAnswer;

		let isAnswerCorrect;
		if (chosenAnswer) {
			isAnswerCorrect = checkAnswer(chosenAnswer, correctAnswer);
		}
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
			{isAnswered && <Button>Next Question</Button>}
		</Card>
	);
};
