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

    - I am using 'DOMContentLoaded' event listener, 'click' and 'change'

3 
    - I use 'map()' array iteration method. What is array iteration method?- So, array iteration method performs some operation on each element of array. The 'map()' method creates a new array, does not change the original array. 

4 
    - Application should be single page.

## Introduction with the instructions 

I have created a Single Page Application in JavaScript. Here I worked on HTML, CSS, JS files, created 
JSON server for my favorite books. 

In this application user can see the list of my favorite books, like any of them, also user can filter books 
based on an author's name. 

So how SPA is working ? 


    DOM is the interface through which we can work with the content, structure and styles of a web.

    All of the books data is stored in the 'db.json' file. I have to access this
    data using a JSON server. By running 'json-server --watch db.json' in the terminal i will start the server.
 
    I can access the list of books from db.json and render each one in the "card"(which i will create) on my web page. 

        To Fetch a Book : When i make a "GET" request to fetch all the book objects, i made  a  '<ul class ="card">' for each book and added it to the 'div'.
        Each card should have the following child elements:
            - '<h2>' tag for the book's name
            - '<p>' tag for the book's author
            - '<img>' tag with the 'src' of the book's image attribute and the class name "book-card"
            - '<p>' tag with likes number
            - '<button> tag with the class "Like-btn" and an id attribute set to the book's id number

    User can "click" on the "like" button to express their love for a certain book.

### Add a New Favorite Book!
    
    User can click on the "Create A Book" button and add a new event listener - "sumbit". What happens is a user submits a book form.
    How it works? 
        A "POST" request send to "http://localhost:3000/books" and new book adds to the DOM without reloading the page. 

The body should be this:
},
body: JSON.stringify({
    "name": "The Essential RUMI",
    "author": "Coleman Barks",
    "image": "https://cdn.shopify.com/s/files/1/0285/2821/4050/products/9780062046659_106a2888-c25e-4122-b125-6fb573f57076_424x.jpg?v=1667491936",
    "likes": 92
})

#### Increase a Book's Likes

 When a user choses favorite book and clicks on a like button, that click should :

    - tridgger the  "PATCH" request- "method: "PATCH", by which requests should be sent to the server at  
    "http://localhost:3000/books" , updating the number of the likes that the favorite book will have

            method: "PATCH",
                headers: {
                    'Content-Type': "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    Like: newLikes
                })

    - If the request will be successful , we will sew the update in "likes" number without reloading the page, and this everything happens in the DOM!

    This will  work if we will add event listener to a book's "like" button,and :
    we need to capture book's id,
    calculated new number of likes will be added to the existing one 

#### Check a work

    It is very important to check a work, console.log() or debugger helps a lot! To do that open 'index.html' in the browser, go to Developer Tools.  