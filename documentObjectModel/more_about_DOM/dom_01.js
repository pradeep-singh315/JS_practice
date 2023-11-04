const parentElement = document.querySelector(".parent")
console.log(parentElement.getAttribute('class'));//We can get value of any attribute..
parentElement.setAttribute("id", "parent-id")//We can set any attribute with the help of this function..
console.log(parentElement.getAttribute('id'));

//InnerText And TextContent
console.log(parentElement.textContent);// it can be return the content whose display is none..
console.log(parentElement.innerText);//return an actual content..

//Chids of an element
const firstElement = parentElement.children[0]
console.log(parentElement.children); // returns all the elements of parentElement
console.log(firstElement.nextElementSibling);

// Nodes 
console.log(`Nodes --->  ${parentElement.childNodes}`);

// Access by class names...
const childDiv = document.getElementsByClassName("child-div")
console.log(childDiv);
const arrChild = Array.from(childDiv)
const colorArray = ["red", "aqua", "yellow", "sandybrown", "indigo"]
let i = 0
arrChild.forEach((element) => {
    element.style.backgroundColor = colorArray[i]
    i++;
})