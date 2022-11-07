# Favorite Book

# Phase-1 Project Learing Goals ()
1 
    - Create local JSON server
    - Use "fetch()" to make a "GET" request /  - Render returned books
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

## Introduction 

I have created a Single Page Application in JavaScript. Here I worked on HTML, CSS, JS files, created 
JSON server for my favorite books. 

In this application user can see the list of my favorite books, like any of them, also user can filter books 
based on an author's name. 

So how SPA is working ? 
 
    I can access the list of books from db.json and render each one in the "card" on my web page.

    User can "click" on the "like" button to express their love for a certain book.

    DOM is the interface through which we can work with the content, structure and styles of a web.

    I used my first  event listener - DOMContentLoaded - which helps user to  sure our 

    



### Increase a Book's Likes

 When a user choses favorite book and clicks on a like button, that click should :

    - tridgger the  "PATCH" request- "method: "PATCH", by which requests should be sent to the server at  
    "http://localhost:3000/books" , updating the number of the likes that the favorite book will have

    - If the request will be successful , we will sew the update in "likes" number without reloading the page, and this everything happens in the DOM!

This will  work if we will add event listener to a book's "like" button,and :
    we need to capture book's id,
    calculated new number of likes will be added to the existing one 
