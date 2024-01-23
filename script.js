// Use the yfinance library to fetch gold market data
fetchGoldData();

function fetchGoldData() {
    const script = document.createElement('script');
    script.src = 'https://query1.finance.yahoo.com/v8/finance/chart/GC=F?period1=0&period2=9999999999&interval=1d&callback=handleGoldData';
    document.body.appendChild(script);
}

function handleGoldData(data) {
    try {
        if (!data || !data.chart || !data.chart.result || data.chart.result.length === 0) {
            throw new Error('Invalid response format');
        }

        const goldPrice = data.chart.result[0].indicators.quote[0].close[0];
        displayGoldPrice(goldPrice);
    } catch (error) {
        console.error('Error handling gold data:', error);
        displayGoldPrice('Error fetching data');
    }
}

function displayGoldPrice(price) {
    document.getElementById('goldPrice').innerText = `Gold Price: $${price !== undefined ? price : 'N/A'}`;
}

