# Krypto
### Application - Krypto

Create a price alert application that triggers an email when the user’s target price is achieved. 
Say, the current price of BTC is 28,000$, a user sets an alert for BTC at a price of 33,000$. The application should send an email to the user when the price of BTC reaches 33,000$. 
Similarly, say, the currency price of BTC is 35,000$, a user sets an alert for BTC at a price of 33,000$. The application should send an email when the price of BTC reaches 33,000$. 

### Things to do for the assignment:
- Create a rest API endpoint for the user’s to create an alert `alerts/create/` - Create a rest API endpoint for the user’s to delete an alert `alerts/delete/` - Create a rest API endpoint to fetch all the alerts that the user has created. - The response should also include the status of the alerts 
(created/deleted/triggered/.. or any other status you feel needs to be included) - Paginate the response. 
- Include filter options based on the status of the alerts. Eg: if the user wanted only the alerts that were triggered, then the endpoint should provide just that) 
- Add user authentication to the endpoints. Use JWT tokens. 
- There is no need to add tests. 
- Write a script that monitors the price of the cryptocurrency 
- You can use this endpoint to fetch the latest price of the cryptocurrency: https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_d esc&per_page=100&page=1&sparkline=false 
- When the price of the coin reaches the price specified by the users, send an email to all the users that set the alert at that price. (send mail using Gmail SMTP, SendGrid, etc) - You should set up a background worker(eg: celery/python-script/go-script) to send the email. Use Rabbit MQ/Redis as a message broker.) 

### Steps to run this repository:
1. Clone this Repository
2. Select the Directory and copy the path
3. Open Command Prompt and paste the path 
        `cd/path-of-your-directory`
4. Write the command
       `npm start`
 Runs the app in the development mode.\
 Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 The page will reload if you make edits.\
 You will also see any lint errors in the console itself.

Hurray your app is ready!

### Demo:
![Demo1](https://user-images.githubusercontent.com/53315283/132913232-a0b2d313-7078-4c35-a6de-9c307ed80506.PNG)


![Demo2](https://user-images.githubusercontent.com/53315283/132913243-041af4f0-a466-44c1-b9d1-386923e5be12.PNG)


![Demo3](https://user-images.githubusercontent.com/53315283/132914448-4c4ab77e-9925-41f1-8034-a5b55b8f9522.PNG)


![Demo4](https://user-images.githubusercontent.com/53315283/132914462-292b7aad-b4ad-438f-82f6-6d8b44d60e8a.PNG)


![Demo5](https://user-images.githubusercontent.com/53315283/132913261-56bcc8ef-dcee-4c89-854a-fb546168203a.PNG)
