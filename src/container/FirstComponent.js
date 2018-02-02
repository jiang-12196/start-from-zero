import React, { Component } from 'react';
import { Actor, Store, Relax } from 'plume2';

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


@Relax
class FirstComponent extends Component {
	static relaxProps = {
		text: 'text'
	};

	render() {
		return (
			<div>
				{this.props.relaxProps.text}
			</div>
		);
	}
}

export default FirstComponent;
