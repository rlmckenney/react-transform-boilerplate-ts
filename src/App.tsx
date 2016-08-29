import * as React from 'react';
import { MuiThemeProvider } from "material-ui/styles";
import { muiTheme } from "./MyMuiTheme";
import { lightBlue300, teal300 } from 'material-ui/styles/colors';
import AppBar from "material-ui/AppBar";
import Counter from './Counter';
import { AppNavDrawer } from './AppNavDrawer';

interface IAppState {
	navDrawerOpen: boolean;
}

export default class App extends React.Component<{}, IAppState> {
	
	componentWillMount() {
		this.setState({ navDrawerOpen: false });
	}

	// a property that holds a function that has "this" auto-bound to this component so that we
	// can pass it as a prop to other components down the component tree
	toggleNavDrawer = () => {
		this.setState({ navDrawerOpen: !this.state.navDrawerOpen });
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div id="mui-theme-wrapper">
					<AppBar 
						title="TS React Material-UI Boilerplate" 
						onLeftIconButtonTouchTap={this.toggleNavDrawer}
						/>
					<AppNavDrawer 
						open={this.state.navDrawerOpen} 
						docked={false} 
						handleToggleRequest={this.toggleNavDrawer}
						/>
					<div style={{margin: '40px 35px', display: 'flex', justifyContent: 'flex-start'}}>
						<Counter increment={1} color={lightBlue300} />
						<Counter increment={5} color={teal300} />
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}
