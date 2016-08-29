import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {NavDrawerHeader} from './AppNavDrawerHeader';

interface DrawerProps {
    open: boolean;
    docked: boolean;
    handleToggleRequest: () => void;
}

export class AppNavDrawer extends React.Component<DrawerProps, {}> {

    render() {
       
        return (
            <Drawer 
                docked={this.props.docked}
                open={this.props.open}
                onRequestChange={this.props.handleToggleRequest}
            >
                <NavDrawerHeader title="Main menu" handleToggleRequest={this.props.handleToggleRequest}/>
                <MenuItem onTouchTap={this.props.handleToggleRequest}>Menu Item</MenuItem>
                <MenuItem onTouchTap={this.props.handleToggleRequest}>Menu Item 2</MenuItem>
            </Drawer>
        );
    }
}