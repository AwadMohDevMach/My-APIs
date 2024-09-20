// https://api.github.com/users/elzerowebschool/repos" 

// main variables
let theIput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");



getButton.onclick = function(){
    getRepos()
}
// get repos function 
function getRepos(){
    if(theIput.value == ""){// if value is empty
        reposData.innerHTML = "<span>plees write github username </span>"
    }else{
    fetch(`https://api.github.com/users/${theIput.value}/repos`)
    .then((response) => response.json())

    .then((reposstries ) =>{
    //empty the container 
    reposData.innerHTML = '';
    reposstries.forEach(repo => {
        // ceater the main div element 
        let mainDiv = document.createElement("div")

        // craete repo name text 
        let textDiv = document.createTextNode(repo.name)

        // append the text to main div 
        mainDiv.appendChild(textDiv)

        // create repo url
        let theUre = document.createElement("a");

        // craete repo url text
        let theurelText = document.createTextNode('visit');

        // append the repo url text 
        theUre.appendChild(theurelText)

        // add the hypertext refernce "href"
        theUre.href =`https://github.com/${theIput.value}/${repo.name}`;

        // set attribute blank
        theUre.setAttribute('target' , '_blank');

        // append url to main div 
        mainDiv.appendChild(theUre)

        // create the repo stars count elemnt 
        let starsSpan = document.createElement("span");

        // create the repo text stras count  
        let sarsText = document.createTextNode(`stars ${repo.stargazers_count}`)

        // append repo text to stars count 
        starsSpan.appendChild(sarsText)

        // append repo stras count to main div
        mainDiv.appendChild(starsSpan)

        // add class on main div
        mainDiv.className = "repo-box";

        // append the main div to conrainer
        reposData.appendChild(mainDiv)
    })
    });
    }
}