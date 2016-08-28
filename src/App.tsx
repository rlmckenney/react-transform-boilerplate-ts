import * as React from 'react';
import { MuiThemeProvider } from "material-ui/styles";
import { muiTheme } from "./MyMuiTheme";
import { lightBlue700, pinkA400 } from 'material-ui/styles/colors';
import AppBar from "material-ui/AppBar";
import Counter from './Counter';

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div id="mui-theme-wrapper">
					<AppBar title="TS React Material-UI Boilerplate" />
					<div style={{margin: '40px 35px', display: 'flex', justifyContent: 'flex-start'}}>
						<Counter increment={1} color={lightBlue700} />
						<Counter increment={5} color={pinkA400} />
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}
