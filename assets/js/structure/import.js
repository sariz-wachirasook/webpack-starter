import jQuery from 'jquery';

const baseURL = 'https://jsonplaceholder.typicode.com';

// fetch
// async function getProduct(id) {
//   fetch(`${baseURL}/products/1`)
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

// getProduct(1);

// asyncronous function
// setTimeout(() => {

// function timeout() {
//   console.log('init timeout');
//   setTimeout(() => {
//     console.log('timeout');
//   }, 1000);
//   console.log('end timeout');
// }

// timeout();

// settimeout with callback

// -------------------- CALLBACK FUNCTION
// function myCallBack(json) {
//   console.log(json);
// }

// function timeouts2(callback) {
//   fetch(`${baseURL}/products/1`)
//     .then((res) => res.json())
//     .then((json) => callback(json));
// }

// timeouts2(myCallBack);

// -------------------- ASYNC AWAIT
async function getMyProduct() {
  console.log('start');
  // const response = await fetch(`${baseURL}/todos/1`);
  // console.log(response);

  // const json = await response.json();
  // console.log(json);
  // console.log('end');

  // console.log(jQuery.ajax);

  const res = await jQuery.ajax({
    url: `${baseURL}/todos/1`,
    method: 'GET',
  });

  console.log(res);

  console.log('end');
}

// -------------------- THEN
function getMyProduct2() {
  fetch(`${baseURL}/todos/1`).then((res) => {
    console.log(res);
    res.json().then((json) => {
      console.log(json);
    });
  });
}

getMyProduct2();

// setInterval(() => {
// promise

// then

// async await

// promise

// callback
