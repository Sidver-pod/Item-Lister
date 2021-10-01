//console.log(document);
//console.log(document.URL);
//console.log(document.title);
// document.title = 123;
// console.log(document.title);
// console.log(documnet.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.getElementById('submit'));

// #1 getElementById();
var submitButton = document.getElementById('submit');
submitButton.value = "SEND";
var headerTitle = document.getElementById('header-title');
headerTitle.textContent = "Namaste";
headerTitle.innerText = "Hello";

var broadGreenStrip = document.getElementById('b-g-strip');
broadGreenStrip.style.borderBottom = 'solid black 6px';

var formTitle = document.getElementById('form-title');
formTitle.style.fontWeight = 'bold';
formTitle.style.color = 'green';
formTitle.style.border = 'solid 2px yellow';

// #2 getElementsByClassName();
var items = document.getElementsByClassName('list-item');
console.log(items);
items[1].innerText = "Namaskar";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

items[2].style.backgroundColor = "green";
items[2].style.color = "white";

for(let i=0; i<items.length; i++){
  items[i].style.fontWeight = "bold";
}
