

// const hi = "exaple";
// console.log(hi);

document.addEventListener("DOMContentLoaded", () => {
    getBooks()
    document.getElementById("book-header").addEventListener('click', getBooks)
    const dropDown = document.querySelector("#book-dropdown")
    dropDown.addEventListener('change', handleChange)
    // function handleChange(event) {
    //     debugger;
    // }

    function getBooks() {
        const ul = document.getElementById("books-collection")
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            // .then(data => {
            //     data.forEach(book => {
            //         ul.innerHTML += `
            //          <li>${book.name}</li>
            //         `
            //     })
            .then(books => {
                let booksHTML = books.map(function (book) {
                    return `
                <ul class="card">
                 <h2>${book.name}</h2> 
                 <p> ${book.author}</p>
                 <img src=${book.image} class="book-card" />
                 <p>${book.price}</p>
                 <p>${book.likes} Likes </p>
                 <button data-id="${books.like}"class="Like-btn">Like ❤️ </button>
                </ul>
                `
                })
                document.querySelector("#books-collection").innerHTML = booksHTML.join('')
            })


        //     function createDelete() {
        //         let btn = document.createElement('button')
        //         btn.addEventListener('click', deleteBook)
        //         btn.textContent = 'Delete'
        // ul.appendChild(btn)

        //     }

        // const deleteBtn = document.getElementById('delete-button');

        //     function deleteBook(e) {
        //         //delete -button.addEventListener('click', function (e) {
        //         e.target.parentnode.remove()
        //     }
        // }
        // deleteBook()


        // let btn = document.createElement("button")
        // btn.textContent = 'x'
        // ul.appendChild(btn)

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
    // const dropDown = document.querySelector("#book-dropdown")
    // dropDown.addEventListener('change', handleChage)
    // function getBooks() {
    //     fetch('http://localhost:3000/books')
    //         .then(resp => resp.json())
    //         .then(booksAuthors => {

    //             const booksArray = Object.keys(authors)
    //             debugger
    //             const booksLis = createLiElement(booksArray)
    //             renderLis(booksLis)
    //         })
    // }

    // function createLiElement(bookArray) {
    //     return bookArray.map((book) => {
    //         let li = `<li>${book}</li>`
    //         return li
    //     })
    // }

    // function renderLis(booksLis) {
    //     booksLis.forEach(element => {
    //         renderElement(element)
    //     })
    // }
    // function createLiElement(booksArray) {
    //     return booksArray.map((book) => {
    //         let li = `<li>${book}</li>`
    //         return li
    //     })
    // }


    // function renderList(booksList) {
    //     booksList.forEach(element => {
    //         renderElement(element)
    //     })
    // }

    let bookAuthorsArray = []

    function getAuthors() {
        fetch(" http://localhost:3000/books")
            .then(resp => resp.json())
            .then(books => {
                bookAuthorsArray = Object.keys(books)

            })
    }
    function handleChange(event) {
        const author = event.target.value
        debugger;
        // console.log(bookAuthorsArray)
        // const filteredBooks = bookAuthorsArray.filter(book => book.startsWith(author))
        // const filteredBooksList = createLiElement(filteredBooks)
        // ulcontainer.innerHTML = ""
        // renderList(filteredBooksList)
    }


    // function handleChange() {
    //     debugger;
    // }
    getAuthors();

})
// function handleChage() {
//     debugger;
// }
