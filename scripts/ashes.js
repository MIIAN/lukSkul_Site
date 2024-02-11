// Wrap your code in the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Ashes Use During Bull Markets
    // Function to create ember elements
    function createEmber() {
        const ember = document.createElement('div');
        ember.className = 'ember';
        document.getElementById('embers-container').appendChild(ember);

        // Set initial position at the lower left corner
        ember.style.left = '0px';
        ember.style.top = `${Math.random() * window.innerHeight}px`;

        // Set random animation duration (slightly faster for larger embers)
        const duration = (Math.random() * 3 + 2) * (5 / ember.clientWidth); // Adjust speed based on size

        // Set random angle for diagonal movement
        const angle = Math.random() * 360; 

        // Apply animation
        ember.style.animation = `drift ${duration}s linear infinite`;
        ember.style.transform = `rotate(${angle}deg)`;
    }

    // Function to create multiple embers
    function createEmbers(count) {
        for (let i = 0; i < count; i++) {
            createEmber();
        }
    }

    // Initialize with 200 embers after the page is fully loaded
    createEmbers(200);
});
