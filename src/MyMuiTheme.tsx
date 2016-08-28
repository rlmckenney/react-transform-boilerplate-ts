import * as React from "react";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { darkBlack, lightBlue600, lightBlue800, pinkA200 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: lightBlue600,
        primary2Color: lightBlue800,
        accent1Color: pinkA200,
        canvasColor: '#feffff',
        textColor: darkBlack
    },
    appBar: {
        height: 75
    }
});

export { muiTheme };