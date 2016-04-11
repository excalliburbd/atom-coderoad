import * as React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import {MarkdownText} from '../_components';
import {connect} from 'react-redux';
import * as Action from '../../actions/actions';

@connect(null, (dispatch) => {
  return {
    selectProject: (name: string) => {
      Action.loadTutorial(name);
      dispatch(Action.setRoute('progress'));
    },
    toggleAlert: (item: CR.Alert): void => {
      dispatch(Action.toggleAlert(item));
    },
    loadTutorials: () => {
      dispatch(Action.loadTutorials());
    }
  };
})
export default class extends React.Component<{
  tutorials: string[], loadTutorials?: () => void,
  selectProject?: (name: string) => void, toggleAlert?: (item: CR.Alert) => void
}, {}> {
    trim(name: string): string {
      if (name.match(/^coderoad-tutorial-/)) {
        return name.slice(18);
      }
      if (name.match(/^coderoad-/)) {
        return name.slice(9);
      }
      return name;
    }
  render() {
    const {tutorials, loadTutorials, selectProject, toggleAlert} = this.props;
    return (
  <div className='cr-tutorials'>
    <Table>
      <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
       <TableRow>
        <TableHeaderColumn>Tutorial</TableHeaderColumn>
        <TableHeaderColumn>Version</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>

        {tutorials.map((tutorial: string, index) => {
        return (
          <TableRow>
            <TableRowColumn onClick={selectProject.bind(this, tutorial)}>{this.trim(tutorial)}</TableRowColumn>
            <TableRowColumn>v1.0.0</TableRowColumn>
            />
          </TableRow>
          );
          })
        }
      </TableBody>
    </Table>

    <br />
    <RaisedButton label='Load Tutorials' secondary={true} onTouchTap={loadTutorials} />
  </div>
    );
  }
}
