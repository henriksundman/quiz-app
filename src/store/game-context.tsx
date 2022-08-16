import { useState, createContext, ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface GameContextValue {
	isGameStarted: boolean;
}

export const GameContext = createContext<GameContextValue>({
	isGameStarted: false,
});

export const GameContextProvider = ({ children }: Props) => {
	const [isGameStarted, setIsGameStarted] = useState(true);

	const value = {
		isGameStarted,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameContext;
