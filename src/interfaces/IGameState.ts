import { IQuestion } from './IQuestion';

export interface IGameState {
	isGameStarted: boolean;
	numberOfQuestions: number;
	onGameStartHandler: () => void;
	numberOfCorrectAnswers: number;
	onAddCorrectAnswers: () => void;
	questions: IQuestion[];
	onLoadQuestions: () => void;
}
