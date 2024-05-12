# Visual-regression-backstopjs
Repository used for visual regression testing

## Requirements

- [git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (version 8 or greater)
- [Chrome](https://www.google.com/chrome/) browser


## Installation

Inside the directory of the cloned project, run `npm i` to install the project dependencies.


## Running the tests

- Initially it will be necessary to run `backstop reference --config=test/mainConfig.js` to take screenshots generate the initial reference for the planned test scenarios.
- After getting all the references you have to approve by running `backstop approve --config=test/mainConfig.js`.
- Finally you can run the tests by running `npm run clean:bitmaps_test && backstop test --config=test/mainConfig.js`. This command will clear the latest screenshots from the bitmaps_test directory taken from previous tests and run a new test.

