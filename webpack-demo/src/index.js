import myName from './myName';
import './style.css';
import Cat from './cat.png';

function component() {
    const elem = document.createElement('div');

    elem.textContent = myName('Cody');

    elem.classList.add('hello');

    const myCat = new Image();
    myCat.src = Cat;

    elem.appendChild(myCat);

    return elem;
}

document.body.appendChild(component());