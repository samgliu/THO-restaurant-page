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

function homeCreater() {
    let ele = document.createElement('div');
    ele.id = "elements";
    ele.appendChild(headCreator('h1', 'Earth\'s Fruit Garden'));
    ele.appendChild(bodyCreator('Earth\'s Fruit Garden has the best fruits in the Universe. Our guests are come from other planets far away from Earth.'));
    ele.appendChild(headCreator('h2', 'Hours'));
    ele.appendChild(bodyCreator('Everyday: 9am - 6pm PST'));
    ele.appendChild(headCreator('h2', 'Location'));
    ele.appendChild(bodyCreator('Sydney Observatory, 1003 Upper Fort St, Millers Point, Sydney, NSW, Australia, Earth, The Solar System, Orion Arm, The Milky Way, Local Group, Virgo Cluster, Virgo Super-Cluster, Universe'));
    return ele;
}

export {
    headCreator,
    bodyCreator,
    homeCreater,
};