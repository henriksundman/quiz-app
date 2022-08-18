import styles from './Card.module.css';

interface CardProps {
	children?: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
	return <article className={styles.card}>{children}</article>;
};
