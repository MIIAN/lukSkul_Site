//Rain Use During Bear Markets 

function createRain() {
    const container = document.querySelector('.rain');

    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animation = `fall ${0.6 + Math.random() * 0.6}s linear infinite`;
        container.appendChild(drop);
    }
}

createRain();