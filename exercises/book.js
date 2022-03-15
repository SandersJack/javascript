let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.shop = "WHSmith"
    if (read) {
        this.read = "Has been read";
    } else {
        this.read = "Not been read"
    }
    
    this.info = function() {
        return title + " by " + author + ", " + pages.toString() + " pages" + ", " +  this.read;
    }
}

function addBook() {
    let result = prompt("Add a new book:", "Title,Author,pages,Has/Not been read");
    let results = result.split(",");
    console.log(results);
    const newBook = new Book(results[0],results[1],results[2],results[3]);
    myLibrary.push(newBook);
    let gbook = myLibrary[1]
}

const hobbit = new Book("The Hobbit","J.R.R Tolkien", 295, false);
console.log(hobbit.info())
myLibrary.push(hobbit)

const hobbit2 = new Book("The Hobbit 2","J.R.R Tolkien", 295, false);
console.log(hobbit2.info())
myLibrary.push(hobbit2)


const container = document.querySelector('#container');
let prev_i = 0;

function createTable(init,rows) {
    const text = ["Functions","Title", "Author", "Pages", "Has it Been Read?"];
    if (init) {
        for (let i=0; i<5; i++) {
            const pix = document.createElement('div');
            pix.setAttribute('id',text[i]);
            pix.setAttribute('class', 'tableTitle')
            pix.textContent = text[i];
            container.appendChild(pix)
            }
        for (let i=0; i<(rows*5); i++) {
            const pix = document.createElement('div');
            pix.setAttribute('id',i);
            pix.setAttribute('class', 'table')
            container.appendChild(pix)

            if (i%5 == 0) {
                const pixel = document.getElementById((i).toString());
                const del = document.createElement('button');
                del.setAttribute('id',Math.floor(i/5));
                del.setAttribute('class', 'delete')
                del.textContent = "Delete"
                pixel.appendChild(del)
            }
            }
    } else {
        for (let i=prev_i; i<(rows*5); i++) {
            const pix = document.createElement('div');
            pix.setAttribute('id',i);
            pix.setAttribute('class', 'table')
            container.appendChild(pix)
            
            if (i%5 == 0) {
                const pixel = document.getElementById((i).toString());
                const del = document.createElement('button');
                del.setAttribute('id',Math.floor(i/5));
                del.setAttribute('class', 'delete')
                del.textContent = "Delete"
                pixel.appendChild(del)
            }
        }
    }
    prev_i = (rows*5);
}


function updateTable() {

    for (let t=0; t<myLibrary.length; t++) {
        let nbook = myLibrary[t];
        let ids = [5*t+1,5*t+2,5*t+3,5*t+4];

        for( let q=0; q<ids.length; q++) {
            const divt = document.getElementById(ids[q].toString());
            if (q==0) {
                divt.textContent = nbook.title;
            } else if (q==1) {
                divt.textContent = nbook.author;
            } else if (q==2) {
                divt.textContent = nbook.pages;
            } else if (q==3) {
                divt.textContent = nbook.read;
            }
            
        }
        
    }
}

function removeRow(row) {
    for (let o = row*5; o<(row*5+5); o++) {
        const ddiv = document.getElementById((o));
        ddiv.parentNode.removeChild(ddiv)
    }
}

createTable(true,myLibrary.length);
updateTable();
updateListen();

const button = document.querySelector('#newBook');

button.addEventListener('click', () => {
    addBook();
    createTable(false,myLibrary.length);
    updateTable();
    updateListen();
});

function clickdel(id) {
    if (myLibrary.length == 1) {
        myLibrary.pop();
    }
    myLibrary.splice(id,1);
    console.log(myLibrary)
    removeRow(id);
    prev_i = 0;
}

function updateListen() {
    var delet = document.querySelectorAll('.delete');
    delet.forEach((button) => {
        button.addEventListener('click', () => {
            let id = button.id;
            clickdel(id)
        });

    });
}