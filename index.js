
const addBtn = document.querySelector("#new-book-btn")
const bookForm = document.querySelector(".container")
//let addBook = false

const addBookForm = document.querySelector('.add-book-form')
const ul = document.getElementById("books-collection")

// addBtn.addEventListener('click'), () => {
//     if (addBookForm.innerHTML = 'visible') {

//         // if (document.getElementsByClassName("add-book-form").removeAttribute('hidden')) {
//         bookForm.style.display = 'block';

//         // document.getElementById(".add-book-form").style.visibility ='visible';
//     } else {
//         bookForm.style.display = "";
//     }

// }





document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("book-header").addEventListener('click', getBooks)

    function getBooks() {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(books => {
                let booksHTML = books.map(function (books) {
                    return `
                <ul class="card">
                 <h2>${books.name}</h2> 
                 <p> ${books.author}</p>
                 <img src=${books.image} class="book-card" />
                 <p>${books.likes} Likes </p>
                 <button data-id="${books.like}"class="Like-btn">Like ❤️ </button>
                </ul>  
                `
                })
                // console.log(booksHTML);
                document.querySelector("#books-collection").innerHTML = booksHTML.join('')
            })
    }

    addBookForm.addEventListener('submit', createBook)

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
                       `})

        document.querySelector("#book-collection").innerHTML += newBookHTML
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


    addBtn.addEventListener('click', () => {
        // return addBookForm.innerHTML = 'visible';
        //   document.getElementsByClassName("add-book-form").removeAttribute('hidden')
        // return bookForm.style.display = 'block';

        // document.getElementById(".add-book-form").style.visibility ='visible';

        //  bookForm.style.display = "";

        let someCondition = true;

        if (someCondition == true) {
            document.getElementsByClassName("add-book-form").hidden = false;
            bookForm.style.display = 'block';
        } else {
            bookForm.style.display = "";
        }



    })





    // addBtn.addEventListener('click', () => {
    //     addBook = !addBook;
    //     if (addBook) {
    //         bookForm.style.display = "block";
    //     } else {
    //         bookForm.style.display = "";
    //     }

    // })
    getBooks()


})
