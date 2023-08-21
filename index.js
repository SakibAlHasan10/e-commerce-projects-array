
let addContainer = [];
const cardPrice = document.getElementById('card-price');
const cardTitle = document.getElementById('card-title');
function card(e){
    const cardContainer = document.getElementById('card-container');
    const allImages = e.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
    const div = document.createElement('div');
    div.classList.add('w-full')
    div.classList.add('flex')
    div.classList.add('items-center')
    div.classList.add('bg-white')
    div.classList.add('my-2')
    div.classList.add('p-2')
    div.innerHTML= ` <img src=${allImages} class="rounded-full bg-white w-12 h-12 p-2 border-2 border-solid border-slate-300"> 
    <p class="text-xl mx-4">${cardTitle.innerText}</p>
    <p class="text-xl text-red-500 font-semibold">${cardPrice.innerText}</p>
    <button></button>`

    cardContainer.appendChild(div)
    console.log(div.childNodes, allImages, cardPrice.innerText)
}