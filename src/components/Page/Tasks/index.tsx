import * as React from 'react';
import {List} from 'material-ui/List';
import {Card} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import {Task} from './Task';

function visibleTasks(tasks: CR.Task[], taskPosition: number): CR.Task[] {
  return tasks.slice(0, taskPosition + 1);
}

export const Tasks: React.StatelessComponent<{
  tasks: CR.Task[], taskPosition: number, testRun: boolean
}> = ({tasks, taskPosition, testRun}) => {
  const visTasks = visibleTasks(tasks, taskPosition);
  return (
    <Card className='cr-tasks'>
      <List>
        <Subheader>Tasks</Subheader>
        {visTasks.map((task: CR.Task, index: number) => (
          <Task
            key={index}
            index={index}
            task={task}
            {...this.props}
          />)
        )}
    </List>
    </Card>
  );
};