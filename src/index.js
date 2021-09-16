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
    conDiv.appendChild(home.homeCreater());
};


function menuCre(){
    let conDiv = document.getElementById('elements');
    conDiv.innerHTML = '';
    conDiv.appendChild(menu.menuCreater());
}

function contactCre() {
    let conDiv = document.getElementById('elements');
    conDiv.innerHTML = '';
    conDiv.appendChild(contact.contactCreater());

}
