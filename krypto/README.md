
Application overview 
1. Create a price alert application that triggers an email when the user’s target price is achieved. 
2. Say, the current price of BTC is 28,000$, a user sets an alert for BTC at a price of 33,000$. The application should send an email to the user when the price of BTC reaches 33,000$. 
3. Similarly, say, the currency price of BTC is 35,000$, a user sets an alert for BTC at a price of 33,000$. The application should send an email when the price of BTC reaches 33,000$. 

Things to do for the assignment 
-> Create a rest API endpoint for the user’s to create an alert `alerts/create/` - Create a rest API endpoint for the user’s to delete an alert `alerts/delete/` - Create a rest API endpoint to fetch all the alerts that the user has created. - The response should also include the status of the alerts 
(created/deleted/triggered/.. or any other status you feel needs to be included) - Paginate the response. 
-> Include filter options based on the status of the alerts. Eg: if the user wanted only the alerts that were triggered, then the endpoint should provide just that) 
-> Add user authentication to the endpoints. Use JWT tokens. 
-> There is no need to add tests. 
-> Write a script that monitors the price of the cryptocurrency 
-> You can use this endpoint to fetch the latest price of the cryptocurrency: https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_d esc&per_page=100&page=1&sparkline=false 
-> When the price of the coin reaches the price specified by the users, send an email to all the users that set the alert at that price. (send mail using Gmail SMTP, SendGrid, etc) - You should set up a background worker(eg: celery/python-script/go-script) to send the email. Use Rabbit MQ/Redis as a message broker.) 
//

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
