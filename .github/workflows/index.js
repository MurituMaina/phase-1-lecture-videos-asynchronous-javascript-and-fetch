//Event listeners
document.querySelector('#animal-form').addEventListener('submit',handleSubmit)

//Test of the source of the inputs is working
/*let names = document.getElementById("name")
names.addEventListener('input',(e) => console.log(e.target.value)).value
let image_url =document.getElementById('image_url').value;
let descriptions =document.getElementById("descriptions").value;*/


//Event Handlers
function handleSubmit(e){
    e.preventDefault();

    // console.log(names)
    // console.log(descriptions)
    let animalObj = {
       names:e.target.name.value,
       imageUrl: e.target.image_url.value,
       descriptions: e.target.descriptions.value,
       donations:0
    }
    // console.log(animalObj)
renderOneAnimal(animalObj)
adoptAnimal(animalObj)
}

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
<button id="donate"> Donate $10 </button>
<button id="set_free"> set Free </button>
</div>
`
card.querySelector('#donate').addEventListener('click', 
() => { console.log('click')
    animal.donations +=10
    card.querySelector('span').textContent = animal.donations;
    
    // console.log(animal)
    updateDonation(animal)
});

card.querySelector('#set_free').addEventListener('click', 
    ()=> {
        // card.innerHTML =''
        card.remove();
        
        deleteAnimal(animal.id)
    })
// console.log(card)
//add animal card to DOM
document.querySelector("#animal-list").appendChild(card);

}

function getAllAnimals(){
    fetch('http://localhost:3000/animalData')
    .then(resp => resp.json())
    .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
}

function adoptAnimal(animalObj){
    console.log(JSON.stringify(animalObj))
    fetch('http://localhost:3000/animalData',{ 
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(animalObj)
    })
    .then(res => res.json())
    .then(animal => console.log(animal))
}

function updateDonation(animalObj){
// console.log(JSON.stringify(animalObj))

fetch(`http://localhost:3000/animalData/${animalObj.id}`,{ 
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(animalObj)
    })
    .then(res => res.json())
    .then(animal => console.log(animal))
}

function deleteAnimal(id){
    fetch(`http://localhost:3000/animalData/${id}`,
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }

    })
    .then(res => res.json())
    .then(animal => console.log(animal))
}


//Initial Render
// Get data and load or render our animals to the DOm.

function initialize(){
   getAllAnimals()
// animalData.forEach(animal => renderOneAnimal(animal))
}
initialize()

// debugger
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