// DOM Manipulation

// Accessing Element using ID and Class
let elementWithID = document.getElementById("first-div");
console.log("Element passed using ID:",elementWithID)

// Modify element .textContent property
elementWithID.textContent="Div 1";

// getElementsByClass method
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements passed using classes:", elementsWithClass);

// Modify element .textContent property using index
elementsWithClass[1].textContent = "Div 2"

// getElementByTagName() method
let listItems = document.getElementsByTagName("li");
console.log("Elements accessed using tags:" , listItems);

// Modify element .backgroundColor property using Index
listItems[0].style.backgroundColor="crimson";

// .querySelector() method
// #id, .class, tag
// Return: first element or null
let orderedListItem = document.querySelector('.ordered-list');
console.log("Ordered List Items:", orderedListItem);
orderedListItem.style.color="blue";

// .querySelectorAll() method - returns all elements
let headings3 = document.querySelectorAll("h3");
console.log("Headings3:", headings3);

// Modify elements inside Queryselectorall
headings3[3].style.backgroundColor="coral";

// using looping statements

for(let i = 0; i < headings3.length; i++){
    let heading = headings3[i];
    heading.style.backgroundColor="coral";
}

// Update elements using attributes
let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute(
    'src',
    'https://cdn-icons-png.flaticon.com/512/3688/3688129.png'
);

// Append New Elements
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement('div');
createdElement.textContent = "This is the created Element."
parentElement.appendChild(createdElement)

// Removing elements
let elementToBeRemoved =document.getElementById('element-to-be-removed');
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Element Styles
let darkModeButton = document.getElementById("dark-mode-btn");
darkModeButton.addEventListener('click', function(){
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor="black";
    pageContainer.style.color="whitesmoke";

    let pageText = document.getElementById("page-mode-text");
    pageText.textContent = "Dark Mode";

})