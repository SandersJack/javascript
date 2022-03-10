const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'HELLOOOOO WORRRLLLDDD'

container.appendChild(content)


const para = document.createElement('p');
para.classList.add('para');
para.style.color = 'red';
para.textContent = "HEY IM RED"

container.appendChild(para)

const head = document.createElement('h3');
head.classList.add('head');
head.style.color = 'blue';
head.textContent = "HEY IM Blue h3"

container.appendChild(head)

const black = document.createElement('div');
black.classList.add('black');
black.style.backgroundColor = 'pink'
black.style.borderStyle = 'Solid'
black.style.borderColor = 'black'

container.appendChild(black)

const head1 = document.createElement('h1');
head1.classList.add('head1');
head1.textContent = "HEY IM IN A DIV"

black.appendChild(head1)

const paradiv = document.createElement('p');
paradiv.classList.add('paradiv');
paradiv.textContent = "MEE TOOOO"

black.appendChild(paradiv)


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
