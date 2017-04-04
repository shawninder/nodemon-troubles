# Unignoring specific node modules

This repo is for debugging a problem I'm having with nodemon: I am unable to ignore all node_modules except for one of them.

This can be useful wherever `npm link` is useful, watching that particular linked module but ignoring its siblings or children.

The code in this repo represents my best attempt yet.

## Installation

- clone this repo
- `npm i`
- `npm i -g nodemon`

## Reproducing the problem

`npm start` runs index.js with nodemon, which is configured via [nodemon.json](nodemon.json) to ignore all node_modules except for `is-node`. Hence:

### setup
- `npm start`: Observe index.js runs and exits and nodemon says it's watching for changes

### Test 1
- Modify the `node_modules/is-node/index.js` file and save it
- **Expect** nodemon to restart the process (since we removed `node_modules` from `ignoreRoot` in [nodemon.json](nodemon.json))
- **Observe** the process is indeed restarted (**PASS**)

### Test 2
- Modify the `node_modules/is-number/index.js` file and save it
- **Expect** nothing to happen since we tell nodemon to ignore all node_modules except for `is-node` in [nodemon.json](nodemon.json)
- **Observe** the process is restarted by nodemon (**FAIL**)

## HELP

If anyone comes across this and knows a solution to this problem, please help me out by providing the answer on [the associated stackoverflow question](http://stackoverflow.com/questions/43189360/how-can-i-tell-nodemon-to-ignore-all-node-modules-except-for-one-directory)
