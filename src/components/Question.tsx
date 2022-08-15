type QuestionProps = {
	question?: string;
};

const Question = ({ question }: QuestionProps) => {
	let questionText = 'Loading...';

	console.log(question);

	if (question) {
		questionText = question;
	}

	return <h1>{questionText}</h1>;
};

export default Question;
