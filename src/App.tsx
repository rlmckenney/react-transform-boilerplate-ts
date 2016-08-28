import * as React from 'react';
import Counter from './Counter';
import colors from './colors';

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<div style={{margin: '40px 70px'}}>
				<Counter increment={1} color={colors.NICE} />
				<Counter increment={5} color={colors.SUPER_NICE} />
			</div>
		);
	}
}
