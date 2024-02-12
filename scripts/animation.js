function bear() {

function createDrop(className, speedMultiplier) {
    const drop = document.createElement('div');
    drop.className = className;
    document.getElementById('container-effects').appendChild(drop);

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Set initial position randomly within the window for both drop-1 and drop-2
    drop.style.left = `${Math.random() * windowWidth}px`;
    drop.style.top = `${Math.random() * windowHeight}px`;

    // Set random size for a more natural appearance
    const size = Math.random() * 10 + 5; // Adjust the range as needed
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;

    // Set random animation duration
    //const duration = 10;
    const duration = (Math.random() * 3 + 2) * (5 / size) * speedMultiplier;

    // Set random angle for diagonal movement
    const angle = Math.random() * 360;

    // Apply random animation
    drop.style.animation = `rise ${duration}s infinite`; 

    // Adjust opacity for a glowing effect
    drop.style.opacity = Math.random() * 0.7 + 0.3; // Adjust the range as needed

    // Set warm colors for a fire-like appearance
    drop.style.backgroundColor = `rgba(255, ${Math.floor(Math.random() * 50)}, 0, 1)`;
    drop.style.transform = `rotate(${angle}deg)`;
}


// Function to create multiple drops
function createDrops(count) {
    const dropsContainer = document.getElementById('container-effects');
    for (let i = 0; i < count; i++) {
        createDrop('drop-1', 1); 
        //createDrop('drop-2', 2); 
    }
}

// Function to animate drops using requestAnimationFrame
function animateDrops() {
    createDrops(1);
    requestAnimationFrame(animateDrops);
}

//Background Rain 
function rain() {
    const container = document.querySelector('.rain');

    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animation = `fall ${0.6 + Math.random() * 0.6}s linear infinite`;
        container.appendChild(drop);
    }
}

// Initial call to start the animation
animateDrops();
rain();
};




