interface QuestionProps {
	question?: string;
}

export default function Question({ question }: QuestionProps) {
	let questionText = 'Loading...';

	console.log(question);

	if (question) {
		questionText = question;
	}

	return <h1>{questionText}</h1>;
}
