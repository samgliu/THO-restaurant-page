function headCreator(headSize, text) {
    let eleHome = document.createElement('div');
    let head1 = document.createElement(headSize);
    head1.textContent = text;
    eleHome.appendChild(head1);
    return eleHome;
}

function bodyCreator(text) {
    let eleBody = document.createElement('div');
    let p1 = document.createElement('p');
    p1.textContent = text;
    eleBody.appendChild(p1);
    return eleBody;
}

function contactCreater() {
    let ele = document.createElement('div');
    ele.style.textAlign = "left";
    ele.appendChild(headCreator('h1', 'Contact Us'));
    ele.appendChild(headCreator('h2', 'John Doe'));
    ele.appendChild(headCreator('h4', 'Title: CEO'));
    ele.appendChild(headCreator('h4', 'Cell: 123-456-7890'));
    ele.appendChild(headCreator('h4', 'Email:JohnDoe@earth.galaxy'));
    return ele;
}

export {
    headCreator,
    bodyCreator,
    contactCreater,
};