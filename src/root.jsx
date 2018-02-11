import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Resume from 'components/resume';
import 'scss/style.scss';

const rootElement = document.querySelector('#main');

ReactDOM.render(<Resume />, rootElement);

if (module.hot) {
	module.hot.accept(Resume, () => {
		ReactDOM.render(<Resume />, rootElement);
	});
}
