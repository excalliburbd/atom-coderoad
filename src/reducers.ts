import {combineReducers} from 'redux';

// module reducers
import {reducer as hintPosition} from './modules/hints';
import {pagePosition, taskActions, taskTests} from './modules/page';
import {reducer as progress} from './modules/progress';
import {checks, packageJson} from './modules/setup';
import {taskPosition, testRun} from './modules/tests';
import {reducer as tutorial} from './modules/tutorial';
import {reducer as tutorials} from './modules/tutorials';
import {
  alertReducer as alert,
  dirReducer as dir,
  editorReducer as editor,
  routeReducer as route,
  windowReducer as window
} from 'core-coderoad';

export default combineReducers({
  alert, checks, editor, dir, hintPosition,
  packageJson, pagePosition, progress, route,
  tutorial, tutorials,
  taskActions, taskPosition, taskTests, testRun, window
});
