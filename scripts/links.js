document.getElementById("work"); 

var height = "30px"; 
var width = "30px";  

var gitHubLink = new Image();
gitHubLink.src = './image/github.png';

gitHubLink.setAttribute("height", height); 
gitHubLink.setAttribute("width", width); 
gitHubLink.className = "githubIcon";   

gitHubLink.onclick = function() {
    window.location.href = 'https://github.com/MIIAN/lukSkul_Website';
};

work.appendChild(gitHubLink); 


// Rain


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


