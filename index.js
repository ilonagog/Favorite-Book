document.addEventListener("DOMContentLoaded", () => {
    const bookConteiner = document.getElementById("books-collection")
    const fetchUrl = "http://localhost:3000/books"
    const addBookForm = document.querySelector('.add-book-form')
    const addBtn = document.querySelector("#new-book-btn")

    function renderBook(book) {
        const bookCard = document.createElement('div');
        const bookName = document.createElement('h2');
        const bookAuthor = document.createElement('h4');
        const bookSummary = document.createElement('h6');
        const bookImg = document.createElement('img');
        const likesNum = document.createElement('h5');
        const likeBtn = document.createElement('button');


        bookCard.id = `book-${book.id}`;
        bookCard.className = "book-card";
        bookName.textContent = book.name;
        bookAuthor.textContent = book.author;
        bookSummary.textContent = book.summary;
        bookImg.src = book.image;
        likesNum.textContent = book.likes;


        likeBtn.className = "likes-btn";
        likeBtn.textContent = "Like ❤️";

        bookCard.append(bookName, bookAuthor, bookSummary, bookImg, likesNum, likeBtn);

        bookConteiner.append(bookCard);

        likeBtn.addEventListener('click', () => increaseLikes(book, likesNum));
    }

    function initialize() {
        getAllBooks()
    }
    initialize()

    function getAllBooks() {
        fetch(fetchUrl)
            .then(res => res.json())
            .then(books => books.forEach(book => renderBook(book)))
    }

    addBookForm.addEventListener('submit', createNewBook)
    function createNewBook(e) {
        e.preventDefault()
        let bookObj = {
            name: e.target.name.value,
            author: e.target.author.value,
            info: e.target.info.value,
            image: e.target.image.value,
            likes: e.target.likes.value
        }
        if (e.target.name.value === "" || e.target.author.value === "" || e.target.image.value === "" || e.target.likes.value === "") {
            alert("Please fill the Form")
        } else {
            addBook(bookObj),
                addBookForm.reset()
        }
    }

    addBtn.addEventListener('click', () => {
        if (addBookForm.style.display === '' || addBookForm.style.display === 'none') {
            addBookForm.style.display = 'block';
        } else {
            addBookForm.style.display = 'none';
        }
    })

    function addBook(formData) {
        fetch(fetchUrl, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then((book) => renderBook(book)
            )
            .catch((error) => error('Error:', error))
    }


    function increaseLikes(book, likesElement) {
        ++book.likes;
        likesElement.textContent = book.likes;
        fetch(fetchUrl + `/${book.id}`,
            {
                method: "PATCH",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            })
            .then(resp => resp.json())
            .then(book => (book))
            .catch(error => alert(error))
    }
})

