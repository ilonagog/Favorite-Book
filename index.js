document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.querySelector("#new-book-btn")
    // const bookForm = document.querySelector(".container")
    //  let book;
    const addBookForm = document.querySelector('.add-book-form')
    const div = document.getElementById("books-collection")
    //  let books;

    addBookForm.addEventListener('submit', createBook)
    //create a new favorite book
    // send POST request , 



    // document.getElementById("book-header").addEventListener('click', getBooks)
    // send fetch request , get all books,and return them on the card 
    //create card 
    function renderBook(book) {
        let card = document.createElement('li')
        card.className = 'card'
        card.innerHTML = `
        <ul class="card">
        <h2>${book.name}</h2> 
        <p> ${book.author}</p>
        <img src=${book.image} class="book-card" />
       <p>${book.likes} Likes </p>
        <button data-id="${book.id}"class="Like-btn">Like ❤️ </button>
        </ul>  
        `
        // add animal card to DOM
        div.appendChild(card)
    }



    function addBook(bookObj) {
        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookObj)
        })
            .then(resp => resp.json())
            .then(book => console.log(book))
    }

    //Initial render
    function initialize() {
        getAllBooks()
    }
    initialize()

    // make more likes on each book 
    // update likes by adding every additional like th euser will make 
    addEventListener('click', (e) => {
        if (e.target.className === "Like-btn") {
            let currentLike =
                parseInt(e.target.previousElementSibling.innerText)
            let newLikes = currentLike + 1
            e.target.previousElementSibling.innerText = newLikes + "Likes"
            const url = `http://localhost:3000/books/${e.target.dataset.id}`
            // use PATCH request to make an update for new likes 
            fetch(url, {
                method: "PATCH",
                headers: {
                    'Content-Type': "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    Like: newLikes
                })
            })
        }
    })


    //add a  click event listener to the 'new-book-btn'
    // each time the button is clicked if the form element is hidden, 
    //show it , otherwise hide the for again 
    // const addBtn = document.querySelector("#new-book-btn")
    addBtn.addEventListener('click', () => {
        // const addBookForm = document.querySelector('.add-book-form');
        if (addBookForm.style.display === '' || addBookForm.style.display === 'none') {
            addBookForm.style.display = 'block';
        } else {
            addBookForm.style.display = 'none';
        }
    });

})


/*
document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.querySelector("#new-book-btn")
    const bookForm = document.querySelector(".container")
    //let addBook = false

    const addBookForm = document.querySelector('.add-book-form')
    const ul = document.getElementById("books-collection")

    //document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("book-header").addEventListener('click', getBooks)
    // send fetch request , get all books,and return them on the card 
    //create card 
    function getBooks() {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(books => {
                let booksHTML = books.map(function (book) {
                    return `
                <ul class="card">
                 <h2>${book.name}</h2> 
                 <p> ${book.author}</p>
                 <img src=${book.image} class="book-card" />
                 <p>${book.likes} Likes </p>
                 <button data-id="${book.id}"class="Like-btn">Like ❤️ </button>
                </ul>  
                `
                })
                // console.log(booksHTML);
                document.querySelector("#books-collection").innerHTML = booksHTML.join('')
            })
    }

    addBookForm.addEventListener('submit', createBook)
    //create a new favorite book
    // send POST request , 
    //
    function createBook(e) {
        e.preventDefault()
        //  console.log(e.target.name)
        const bookName = e.target.name.value
        //  const bookAuthor = e.target.author.value
        const bookImage = e.target.image.value

        fetch("http://localhost:3000/books", {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "name": "The Essential RUMI",
                "author": "Coleman Barks",
                "image": "https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780062046659_106a2888-c25e-4122-b125-6fb573f57076_424x.jpg?v=1667491936",
                "likes": 92
            })
        })
            .then(response => response.json())
            .then(newBook => {
                let newBookHTML = `
                <div class="card">
                <h2>${newBook.name}</h2>
                <p> ${newBook.author}</p>
                 <img src=${newBook.image} class="book-card" />
                 <p>${newBook.likes} Likes </p>
                 <button data-id="${newBook.id}"class="Like-btn">Like ❤️ </button>
                 </div>
                       `
            })
        // console.log(newBookHTML);
        debugger
        document.querySelector("#book-collection").innerHTML += newBookHTML
        // console.log(e.target.removeEventListener())
    }

    // make more likes on each book 
    // update likes by adding every additional like th euser will make 
    addEventListener('click', (e) => {
        if (e.target.className === "Like-btn") {
            let currentLike =
                parseInt(e.target.previousElementSibling.innerText)
            let newLikes = currentLike + 1
            e.target.previousElementSibling.innerText = newLikes + "Likes"
            const url = `http://localhost:3000/books/${e.target.dataset.id}`
            // use PATCH request to make an update for new likes 
            fetch(url, {
                method: "PATCH",
                headers: {
                    'Content-Type': "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    Like: newLikes
                })
            })
        }
    })



    //add a  click event listener to the 'new-book-btn'
    // each time the button is clicked if the form element is hidden, 
    //show it , otherwise hide the for again 
    // const addBtn = document.querySelector("#new-book-btn")
    addBtn.addEventListener('click', () => {

        // const addBookForm = document.querySelector('.add-book-form');
        if (addBookForm.style.display === '' || addBookForm.style.display === 'none') {
            addBookForm.style.display = 'block';
        } else {
            addBookForm.style.display = 'none';
        }
    });
    getBooks()
})
*/
