/*
  gulpfile.ts
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in tools/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  tools/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

import { TASKS_DIR } from "./tools/config";
import * as requireDir from "require-dir";

// Require all tasks in tools/tasks, including subfolders
requireDir(TASKS_DIR, { recurse: false });
