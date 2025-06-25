// DOM -> Document Object Model

// let ele = document.getElementsByClassName("para")
// let ele = document.getElementsByTagName("p")

// console.log(ele);

// ele[0].innerText = "Good"


// let ele = document.getElementById("demo")

// console.log(ele);

// // ele.innerText = "Hello"
// ele.innerHTML = "<h1>Hello</h1>"
// ele.style.color = "orange"
// ele.style.fontSize = "1.5em"

let newEle = document.createElement("h2")

let anchorTag = document.createElement("a")
anchorTag.setAttribute("href", "#")
anchorTag.setAttribute("class", "demo")
anchorTag.innerText = "Good"

document.body.append(newEle)
newEle.append(anchorTag)