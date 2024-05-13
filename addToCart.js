let openList = document.querySelector('.cart_logo');
let closeList = document.querySelector('.close_list');
let list = document.querySelector('.list');
let listItems = document.querySelector('.listCards');
let body = document.querySelector('body');
let sum = document.querySelector('.sumup');
let quantity = document.querySelector('.quantity');
let checkAmount = document.querySelector(".amount");
const openPurchase = document.querySelector(".make_payment");
const checkout = document.getElementById('payment_container');
const closePurchase = document.querySelector(".cancel");

// Use to open and close the side cart list
openList.addEventListener('click', ()=>{
    body.classList.add('activeCard');
})

closeList.addEventListener('click', ()=>{
    body.classList.remove('activeCard');
})

// Used to store each products' details
let products = [
    // T-shirt
    {
        id: 'shirt',
        name: 'T-shirt',
        image: 'new new.png',
        price: 59.50
    },
    // Tote Bag
    {
        id: 'bag',
        name: 'Tote Bag',
        image: 'tote bag.png',
        price: 34.70
    },
    // Mouse Pad
    {
        id: 'mouse pad',
        name: 'LED Gaming Mouse Pad',
        image: 'led gaming mouse pad.png',
        price: 87.30
    },
    // Phone Case
    {
        id: 'phone case',
        name: 'iPhone 14 Phone Case',
        image: 'iPhone 14 phone case.png',
        price: 58.10
    },
];


const listCards = [];


// Deep copy of the product from the products array
function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    addItems();
}


// DOM 
function addItems(){
    listItems.innerHTML = ''; // Clear the content in HTML
    let count = 0; // Initialise
    let totalPrice = 0; // Initialise
    listCards.forEach((value, key)=>{
        totalPrice += value.price;
        count += value.quantity;
        if(value != null){
            const createLi = document.createElement('li');
            createLi.innerHTML = `
                <div></div>
                <div><img src="${value.image}" /></div>
                <div class="items_name">${value.name}</div>
                <div>RM ${value.price.toFixed(2)}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listItems.appendChild(createLi);
        }
    })

    if (totalPrice == 0){
        sum.innerText = "";
    }else{
        sum.innerText = "Total Amount: RM " + totalPrice.toFixed(2);
        checkAmount.innerText = "Total Amount: RM " + totalPrice.toFixed(2);
    }
    
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    addItems();
}


// JavaScript Code for the Checkout Part
// Open and close checkout form
openPurchase.addEventListener('click', ()=>{
    checkout.style.display = "block";
    body.classList.remove('activeCard');
})

closePurchase.addEventListener('click', ()=>{
    checkout.style.display = "none";
})


// Change the content when the radio button is toggled
const delivery = document.getElementById('delivery');
const collect = document.getElementById('self-collect');
const openDelivery = document.getElementById('delivery_container');
const openCollect = document.getElementById('collect_container');

openDelivery.style.display = "block";
openCollect.style.display = "none";

delivery.addEventListener('change', () =>{
    if(delivery.checked){
        openDelivery.style.display = "block";
        openCollect.style.display = "none";
    }
});

collect.addEventListener('change', () =>{
    if (collect.checked){
        openDelivery.style.display = "none";
        openCollect.style.display = "block";        
    }
});


