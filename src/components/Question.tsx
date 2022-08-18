import { useState } from 'react';

interface QuestionProps {
	question?: string;
}

export const Question = ({ question }: QuestionProps) => {
	return <h1>{question}</h1>;
};
