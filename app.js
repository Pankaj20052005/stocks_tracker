document.getElementById("getPrice").addEventListener("click", fetchStockPrice);

async function fetchStockPrice() {
    const stockSymbol = document.getElementById("stockSymbol").value.toUpperCase();
    const apiKey = '8T93P0GMFD5QBUUTYOUR_API_KEY'; 
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data["Global Quote"]) {
            const stockData = data["Global Quote"];
            document.getElementById("companyName").textContent = `Company: ${stockSymbol}`;
            document.getElementById("stockPrice").textContent = `Price: ₹${parseFloat(stockData["05. price"]).toFixed(2)}`;
            document.getElementById("stockChange").textContent = `Change: ₹${parseFloat(stockData["09. change"]).toFixed(2)}`;
        } else {
            document.getElementById("companyName").textContent = `Company: Not Found`;
            document.getElementById("stockPrice").textContent = `Price: N/A`;
            document.getElementById("stockChange").textContent = `Change: N/A`;
        }
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}
