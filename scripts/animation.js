const apiKey = 'agNnKSb35I4s1OsMICe1mZ5szK3F_9BP'; // These are free!! https://polygon.io
const symbol = 'X:BTCUSD'; 
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); 
const day = String(today.getDate()).padStart(2, '0');
const startDate = `${year}-${month}-${day-1}`;
const endDate = `${year}-${month}-${day}`;
let marketTrend; 

function checkMarket(startDate, endDate) {
    const startDateTime = new Date(startDate).getTime();
    const endDateTime = new Date(endDate).getTime();

    if (endDateTime > startDateTime) {
        marketTrend = 'bull';
    } else {
        marketTrend = 'bear';
    } 
    return marketTrend; 
} 

function message() {
    const messageContainer = document.getElementById('message');
    const messageElement = document.createElement('h4');
    let message; 

    if (marketTrend === 'bear') {
        message = 'Market Blood Bath';
        bear(); 
    } else {
        message = "Rise From the Ashes"
        bull()
    } 
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
};

function bear() {
    function createDrop(className, speedMultiplier, opacity, duration) {
        const drop = document.createElement('div');
        drop.className = className;
        document.getElementById('drops').appendChild(drop);
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        drop.style.left = `${Math.random() * windowWidth}px`;
        drop.style.top = `${Math.random() * windowHeight}px`;
        const size = Math.random() * 10 + 5;
        drop.style.width = `${size}px`;
        drop.style.height = `${size}px`;
        const speed = Math.random() * speedMultiplier;
        const angle = Math.random() * 360;
        drop.style.animation = `dropFall ${speed}s ${duration}`; 
        drop.style.opacity = Math.random() * 0.7 + 0.3;
        drop.style.backgroundColor = `rgba(255, ${Math.floor(Math.random() * 50)}, 0, ${opacity})`;
        drop.style.transform = `rotate(${angle}deg)`;
    }
    function createDrops(count) {
        const dropsContainer = document.getElementById('container-effects');
        for (let i = 0; i < count; i++) {
            createDrop('drop-1', .5, 1, '.01'); 
            createDrop('drop-2', 50, .4, '5'); 
        }
    }
    function animateDrops() {
        createDrops(1);
        setTimeout(() => {
            requestAnimationFrame(animateDrops);
        }, 1000);
    } 
    animateDrops(); 
};

function bull() {
    function createAmber(className, speedMultiplier, movement) {
        const amber = document.createElement('div');
        amber.className = className;
        document.getElementById('ambers').appendChild(amber);

        const windowHeight = window.innerHeight;

    if (className === 'amber-2') {
        amber.style.left =`${Math.random() * windowHeight}px`; 
        amber.style.bottom = '0px'; 
    } else {
        amber.style.left = '0px'; 
        amber.style.bottom = `${Math.random() * windowHeight/2}px`;
    }
    
        const size = Math.random() * 10 + 5; 
        amber.style.width = `${size}px`;
        amber.style.height = `${size}px`;
    
        const duration = (Math.random() * 3 + 2) * (5 / size) * speedMultiplier;
        amber.style.animation = `${movement} ${duration}s linear infinite`;

        const angle = Math.random() * 360;
    
        amber.style.animation = `${movement} ${duration}s infinite`; 
    
    amber.style.opacity = Math.random() * 0.7 + 0.3; 

    const greenHue = Math.floor(Math.random() * 50); 
    amber.style.backgroundColor = `rgb(255, 0, 0)`;

    amber.style.backgroundColor = `rgb(255, 165, 0)`;
    amber.style.transform = `rotate(${angle}deg)`;

    const timingFunction = movement === 'drift-up' ? 'ease-in' : 'linear';
    amber.style.animation = `${movement} ${duration}s ${timingFunction} infinite`;
    }
    function createAmbers(count) {
        const amberContainer = document.getElementById('container-effects');
        for (let i = 0; i < count; i++) {
            createAmber('amber-1', 2.5, 'drift'); 
            createAmber('amber-2', 2, 'drift-up'); 
            createAmber('amber-3', 3, 'drift-up'); 
        }
    }
    function animateAmbers() {
        createAmbers(2)
        setTimeout(() => {
            requestAnimationFrame(animateAmbers);
        }, 100000);
    }   
    animateAmbers();
};

window.addEventListener('DOMContentLoaded', function() {
    fetch(`https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/${startDate}/${endDate}?apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0 && data.results[0].c) {
                const closingPrices = data.results.map(result => result.c);
                checkMarket(startDate, endDate);
                message(); 
                console.log(marketTrend); 
            } else {
                throw new Error('Unable to retrieve data');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});