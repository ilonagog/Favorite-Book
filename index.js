document.addEventListener("DOMContentLoaded", () => {

    const addBtn = document.querySelector("#new-book-btn")
    // const bookForm = document.querySelector(".container")
    //  let book;
    const addBookForm = document.querySelector('.add-book-form')
    const div = document.getElementById("books-collection")
    //  let books;




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


    // GET request with my local API
    function getAllBooks() {
        // hendling promise from .fetch() 
        fetch("http://localhost:3000/books") //returns a promise 
            .then(res => res.json()) // convert the response into JSON and return a new Promise
            .then(books => books.forEach(book => renderBook(book)))
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

