import * as React from 'react';
import {connect} from 'react-redux';

import {ContentCard} from '../index';
import Hints from './Hints';
import PageToolbar from './PageToolbar';
import ProgressBar from './ProgressBar';
import Tasks from './Tasks';
import TasksComplete from './TasksComplete';
import {pageSelector, taskProgressSelector} from 'core-coderoad';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const styles = {
  page: {
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
  },
};

@connect(state => ({
  page: pageSelector(state),
  tasksCompleted: taskProgressSelector(state) === 100,
}))
export default class Page extends React.Component<{
  page?: CR.Page, isCompleted?: boolean
}, {}> {
  public render() {
    const {page, isCompleted} = this.props;
    return (
      <section style={styles.page} className='cr-page'>
        <ContentCard
          title={page.title}
          content={page.description}
        />
        <Tasks />
        <PageToolbar>
          <Hints />
          {isCompleted ? <TasksComplete /> : <ProgressBar />}
        </PageToolbar>
      </section>
    );
  }
}
