import {fileExists} from '../../services/exists';
import {npmMinVersion, nodeMinVersion} from './check-system';
import {hasDirectory, hasPackageJson, hasTutorialDep} from './check-setup';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from '../tutorials/check-tutorials';
import {createPackageJson, openDirectory, installTutorial} from './action-setup';
import * as path from 'path';

const result = (x) => x;
function allTrue(obj: Object): boolean {
  return Object.values(obj).every((x) => x === true);
}

export default function verifySetup(): CR.Checks {
  let dir = !!hasDirectory();
  let packageJson = false;
  let tutorial = false;

  if (dir) {
    packageJson = !!hasPackageJson();
  }
  if (dir && packageJson) {
    tutorial = hasTutorialDep();
  }

  let checks: CR.Checks = {
    system: {
      node: !!nodeMinVersion(),
      npm: !!npmMinVersion()
    },
    setup: {
      dir, packageJson, tutorial
    }
  };

  checks.system.passed = allTrue(checks.system);
  checks.setup.passed = allTrue(checks.setup);
  checks.passed = checks.system.passed && checks.setup.passed;
  console.log(checks);
  return checks;
}
