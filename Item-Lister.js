//console.log(document);
//console.log(document.URL);
//console.log(document.title);
// document.title = 123;
// console.log(document.title);
// console.log(documnet.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.getElementById('submit'));
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
