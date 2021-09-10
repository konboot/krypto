# Krypto
Application - Krypto

Create a price alert application that triggers an email when the user’s target price is achieved. 
Say, the current price of BTC is 28,000$, a user sets an alert for BTC at a price of 33,000$. The application should send an email to the user when the price of BTC reaches 33,000$. 
Similarly, say, the currency price of BTC is 35,000$, a user sets an alert for BTC at a price of 33,000$. The application should send an email when the price of BTC reaches 33,000$. 

Things to do for the assignment 
- Create a rest API endpoint for the user’s to create an alert `alerts/create/` - Create a rest API endpoint for the user’s to delete an alert `alerts/delete/` - Create a rest API endpoint to fetch all the alerts that the user has created. - The response should also include the status of the alerts 
(created/deleted/triggered/.. or any other status you feel needs to be included) - Paginate the response. 
- Include filter options based on the status of the alerts. Eg: if the user wanted only the alerts that were triggered, then the endpoint should provide just that) 
- Add user authentication to the endpoints. Use JWT tokens. 
- There is no need to add tests. 
- Write a script that monitors the price of the cryptocurrency 
- You can use this endpoint to fetch the latest price of the cryptocurrency: https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_d esc&per_page=100&page=1&sparkline=false 
- When the price of the coin reaches the price specified by the users, send an email to all the users that set the alert at that price. (send mail using Gmail SMTP, SendGrid, etc) - You should set up a background worker(eg: celery/python-script/go-script) to send the email. Use Rabbit MQ/Redis as a message broker.) 


![Demo1](https://user-images.githubusercontent.com/53315283/132889451-eb27bbb6-271e-4cd7-a460-1518c90996ad.PNG)
