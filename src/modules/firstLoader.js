

function initCreator(){
    let eleNavbar = document.createElement('div');
    let nav1 = document.createElement('a');
    let nav2 = document.createElement('a');
    let nav3 = document.createElement('a');

    let text1 = document.createTextNode("Home");
    let text2 = document.createTextNode("Menu");
    let text3 = document.createTextNode("Contact");

    nav1.href = "#home";
    nav2.href = "#menu";
    nav3.href = "#contact";

    nav1.id = "home";
    nav2.id = "menu";
    nav3.id = "contact";


    console.log();  

    nav1.classList.add('active');

    nav1.appendChild(text1);
    nav2.appendChild(text2);
    nav3.appendChild(text3);

    eleNavbar.classList.add("topnav");

    eleNavbar.appendChild(nav1);
    eleNavbar.appendChild(nav2);
    eleNavbar.appendChild(nav3);

    return eleNavbar;
}

export {
    initCreator,

};