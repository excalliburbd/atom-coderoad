import * as React from 'react';
import {connect} from 'react-redux';

import {editorDevToolsToggle} from '../../../../actions';
import FlatButton from 'material-ui/FlatButton';
import Code from 'material-ui/svg-icons/action/code';

const styles = {
  position: 'relative',
  top: '10px',
};

@connect(null, {editorDevToolsToggle})
export default class ToggleDevTools extends React.Component<{
  editorDevToolsToggle?: any
}, {}> {
  public render() {
    return (
      <FlatButton
        style={styles}
        icon={<Code />}
        onTouchTap={this.props.editorDevToolsToggle}
      />
    );
  };
}
