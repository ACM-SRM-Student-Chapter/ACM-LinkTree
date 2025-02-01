import linksData from './data.js';
function linksComponentGeneration (){

    const links = document.getElementById("links");
    const social = document.getElementById("social");

    linksData.forEach(item => {

        const link = document.createElement("a");
        link.href = item.link;
        link.innerHTML = `<span>${item.icon} ${item.text}</span>`;
        link.classList.add('link');
        if (item.category == "social"){
            social.appendChild(link); // social is the div for social links
        }
        else{
            links.appendChild(link); // links is the mina div that has all the links
        }
    });

}

window.onload = linksComponentGeneration;