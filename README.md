This project was bootstrapped with React.

## Available Scripts

In the project directory, you can run:

### `npm install`

installing all libraries.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

### Deploying app to firbase. <br>

1- Install the Firebase command line tool.

### `npm install -g firebase-tools`

2- Connect your local computer to your Firebase account.

### `firebase login`

3- Initialize your website using the command line. Run the following command:

### `firebase init`

1.Choose Hosting: Configure and deploy Firebase Hosting sites
2.Choose [create a new project]
3.Answer the following questions like below:
What do you want to use as your public directory? (public) build
Configure as a single-page app (rewrite all urls to /index.html)? Yes
File build/index.html already exists. Overwrite? No

4- Create a new project. To do so, go inside your Firebase console (https://console.firebase.google.com/), click on the add project button, give it a name and create your new project.

5-The last step is to actually deploy the app

### `firebase deploy`
