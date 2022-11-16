
document.addEventListener("DOMContentLoaded", () => {

    const fetchUrl = "http://localhost:3000/books"
    const addBtn = document.querySelector("#new-book-btn")
    const addBookForm = document.querySelector('.add-book-form')
    const div = document.getElementById("books-collection")
    addBookForm.addEventListener('submit', createNewBook)
    //create a new favorite book
    function createNewBook(e) {
        e.preventDefault()
        let bookObj = {
            name: e.target.name.value,
            author: e.target.author.value,
            image: e.target.image.value,
            likes: e.target.likes.value
        }
        if (e.target.name.value === "" || e.target.author.value === "" || e.target.image.value === "" || e.target.likes.value === "") {
            alert("Please fill the Form")
        } else {
            addBook(bookObj),
                renderBook(bookObj),
                addBookForm.reset()
        }
    }

    // document.getElementById("book-header").addEventListener('click', getBooks)
    // send fetch request , get all books,and return them on the card 
    //create card 
    function renderBook(book) {
        //  debugger                will get first book ????
        let card = document.createElement('li')
        card.innerHTML = `
        <ul class="card">
        <h2>${book.name}</h2> 
        <p> ${book.author}</p>
        <img src=${book.image} class="book-card" />
        <p>${book.likes} Likes </p>
        <button data-id="${book.id}"class="Like-btn">Like ❤️ </button>
        </ul>  
        `
        // add book card to DOM
        div.appendChild(card)
    }


    // GET request with my local API
    function getAllBooks() {
        // hendling promise from .fetch() 
        fetch(fetchUrl) //returns a promise 
            .then(res => res.json()) // convert the response into JSON and return a new Promise
            .then(books => books.forEach(book => renderBook(book)))
    }

    function addBook(bookObj) {
        fetch(fetchUrl, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookObj)
        })
            .then(resp => resp.json())
            //book => addBookForm.append(book))
            .then((book) => (book))
            .catch((error) => error('Error:', error))
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
            const url = `${fetchUrl}/${e.target.dataset.id}`

            // use PATCH request to make an update for new likes 
            fetch(url, {
                method: "PATCH",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': "application/json"
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
    })
})
