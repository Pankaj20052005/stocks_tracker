📈 Real-Time Stock Price Tracker

A simple and responsive web application that allows users to fetch real-time stock prices by entering a stock symbol.
The application retrieves live market data using the Alpha Vantage API and displays the stock price and price change instantly.

This project demonstrates API integration, asynchronous JavaScript, and modern responsive UI design.

🚀 Features

✅ Fetch real-time stock price using stock symbol
✅ Displays company symbol, current price, and price change
✅ Uses Alpha Vantage API for live market data
✅ Clean and modern UI with animated glassmorphism design
✅ Fully responsive interface
✅ Error handling for invalid symbols or API failures

🛠 Tech Stack
Frontend

HTML5

CSS3

JavaScript (ES6)

API

Alpha Vantage Stock Market API

Design

Google Fonts (Montserrat)

Glassmorphism UI

Responsive layout
⚙️ How It Works

1️⃣ User enters a stock symbol (example: AAPL, TSLA, RELIANCE.BSE)

2️⃣ When the Get Price button is clicked, JavaScript triggers a request to the Alpha Vantage API.

3️⃣ The application sends a request like:

https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=STOCK_SYMBOL&apikey=API_KEY


4️⃣ The API returns stock data including:

Current price

Price change

Stock symbol

5️⃣ The data is displayed dynamically on the page without refreshing.

🔑 API Configuration

This project uses the Alpha Vantage API.

To use your own API key:

Go to
https://www.alphavantage.co/support/#api-key

Get a free API key.

Replace the key inside app.js:

const apiKey = 'YOUR_API_KEY';

🌟 Future Improvements

Possible improvements for this project:

Add stock price charts

Display company information

Show historical data

Add multiple stock comparison

Add loading animations

Add error messages for invalid inputs

🎯 Learning Outcomes

Through this project I learned:

How to work with REST APIs

Handling asynchronous JavaScript (async/await)

DOM manipulation

Fetching and processing JSON data

Creating responsive UI with CSS

👨‍💻 Author

Pankaj Shinde

LinkedIn
https://www.linkedin.com/in/pankaj-shinde-b313a52a4

GitHub
https://github.com/Pankaj20052005

⭐ If you like this project, consider starring the repository.
