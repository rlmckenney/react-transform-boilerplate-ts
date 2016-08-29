import * as React from 'react';
import { muiTheme } from "./MyMuiTheme";

interface IDrawerHeaderProps {
    title: string;
    handleToggleRequest: () => void;
}

export class NavDrawerHeader extends React.Component<IDrawerHeaderProps, {}> {
    private style = {
        backgroundColor: muiTheme.appBar.color,
        height: muiTheme.appBar.height,
        paddingLeft: '16px',
        fontSize: '24px',
        lineHeight: muiTheme.appBar.height + 'px',
        color: muiTheme.appBar.textColor,
        cursor: 'pointer'
    }

    render() {
        return (
            <div 
                id="nav-drawer-header" 
                style={this.style}
                onTouchTap={this.props.handleToggleRequest}
                >
                {this.props.title}
            </div>
        );
    }
}