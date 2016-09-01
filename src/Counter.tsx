import * as React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

interface ICounterProps {
	increment: number;
	color: string;
}

/**
 * The state interface properties are typed here as optional.  THIS IS A HACK to allow us to update 
 * single values in setState(), because TypeScript does not yet support partial interface objects.
 * We manually ensure that all truly required properties are initialized in componentWillMount().
 */  
interface ICounterState {
	counter?: number;
	increment?: number;
}

export default class Counter extends React.Component<ICounterProps, ICounterState> {
	
	private interval: number; 

	private componentWillMount() {
		this.setState({
			counter: 0,
			increment: this.props.increment
		}) 
	}

	private componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	private componentWillUnmount() {
		window.clearInterval(this.interval);
	}

	private tick() {
		this.setState({ counter: this.state.counter + this.state.increment });
	}

	public handleRaiseIncrement = () => {
		this.setState({ increment: this.state.increment + 1 });
	}

	public handleLowerIncrement = () => {
		this.setState({ increment: this.state.increment - 1 });
	}

	public reset = () => { 
		this.setState({ counter: 0 }); 
	}

	public render() {
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
