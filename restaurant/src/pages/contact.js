import '../style.css';

const contact =  function() {
    const container = document.querySelector('#container');
    const menu = document.createElement('div');
    //pix.setAttribute('id','');
    menu.setAttribute('id', 'contact')
    menu.textContent = 'Time for a Contact'

    container.appendChild(menu)

}

export default contact;