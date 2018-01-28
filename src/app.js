import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './container/FirstComponent';
import s from './app.css';

console.log(s)

class App extends Component {
	render() {
		return (
			<div className={'app'}>
				<h2>welcome to my Website</h2>
				<FirstComponent />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('app'));