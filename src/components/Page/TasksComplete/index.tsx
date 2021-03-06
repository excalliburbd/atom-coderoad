import * as React from 'react';
import {connect} from 'react-redux';

import {Markdown} from '../../index';
import {pageSelector} from 'core-coderoad';
import {Card, CardText} from 'material-ui/Card';
import {cyan500, grey100} from 'material-ui/styles/colors';

const styles = {
  card: {
    backgroundColor: cyan500,
    margin: '10px 5px',
  },
  text: {
    color: grey100,
    fontSize: '1.1em'
  },
};

@connect(state => ({
  onPageComplete: pageSelector(state).onPageComplete,
}))
export default class TasksComplete extends React.Component<{
  onPageComplete?: string
}, {}> {
  public render() {
    const {onPageComplete} = this.props;
    return (
      <Card style={styles.card}>
        <CardText>
          <Markdown style={styles.text}>{onPageComplete}</Markdown>
        </CardText>
      </Card>
    );
  }
}
