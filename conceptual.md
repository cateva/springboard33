### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  allbacks, which allow you to provide functions to call once the asynchronous method has finished running; 
  promises, which allow you to chain methods together;
  async/await keywords, which are just some syntactic sugar over promises.

- What is a Promise?

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

- What are the differences between an async function and a regular function?

regular function runs sequentially, async function can be called and while the operation is performed you can execute another function 

- What is the difference between Node.js and Express.js?


NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. 
Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.

- What is the error-first callback pattern?


Error-First Callback in Node. js is a function which either returns an error object or any successful data returned by the function. 

- What is middleware?

 a function that will have all the access for requesting an object, responding to an object, and moving to the next middleware function in the application request-response cycle.

- What does the `next` function do?

executes the middleware succeeding the current middleware.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)


async function getUsers() {
	const [elie, matt, joel] = await Promise.all([
		$.getJSON('https://api.github.com/users/elie'),
    $.getJSON('https://api.github.com/users/joelburton'),
    $.getJSON('https://api.github.com/users/mmmaaatttttt')
	]);

  return [elie, matt, joel];
}
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
