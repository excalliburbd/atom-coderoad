import * as React from 'react';
import {connect} from 'react-redux';

import {quit} from '../../../actions';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    menuItem: {
    textAlign: 'center',
    padding: '0px 2px',
  },
};

@connect(null, {quit})
export default class Quit extends React.Component<{
  quit?: () => Redux.ActionCreator
}, {}> {
  public render() {
    return (
      <MenuItem
        style={styles.menuItem}
        key='quit'
        onClick={this.props.quit}
      >
        quit
      </MenuItem>
    );
  }
}

Quit.propTypes = {
  quit: React.PropTypes.func.optional,
};
