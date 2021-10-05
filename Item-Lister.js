/*//console.log(document);
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
*/
/*------------------------------PARENT-CHILD-SIBLING-----------------------------*/
/*// #6 parentNode
var itemList = document.querySelector('#list');
//console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";

// #7 parentElement (exactly the same as parentNode)
itemList.parentElement.style.backgroundColor = "white";

// #8 childNodes (not recommended!)
// console.log(itemList.childNodes);

// #9 children
//console.log(itemList.children);
//console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// #10 firstChild (not recommended!)
//console.log(itemList.firstChild);

// #11 firstElementChild
//console.log(itemList.firstElementChild);
itemList.firstElementChild.innerText = "Hello 1";

// #12 lastChild (N/R)
//console.log(itemList.lastChild);

// #13 lastElementChild
itemList.lastElementChild.innerText = "Hello 5";

// #14 nextSibling (N/R)
//console.log(itemList.nextSibling);

// #15 nextElementSibling
console.log(itemList.nextElementSibling);

// #16 previousSibling (N/R)
// console.log(itemList.previousSibling);

// #17 previousElementSibling
// console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "pink";
*/
/*----------------CREATE ELEMENT - ADD ATTRIBUTES - INSERT ELEMENT---------------*/
/*// #18 createElement();
var newDiv = document.createElement('div'); //create a div
newDiv.className = "hello"; //className added
newDiv.id = "hello_1"; //id added

// #19 setAttribute();
newDiv.setAttribute('title', 'Hello Div'); //title added

// #20 createTextNode();
var newDivText = document.createTextNode('Hello World'); //create a text node

// #21 appendChild();
newDiv.appendChild(newDivText); // text added 

console.log(newDiv);

// #22 insertBefore();
var header = document.querySelector('header .broad-green-strip');
var h1 = document.querySelector('header h1');
header.insertBefore(newDiv, h1);
*/
/*----------------------------------ADD & DELETE---------------------------------*/
var form = document.querySelector('#form-one');
var list_Element = document.querySelector('#list');

form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  
  const storeInput = document.querySelector('.insert-box').value;
  
  //creating new list element
  var li = document.createElement('li');
  li.innerText = storeInput;
  li.className = 'list-item';
  
  //creating new button X
  var newButton = document.createElement('button');
  newButton.innerText  = 'X';
  newButton.className = 'cross';
  
  //making [new button X] a child of the [new list element]
  li.appendChild(newButton);
  
  //making [new list element] a child of list_Element 
  list_Element.appendChild(li);
  
  //EXTRA [clearing out the input box after submission!]
  document.querySelector('.insert-box').value = "";
}

//DELETE [using X button]
function deleteItem(e){
  e.preventDefault();
  //target is what gets clicked in the given 'event', i.e. [e]
  //another explanation: [e.target] is the <li> element that gets clicked!
  if(e.target.className == 'cross'){
    e.target.parentElement.remove(); //delete the parent of the cross, i.e. li element!
  }
}

list_Element.addEventListener('click', deleteItem);
