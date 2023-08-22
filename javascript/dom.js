let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'gel nettoyant',
        image: 'assets/gel.jpg',
        price: 50 
    },
    {
        id:2,
        name: 'lotion',
        image: 'assets/lotion.jpg',
        price: 60
    },
    {
        id:3,
        name: 'a derma',
        image: 'assets/a derma.jpg',
        price: 30
    },
    {
        id:4,
        name: 'creme hydratant',
        image: 'assets/hydra.jpg',
        price: 27
    },  
    {
        id:5,
        name: 'sun screen',
        image: 'assets/screen.jpg',
        price: 70
    },    
    {
        id:6,
        name : 'mask',
        image : 'assets/mask.jpg',
        price: 51
    },  
];
let listCards= [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
          <img  src="./${value.image}"/>
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard(${key})">Add to cart</button>
          `;
          list.appendChild(newDiv);
        })
}
initApp();
function addToCard(key){
    if(listCards[key]==null){
        listCards[key]= products[key];
        listCards[key].quantity= 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML='';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML=`
                <div><img src="./${value.image}"/></div> 
                <div>${value.name} </div>
                <div>${value.price.toLocaleString()}</div>  
                
                <div>
                    <button onclick="changeQuantity(${key} , ${value.quantity - 1})"> - </button>
                    <div class"count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},${value.quantity + 1})"> + </button>
                <div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key,quantity){
    if(quantity==0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity= quantity;
        listCards[key].price= quantity * products[key].price;
    }
    reloadCard();
}

