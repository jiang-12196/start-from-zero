import React, { Component, PropTypes } from 'react';
import { connect } from 'redux';

class Counter extends Component {

    // static propTypes = {
    //     value: PropTypes.number,
    //     onIncrement: PropTypes.func,
    //     onDecrement: PropTypes.func,
    //   };

	render() {
		return (
			<div>
                <h1>{this.props.value}</h1>
                <div>
                    <button onClick={this.props.onIncrement}>+</button>
                    <button onClick={this.props.onDecrement}>-</button>
                </div>
            </div>
		);
	}
}

export default Counter;
