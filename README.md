This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Intro
This is a electricity & gas calculator built for an extreme programming task (5 hours), which works out the cost for additional units used. The minimum amount of units you can input is 11000 based on the assumption that this is the previous meter reading.  The calculator charges the first 100 units (up to 11100) at 10p per unit and every unit beyond this is charged at 20p per unit

## Sample calculation below for gas
Gas meter reading entered => 11400
Gas units used => 11400 - 11000 => 400
Gas bill amount => (100 * 10) + (300 * 20) => 7000p (£70)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
