document.getElementById("work"); 

var height = "30px"; 
var width = "30px";  

var gitHubLink = new Image();
gitHubLink.src = './image/github.png';

gitHubLink.setAttribute("height", height); 
gitHubLink.setAttribute("width", width); 
gitHubLink.className = "githubIcon";   

gitHubLink.onclick = function() {
    window.location.href = 'https://github.com/MIIAN/lukSkul_Site';
};

work.appendChild(gitHubLink); 




