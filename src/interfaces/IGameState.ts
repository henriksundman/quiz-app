import { SyntheticEvent } from 'react';
import { IQuestion } from './IQuestion';

export interface IGameState {
	isGameStarted: boolean;
	numberOfQuestions: number;
	onGameStartHandler: (numQuestions: number) => void;
	numberOfCorrectAnswers: number;
	onAddCorrectAnswers: () => void;
	questions: IQuestion[];
	loadQuestions: (numQuestions: number) => void;
}
