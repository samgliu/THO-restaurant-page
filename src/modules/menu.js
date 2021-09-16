function headCreator(headSize, text) {
    let eleHome = document.createElement('div');
    let head1 = document.createElement(headSize);
    head1.textContent = text;
    eleHome.appendChild(head1);
    return eleHome;
}

function listCreater(text, path){
    let ele = document.createElement('div');
    let head1 = document.createElement("h3");
    head1.textContent = text;
    ele.style.textAlign = "left";
    ele.appendChild(head1);
    let img1 = document.createElement("img");
    img1.src = path;
    ele.appendChild(img1);
    return ele;
}

function menuCreater() {
    let ele = document.createElement('div');
    ele.appendChild(headCreator('h1', 'Fruit Menu'));
    ele.appendChild(listCreater('Apple', './images/apple.jpg'));
    ele.appendChild(listCreater('Banana', './images/banana.jpg'));
    ele.appendChild(listCreater('Grapes', './images/grapes.jpg'));
    return ele;
}

export {
    headCreator,
    listCreater,
    menuCreater,
};