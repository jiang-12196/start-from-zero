import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Actor, Store, StoreProvider } from 'plume2';
import FirstComponent from './container/FirstComponent';
import s from './app.css';

class HelloActor extends Actor {
	defaultState() {
		return { text: 'hello world'}
	}
}

class AppStore extends Store {
	bindActor() {
		return [ new HelloActor ];
	}
}

@StoreProvider(AppStore)
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