const apiKey = 'agNnKSb35I4s1OsMICe1mZ5szK3F_9BP';
const symbol = 'X:BTCUSD'; // Replace with the desired ticker symbol
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const day = String(today.getDate()).padStart(2, '0');
const startDate = `${year}-${month}-${day-1}`;
const endDate = `${year}-${month}-${day}`;
let marketTrend; 


// Make a request to the Polygon.io API for the specified date range
fetch(`https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${startDate}/${endDate}?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Check if the data is available and contains the required fields
        if (data.results && data.results.length > 0 && data.results[0].c) {
            // Extract the closing prices or other relevant data
            const closingPrices = data.results.map(result => result.c);

            // Perform your analysis based on the retrieved data
            console.log('Closing Prices:', closingPrices);
        } else {
            throw new Error('Unable to retrieve data');
        }
    })
    .catch(error => console.error('Error fetching data:', error));


    function checkBullBear(startDate, endDate) {
        const startDateTime = new Date(startDate).getTime();
        const endDateTime = new Date(endDate).getTime();

        if (endDateTime > startDateTime) {
            return 'bull';
        } else {
            return 'bear';
        }

    }

   function message() {
        const messageContainer = document.getElementById('message');
        const messageElement = document.createElement('h4');
        let message; 

        if (marketTrend === 'bear') {
            message = 'Market Blood Bath';
        } else {
            message = "Bull Market"
        } 
        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);
    };


    window.addEventListener('DOMContentLoaded', function() {
        marketTrend = checkBullBear(startDate, endDate);
        message(); 
    });
    