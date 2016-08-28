import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// Ignore IDE syntax warning. This import format is required to make it work with Babel
// See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/9444
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<App />, document.getElementById('root'));
