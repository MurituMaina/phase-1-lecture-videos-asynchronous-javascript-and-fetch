// // console.log("one")
// // function fun ()
// // {
// //     console.log("three")
// // }

// // document.querySelector("input").addEventListener("click", fun)


// //Asynchronous Javascript
// // allows for the rest of the document/code to tun as it waits for the server respons
// // console.log("before")

// // setTimeout(()=> console.log("during"), 3000)
// // //setTimeout() runs after the time elapses.
// // console.log("after")


// //
// // console.log("before fetch")
// // fetch('http://localhost:3000/animals')
// // .then(res => console.log(res))
// // console.log("before fetch")
// // console.log("before fetch")

// //
// // Promise
// // console.log("before fetch")

// console.log(fetch('http://localhost:3000/animals'))
// .then(res => console.log(res))

// console.log("Hi from index.js")


//DOM Renderers for Functions
function renderOneAnimal(animal){
    //build Animal
let card = document.createElement("li")
card.className ="card"
card.innerHTML = `
<img src= "${animal.imageUrl}">
<div class =""content"> 
<h4>${animal.names}</h4>
<p>
$<span class="donation-count">${animal.donations}</span> Donated
</p>
<p>${animal.descriptions}</p>
</div>
<div>
<button> Donate $10 </button>
<button> set Free </button>
</div>
`
console.log(card)
//add animal card to DOM
document.querySelector("#animal-list").appendChild(card);
}

function getAllAnimals(){
    fetch('http://localhost:3000/animalData')
    .then(resp => resp.json())
    .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
    console.log('before fetch returns')
}

//Initial Render
// Get data and load or render our animals to the DOm.

function initialize(){
   getAllAnimals()
   console.log('after get all animals')
    // animalData.forEach(animal => renderOneAnimal(animal))
}
initialize()