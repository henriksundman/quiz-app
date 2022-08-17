import { useState, createContext, ReactNode } from 'react';
import { IGameState } from '../interfaces/IGameState';
import { IQuestion } from '../interfaces/IQuestion';
import { fetchQuestions } from '../utils/fetch-data';
interface Props {
	children?: ReactNode;
}

export const GameContext = createContext<IGameState>({
	isGameStarted: false,
	numberOfQuestions: 5,
	onGameStartHandler: () => {},
	numberOfCorrectAnswers: 0,
	onAddCorrectAnswers: () => {},
	questions: [],
	onLoadQuestions: () => {},
});

export const GameContextProvider = ({ children }: Props) => {
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [numberOfQuestions, setNumberOfQuestions] = useState(5);
	const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
	const [questions, setQuestions] = useState([]);

	const onGameStartHandler = (): void => {
		setIsGameStarted(true);
	};

	const onAddCorrectAnswers = (): void => {
		setNumberOfCorrectAnswers((prevState: number) => prevState + 1);
	};

	const onLoadQuestions = async () => {
		try {
			const response = await fetchQuestions();
			setQuestions(response.data);
		} catch (error: any) {
			console.log(error.message);
		}
	};

	const value = {
		isGameStarted,
		numberOfQuestions,
		onGameStartHandler,
		numberOfCorrectAnswers,
		onAddCorrectAnswers,
		questions,
		onLoadQuestions,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;
