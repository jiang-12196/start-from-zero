import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './container/Counter';
import store from './reducer';
import s from './app.css';


class App extends Component {
	
	render() {
		return (
			<div className={'app'}>
				<h2>welcome to my Website</h2>
				<Counter 
					value={store.getState()}
					onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
					onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
				/>
			</div>
		);
	}
}


const render = () => ReactDOM.render(<App />, document.getElementById('app'));

render();

store.subscribe(render);

