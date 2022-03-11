const container = document.querySelector('#container');

function createGrid(nbox) {
    for (let i=0; i<(nbox*nbox); i++) {
    const pix = document.createElement('div');
    pix.setAttribute('id',i);
    pix.setAttribute('class', 'pixel')
    container.appendChild(pix)
    }

}

function init() {
    createGrid(16);
}

function play() {
    const div = document.querySelectorAll('.pixel')

    div.forEach((pixel) => {
        // and for each one we add a 'click' listener
        pixel.addEventListener('mouseenter', () => {
            let randR = Math.floor(Math.random() * 255);
            let randG= Math.floor(Math.random() * 255);
            let randB = Math.floor(Math.random() * 255);

            pixel.style.backgroundColor = "rgb("+randR+","+randG+","+randB+")";

        });
    });
}

init();
play();

const button = document.querySelector('#Reset')

button.addEventListener('click', () => {
    const div1 = document.querySelectorAll('.pixel')
    div1.forEach((pixel) => {
        pixel.style.backgroundColor = "";
    });
    let newgrid = prompt("Please enter how many n boxes (nxn):", "100")
    createGrid(newgrid);
    play()
});
