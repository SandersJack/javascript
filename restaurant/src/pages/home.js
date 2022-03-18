import '../style.css';

const home =  function() {
    const container = document.querySelector('#container');
    const welcome = document.createElement('div');
    //pix.setAttribute('id','');
    welcome.setAttribute('id', 'home')
    welcome.textContent = 'Welcome to my Website'

    container.appendChild(welcome)

}

export default home;