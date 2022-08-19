import { SyntheticEvent } from 'react';

import classes from './Button.module.css';

interface ButtonProps {
	children?: React.ReactNode;
	customStyles?: string;
	onClick?: (event: SyntheticEvent) => void;
}

export const Button = ({ children, customStyles, onClick }: ButtonProps) => {
	return (
		<button className={`${classes.btn} ${customStyles}`} onClick={onClick}>
			{children}
		</button>
	);
};
