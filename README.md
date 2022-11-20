# Favorite Book

# Phase-1 Project Learing Goals ()
1 
    - Create local JSON server
    - Use "fetch()" to make a "GET" request /  - Render returned books to the DOM
    -Use "fetch()" to make a "POST" request to create a new book / Add book to the DOM
    - Or use "fetch()" to make a "PATCH" request / - Update an existing book - Render the updated information to the DOM
 
2
    - Use event listeners (at least 3) each should have its own callback function. 
    Understanding of a callback function : I liked this examples of the callback function from the "https://www.w3schools.com/js/js_callback.asp" :
    
    "  "I will call back later!"

        A callback is a function passed as an argument to another function

        This technique allows a function to call another function

        A callback function can run after another function has finished. "

    - I am using 'DOMContentLoaded' event listener, 'click' and 'submit'

3 
    - I use 'forEach()' array iteration method. What is array iteration method?- So, array iteration method performs some operation on each element of array. 
4 
    - Application should be single page.

## Introduction with the instructions 

I have created a Single Page Application in JavaScript. Here I worked on HTML, CSS, JS files, created 
JSON server for my favorite books. 

In this application user can see the list of my favorite books, like any of them, and add new favorite book.
So how SPA is working ? 


    DOM is the interface through which we can work with the content, structure and styles of a web.

    All of the books data is stored in the 'db.json' file. I have to access this
    data using a JSON server. By running 'json-server --watch db.json' in the terminal i will start the server.
 
    I can access the list of books from db.json and render each one in the "card"(which i will create) on my web page. 

        To Fetch a Book : When i make a "GET" request to fetch all the book objects.
        I created book card elements in index.js. 

    User can "click" on the "like" button to express their love for a certain book.

### Add a New Favorite Book!
    
    User can click on the "Create A Book" button and add a new event listener - "sumbit". What happens is a user submits a book form.
    How it works? 
        A "POST" request send to "http://localhost:3000/books" and new book adds to the DOM without reloading the page. 
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

#### Increase a Book's Likes

 When a user choses favorite book and clicks on a like button, that click should :

    - tridgger the  "PATCH" request- "method: "PATCH", by which requests should be sent to the server at  
    "http://localhost:3000/books" + book id , updating the number of the likes that the favorite book will have

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

    - If the request will be successful , we will sew the update in "likes" number without reloading the page, and this everything happens in the DOM!

    This will  work if we will add event listener to a book's "like" button,and :
    we need to capture book's id,
    calculated new number of likes will be added to the existing one 

#### Check a work

    It is very important to check a work, console.log() or debugger helps a lot! To do that i open 'index.html' in the browser, go to Developer Tools.  

##### Book summary  
    I used "https://www.goodreads.com" for books summary and books information.

    