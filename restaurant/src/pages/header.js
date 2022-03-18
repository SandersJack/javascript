const header = function() {
    const container = document.querySelector('#header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'Emily\'s Cafe'
    container.appendChild(logo)

    const navbar = document.createElement('div');
    //pix.setAttribute('id','');
    navbar.setAttribute('id', 'navbar')
    container.appendChild(navbar)

    const home = document.createElement('div');
    home.setAttribute('id','home');
    home.setAttribute('class', 'nav');
    home.textContent = 'Home'
    navbar.appendChild(home);

    const info = document.createElement('div');
    info.setAttribute('id','menu');
    info.setAttribute('class', 'nav');
    info.textContent = 'Menu'
    navbar.appendChild(info);

    const contact = document.createElement('div');
    contact.setAttribute('id','contact');
    contact.setAttribute('class', 'nav');
    contact.textContent = 'Contact'
    navbar.appendChild(contact);

}

export default header;