import styles from './Card.module.css';

interface CardProps {
	children?: React.ReactNode;
}

function Card({ children }: CardProps) {
	return (
		<article className={styles['card-container']}>
			<div className={styles.card}>{children}</div>
		</article>
	);
}
export default Card;
