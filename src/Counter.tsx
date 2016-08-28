import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

interface ICounterProps {
	increment: number;
	color: string;
}

interface ICounterState {
	counter: number;
}

export default class Counter extends React.Component<ICounterProps, ICounterState> {
	private interval: number; 

	constructor(props: ICounterProps) {
		super(props);
		this.state = { counter: 0 };
		this.interval = window.setInterval(() => this.tick(), 1000);
		this.subtitle = "Increment by " + this.props.increment;
	}

	tick() {
		this.setState({
			counter: this.state.counter + this.props.increment
		});
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	render() {
		return (
			<Card style={{width: '300px', marginLeft: '30px'}}>
				<CardHeader
					title = 'Counter'
					subtitle = {"Increment by " + this.props.increment}
					avatar = {<FontIcon className="material-icons">schedule</FontIcon>} />
				<CardText>
					<h1 style={{ color: this.props.color, textAlign: 'end' }}>
						{this.state.counter}
					</h1>
				</CardText>
			</Card>
		);
	}
}
