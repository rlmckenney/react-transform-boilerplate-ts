import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

interface ICounterProps {
	increment: number;
	color: string;
}

interface ICounterState {
	counter: number;
	increment: number;
}

export default class Counter extends React.Component<ICounterProps, ICounterState> {
	private interval: number; 

	componentWillMount() {
		this.setState({
			counter: 0,
			increment: this.props.increment
		}) 
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	tick() {
		this.setState({
			counter: this.state.counter + this.state.increment,
			increment: this.state.increment
		});
	}

	handleRaiseIncrement = () => {
		this.setState({
			counter: this.state.counter,
			increment: this.state.increment + 1
		});
	}

	handleLowerIncrement = () => {
		this.setState({
			counter: this.state.counter,
			increment: this.state.increment - 1
		});
	}

	render() {
		const counterStyles = {
			card: {
				width: '350px',
				marginLeft: '30px'
			},
			cardActions: {
				textAlign: 'end'
			}
		};
		
		return (
			<Card style={counterStyles.card}>
				<CardHeader
					title = 'Counter'
					subtitle = {"Increment by " + this.state.increment}
					avatar = {<FontIcon className="material-icons">schedule</FontIcon>} />
				<CardText>
					<h1 style={{ color: this.props.color, textAlign: 'center' }}>
						{this.state.counter.toLocaleString()}
					</h1>
				</CardText>
				<CardActions style={counterStyles.cardActions}>
					<FlatButton 
						label = "Raise Increment" 
						secondary = {true} 
						onTouchTap = {this.handleRaiseIncrement}
					/>
					<FlatButton 
						label = "Lower Increment" 
						secondary = {true} 
						onTouchTap = {this.handleLowerIncrement}
					/>
				</CardActions>
			</Card>
		);
	}
}
