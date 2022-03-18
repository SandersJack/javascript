import '../style.css';

const menu =  function() {
    const container = document.querySelector('#container');
    const menu = document.createElement('div');
    //pix.setAttribute('id','');
    menu.setAttribute('id', 'menu')
    menu.textContent = 'Time for a Menu'

    container.appendChild(menu)

}

export default menu;