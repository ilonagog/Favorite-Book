   // const dropDown = document.querySelector("#book-dropdown")

    //dropDown.addEventListener('change', handleChange)


const addBtn = document.querySelector("#new-book-btn")

const bookFormContainer = document.querySelector(".container")

let addBook = false


document.addEventListener("DOMContentLoaded", () => {
 //   getBooks()
    document.getElementById("book-header").addEventListener('click', getBooks)

    function getBooks() {
        const ul = document.getElementById("books-collection")
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

bookFormContainer.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e.target.name)
    const bookName = e.target.name.value
    const bookAuthor = e.target.author.value
    const bookImage = e.target.image.value


fetch("http://localhost:3000/books", {
method: "POST",
headers:
{
    "Content-Type": "application/json",
    Accept:"application/json"


},
body: JSON.stringify({
    "name": "The Essential RUMI",
    "author": "Coleman Barks",
    "image": "https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780062046659_106a2888-c25e-4122-b125-6fb573f57076_424x.jpg?v=1667491936",
    "likes": 92
})

})
    .then(response=>response.json())
    .then(newBook=>{
        let newBookHTML =`
        <div class="card">
        <h2>${newBook.name}</h2>
        <p> ${book.author}</p>
        <img src=${book.image} class="book-card" />
        <p>${book.likes} Likes </p>
        <button data-id="${newBook.id}"class="Like-btn">Like ❤️ </button>
        </div>
        `
        document.querySelector("#book-collection").innerHTML += newBookHTML
   console.log(e.target.removeEventListener())
    })

})

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
    // const dropDown = document.querySelector("#book-dropdown")
    // dropDown.addEventListener('change', handleChange)

    // selectElement.addEventListener('change', (event) => {
    //     const result = document.querySelector('.result');
    //     result.textContent = `You like ${event.target.value}`;
    // });




    /*
    // let booksArray = [];
    function getBooksAuthors() {
        let booksArray = [];
        fetch('http://localhost:3000/books')
            .then(resp => resp.json())
            .then(books => {

                // booksArray.map((book) => {
                let option = `<option>${books[0]['author']}</option>`
                return option
                //     return `
                //    booksArray = books[0]['author']`
                //  return getBooksAuthors.push(books.author)
                //booksArray = books.map(books.author)
                //Object.keys(books);
                // debugger;

                // const booksLis = createLiElement(booksArray)
                // renderLis(booksOptions)
            })
    }

    */
    //  }
    // function createLiElement(bookArray) {
    //     return bookArray.map((book) => {
    //         let option = `<option>${book}</option>`
    //         return option
    //     })
    // }
    // function renderOptions(booksOptions) {
    //     booksLis.forEach(element => {
    //         renderElement(element)
    //     })
    // }
    // function createLiElement(booksArray) {
    //     return booksArray.map((book) => {
    //         let option = `<option>${book}</option>`
    //         return option
    //     })
    // }
    // function renderList(booksOptions) {
    //     booksList.forEach(element => {
    //         renderElement(element)
    //     })
    //  }


    /*
    
        let bookAuthorsArray = []
    
        function getAuthors() {
            fetch(" http://localhost:3000/books")
                .then(resp => resp.json())
    
            //   bookAuthorsArray = Object.keys(books)
        }
    
        function renderAllBooks(books) {
    
    
        }
    
        function handleChange(event) {
            const author = event.target.value
    
            //     //   console.log(bookAuthorsArray)
            //     // const filteredBooksArray = bookAuthorsArray.filter(book => book.startsWith(author))
            //     // const filteredBooks = bookAuthorsArray.filter(book => book.startsWith(author))
            //     // const filteredBooksList = createLiElement(filteredBooks)
            //     // ul.container.innerHTML = ""
            //     // renderList(filteredBooksList)
        }
    
        // getAuthors();
    
    
    */
    function handleChange(e) {
        const author = e.target
    }
addBtn.addEventListener('click',()=>{
    addBook=!addBook;
    if(addBook){
        bookFormContainer.style.display="block";
    }else{
        bookFormContainer.style.display= "none";
    }
})

    
    getBooks()
    // getBooksAuthors()
})






         // let dropdown = document.getElementById("book-dropdown");
    // dropdown.length = 0;

    // let defaultOption = document.createElement('option');
    // defaultOption.text = "Choose Book by Author";

  



    //         let option;
    //         for (let i = 0; i < data.length; i++) {
    //             option.text = data[i].name;
    //             option.value = dta[i].author;
    //             dropdown.addEventListener(option);
    //         }
    //     } else {

    //     }
    // 