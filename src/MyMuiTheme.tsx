import * as React from "react";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { darkBlack, lightBlue500, lightBlue700, pinkA400 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: lightBlue500,
        primary2Color: lightBlue700,
        accent1Color: pinkA400,
        canvasColor: '#feffff',
        textColor: darkBlack
    },
    appBar: {
        height: 75
    }
});

export { muiTheme };