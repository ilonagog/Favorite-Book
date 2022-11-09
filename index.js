// const dropDown = document.querySelector("#book-dropdown")
//dropDown.addEventListener('change', handleChange)

const addBtn = document.querySelector("#new-book-btn")
const bookFormContainer = document.querySelector(".container")
let addBook = false
if (addBook) {
    console.log('displaying book form')
    bookFormContainer.style.display = "block";
} else {
    console.log("checking ")
    bookFormContainer.innerHTML = ""

}


const addBookForm = document.querySelector('.add-book-form')

//let addBook = false
const ul = document.getElementById("books-collection")

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("book-header").addEventListener('click', getBooks)

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
                 <button data-id="${books.like}"class="Like-btn">Like ❤️ </button>
                </ul>
                `
                })
                document.querySelector("#books-collection").innerHTML = booksHTML.join('')
            })
    }

    addBookForm.addEventListener('submit', createBook)

    function createBook(e) {
        e.preventDefault()
        console.log(e.target.name)
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
                       `})
            .then(document.querySelector("#book-collection").innerHTML += newBookHTML)
        // console.log(e.target.removeEventListener())
    }


    addEventListener('click', (e) => {
        if (e.target.className === "Like-btn") {
            let currentLike =
                parseInt(e.target.previousElementSibling.innerText)
            let newLikes = currentLike + 1
            e.target.previousElementSibling.innerText = newLikes + "Likes"

            fetch(`http://localhost:3000/books
        ${e.target.dataset.id}`, {
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

    console.log('addBook', addBook);
    addBtn.addEventListener('click', () => {
        console.log('addBook', addBook);
        addBook = !addBook;
        if (addBook) {
            bookFormContainer.style.display = "block";
        } else {

            bookFormContainer.innerHTML = "";
        }
        // return addBook;

    })
    getBooks()
    // createBook()

})

