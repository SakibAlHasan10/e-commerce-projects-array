
let addContainer = [];

let count = 0;
const countChild = 0;
function card(e) {
    const cardContainer = document.getElementById('card-container');
    const allImages = e.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
    const cardTitle = e.parentNode.parentNode.childNodes[1];
    const cardPrice = e.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const div = document.createElement('div');
    div.classList.add('w-full', 'flex', 'items-center', 'bg-white', 'my-2', 'py-2', 'px-3');
    div.setAttribute('id', 'semi-container');
   div.innerHTML = ` <img src=${allImages} class="rounded-full bg-white w-12 h-12 p-2 border-2 border-solid border-slate-300"> 
        <p class="text-xl mx-5 font-semibold">${cardTitle.innerText}</p>
        <p class="text-xl text-red-500 font-semibold">$ ${cardPrice}</p>
        `
    cardContainer.appendChild(div)
    addContainer.push(div)
    const btn = document.createElement('button');
    btn.innerHTML += `<button  class="trash ml-5 font-semibold hover:text-red-400 text-yellow-500  " > <i class="fa-solid fa-trash text-2xl"></i> 
    </button> `
    div.appendChild(btn)
    const cadProduct = document.getElementById("cad-product");
    const cadProduct2 = document.getElementById("cad-product2");
    const navTotal = document.getElementById("nav-total");
    let countChild = cardContainer.childElementCount;
    cadProduct.innerText = countChild;
    cadProduct2.innerText = countChild;
    const cardPriceNumber = e.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    count = count + parseFloat(cardPriceNumber);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = count.toFixed(2);
    navTotal.innerText = count.toFixed(2);
    // remove element of side cad
    btn.addEventListener('click', (e) => {
        const cadPrice = e.target.parentNode.parentNode.parentNode.childNodes[5].innerText.split(" ")[1];
        const minus = count -= parseFloat(cadPrice);
        const countChild = cardContainer.childElementCount-1;
        cadProduct.innerText = countChild;
        cadProduct2.innerText = countChild;
        totalPrice.innerText = minus.toFixed(2);
        navTotal.innerText = minus.toFixed(2);
        div.remove()
    })
}
