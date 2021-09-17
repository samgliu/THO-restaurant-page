import * as firstLoader from './modules/firstLoader';
import * as home from './modules/home';
import * as menu from './modules/menu';
import * as contact from './modules/contact';

loader();

function loader() {
    let conDiv = document.getElementById('content');
    conDiv.innerHTML = '';
    conDiv.appendChild(firstLoader.initCreator());
    document.getElementById('home').addEventListener("click", function () { loader(); }, false);
    document.getElementById('menu').addEventListener("click", function () {menuCre();} ,false);
    document.getElementById('contact').addEventListener("click", function () { contactCre(); }, false);
    changeSelect("home");
    conDiv.appendChild(home.homeCreater());
};


function menuCre(){
    changeSelect("menu");
    let conDiv = document.getElementById('elements');
    conDiv.innerHTML = '';
    conDiv.appendChild(menu.menuCreater());
}

function contactCre() {
    changeSelect("contact");
    let conDiv = document.getElementById('elements');
    conDiv.innerHTML = '';
    conDiv.appendChild(contact.contactCreater());

}

function changeSelect(theId){
    if (theId == "home"){
        let nav1 = document.getElementById('home');
        let nav2 = document.getElementById('menu');
        let nav3 = document.getElementById('contact');

        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');
    } else if(theId == "menu"){
        let nav1 = document.getElementById('home');
        let nav2 = document.getElementById('menu');
        let nav3 = document.getElementById('contact');

        nav1.classList.remove('active');
        nav3.classList.remove('active');
        nav2.classList.add('active');
    }else {
        let nav1 = document.getElementById('home');
        let nav2 = document.getElementById('menu');
        let nav3 = document.getElementById('contact');

        nav1.classList.remove('active');
        nav2.classList.remove('active');
        nav3.classList.add('active');
    }
    
}
