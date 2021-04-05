# Code challenge - Product management frontend app

Simple app that implements basic product handling API
The app allows to create/read/update/delete and search products by name
The app implements basic authentication using JWT. Demo loging and password are: demo-user/demo-pass

# Installation and usage

Nodejs 10+ version needs to be installed on your machine.
Run `npm instal` to install all the dependencies then `npm start` to start the app in development mode.
Navigage to `http://localhost:4200` to access the app. Enter demo credentials from above to get access to the navbar and protected routes.

# Code challenge summary

UI is pretty basic and using bootstrap css for styling.
App only has one major route to manage products with a few children routes.
Fixed basic unit tests and added a few custom ones

#### Known issues:

- _Using the same backend app to obtain an auth token - ideally should be a standalone atuth server._
- _No token refresh logic has been implemented._
- _Started with template driven forms before I realized it doesn't support min/max number validation. Didn't convert to reactive form to use extended validation capabilities due to lack of time._
- _Only basic error handling was implemented - the app is stable only for happy-paths_

