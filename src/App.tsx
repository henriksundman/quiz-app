import './app.css';

import React, { Fragment } from 'react';

import QuestionAndAnswers from './components/QuestionAndAnswers';
import Card from './components/ui/Card';

const DUMMY_TEXT =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maxime corporis animi quibusdam, velit eos laudantium laborum reiciendis incidunt explicabo aut aperiam commodi soluta rem eius iste qui, saepe repellat sequi. Adipisci expedita velit rerum fugiat a aut sapiente quibusdam.';

function App() {
	return (
		<Fragment>
			<Card>
				<QuestionAndAnswers />
			</Card>
		</Fragment>
	);
}

export default App;
