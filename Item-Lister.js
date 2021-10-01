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

// #3 getElementsByTagName();

//items[4].textContent = "I am item 5"; //throwing an error!

var li = document.getElementsByTagName('li');
console.log(li[4]);
li[4].textContent = "I am item no. 5";

// #4 querySelector();
var insertBox = document.querySelector('.insert-box');
console.log(insertBox);
insertBox.placeholder = "Enter Item No.";

var secondItem = document.querySelector('.list-item:nth-child(2)');
console.log(secondItem);
secondItem.style.backgroundColor = 'green';
secondItem.style.color = 'white';

var thirdItem = document.querySelector('.list-item:nth-child(3)');
thirdItem.style.visibility = "hidden";

// #5 querySelectorAll();
var _secondItem = document.querySelectorAll('.list-item');
_secondItem[1].style.color = "green";
_secondItem[1].style.backgroundColor = "white";

var odd = document.querySelectorAll('li:nth-child(odd)');
thirdItem.style.visibility = "visible";
for(let i=0; i<li.length; i++){
  odd[i].style.backgroundColor = "green";
}
