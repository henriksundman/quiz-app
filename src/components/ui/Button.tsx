import { SyntheticEvent } from 'react';

import classes from './Button.module.css';

interface ButtonProps {
	children?: React.ReactNode;
	key?: string;
	customStyles?: string;
	onClick?: (event: SyntheticEvent) => void;
}

export const Button = ({
	children,
	key,
	customStyles,
	onClick,
}: ButtonProps) => {
	return (
		<button
			key={key}
			className={`${classes.btn} ${customStyles}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
