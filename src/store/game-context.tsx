import { useState, createContext, ReactNode, useCallback } from 'react';
import { IGameState } from '../interfaces/IGameState';
import { IQuestion } from '../interfaces/IQuestion';
import { fetchQuestions } from '../utils/fetch-data';
interface Props {
	children?: ReactNode;
}

export const GameContext = createContext<IGameState>({
	isGameStarted: false,
	numberOfQuestions: 5,
	onGameStartHandler: (numQuestions: number) => {},
	numberOfCorrectAnswers: 0,
	onAddCorrectAnswers: () => {},
	questions: [],
	loadQuestions: (numQuestions: number) => {},
});

export const GameContextProvider = ({ children }: Props) => {
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [numberOfQuestions, setNumberOfQuestions] = useState(5);
	const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
	const [questions, setQuestions] = useState<IQuestion[]>([]);

	const onGameStartHandler = (numQuestions: number): void => {
		setIsGameStarted(true);
		setNumberOfQuestions(numQuestions);
	};

	const onAddCorrectAnswers = (): void => {
		setNumberOfCorrectAnswers((prevNum: number) => prevNum + 1);
	};

	const loadQuestions = useCallback(async (numberOfQuestions: number) => {
		try {
			const response = await fetchQuestions(numberOfQuestions);
			setQuestions(response.data);
		} catch (error: any) {
			console.log(error.message);
		}
	}, []);

	const value = {
		isGameStarted,
		numberOfQuestions,
		onGameStartHandler,
		numberOfCorrectAnswers,
		onAddCorrectAnswers,
		questions,
		loadQuestions,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;
