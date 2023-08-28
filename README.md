# Getting started with Node.js

This repo is just to keep track as I work through unit 1 of [Get Programming With Node.js](https://amzn.eu/d/1SdEKQ3) by Jonathan Wexler, which covers setting up a basic HTTP server in Node.js and handling routing (without the use of Express.js, which is introduced in the next unit).

<a href="https://amzn.eu/d/1SdEKQ3"><img src="book_cover.jpg" width="300" /></a>

### Lesson 3

- Covered npm basics and exporting / requiring modules in Node.

### Lesson 4

- Covered the setup of a basic HTTP server that simply responds to all requests with HTML (at this stage, from directly inside the same file).

### Lesson 5

- I explored how to set up basic routing to serve different HTML for different url requests.

### Lesson 6

- I learned how to serve HTML from locally stored HTML files using the `fs` module, and extracted the implementation of routing logic into an independent JavaScript module. I also learned how to serve other files like images, CSS and JavaScript in a similar fashion.

### Lesson 7

- I put everything learned so far together to build a complete web application serving static web pages via a custom system for routing user requests to serve specific content. After building custom functions to register routes in an organized and systematic way, I created views and assets to be served from their respective directories.