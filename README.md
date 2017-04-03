# nodemon troubles

This repo is for debugging a problem I'm having with nodemon

## Installation

- clone this repo
- `npm i`
- `npm i -g nodemon`

## Reproducing the problem

`npm start` runs index.js with nodemon, which is configured via [nodemon.json](nodemon.json) to ignore all node_modules except for `is-node`. Hence:

- `npm start`: Observe index.js runs and exits and nodemon says it's watching for changes
- Modify the `node_modules/is-node/index.js` file and save it
- Expect nodemon to restart the process (since we removed `node_modules` from `ignoreRoot` in [nodemon.json](nodemon.json))
- OBSERVE the process is indeed restarted (GOOD)
- Modify the `node_modules/is-number/index.js` file and save it
- Expect nothing to happen since we tell nodemon to ignore all node_modules except for `is-node` in [nodemon.json](nodemon.json)
- OBSERVE the process is restarted by nodemon (THIS IS INCORRECT)

## Why is it doing this?

I think this may be related to [fuzzy comparison](https://github.com/remy/nodemon/pull/922).

## Next steps

Now that I have reproduced the problem, I have to figure out if there is any way to modify `nodemon.json` to obtain the behavior I want or if nodemon itself has to be fixed.

## HELP

If anyone comes across this and knows a solution to this problem, please help me out by providing the answer on [the associated stackoverflow question](http://stackoverflow.com/questions/43189360/how-can-i-tell-nodemon-to-ignore-all-node-modules-except-for-one-directory)
