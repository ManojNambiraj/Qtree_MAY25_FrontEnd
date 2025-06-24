// Callback Functions:

// function display(result) {
//   console.log(result);
// }

// function mul(a, b, display) {
//   let ans = a * b

//   display(ans)
// }

// mul(5, 2, display);

// DOM -->  Document Object Model

    // let ele = document.getElementById("demo");

    // ele.innerText = "Good evening"

    // ele.innerHTML = "<h2>Good evening</h2>";

    // ele1 = document.getElementsByClassName("para")

    // console.log(ele1);

    // ele1[0].innerText = "Hello"
    // ele1[1].innerText = "Hello"

    // newele = document.querySelector("#demo")

    // console.log(newele);

    // newele.innerText = "Hello"

    // let newele = document.createElement("h1")
    // newele.setAttribute("class", "header")

    // newele.innerText = "Good evening"

    // document.body.append(newele);

// Event Listeners:

function demo(n){
    console.log(n);
}

function foo(event){
    console.log(event.target.value);
    
}