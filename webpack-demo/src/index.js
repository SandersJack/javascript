import myName from './myName';
import './style.css';
import Cat from './cat.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';


function component() {
    const elem = document.createElement('div');
    const btn = document.createElement('button');

    elem.textContent = myName('Cody');

    elem.classList.add('hello');

    const myCat = new Image();
    myCat.src = Cat;

    elem.appendChild(myCat);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    elem.appendChild(btn)

    console.log(Data);
    console.log(Notes);

    return elem;
}

document.body.appendChild(component());