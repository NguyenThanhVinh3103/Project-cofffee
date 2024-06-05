let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'SG cafe milk',
        image: 'https://ca-times.brightspotcdn.com/dims4/default/8f02552/2147483647/strip/true/crop/600x400+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F35%2Ff8%2F8f8900d9962d75d9cbf1d324d5fe%2Fla-xpm-photo-2012-nov-01-la-fi-mo-debenhams-coffee-confusing-20121101',
        price: 120000
    },
    {
        id: 2,  
        name: 'Espresso',
        image: 'https://cdn.tgdd.vn/Files/2023/07/11/1537842/espresso-la-gi-nguyen-tac-pha-espresso-dung-chuan-202307120715077669.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'Capuchino',
        image: 'https://vinanutrifood.vn/wp-content/uploads/2021/03/ca-phe-capuchino-la-gi-150321-01.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'Winter Latte',
        image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/155108.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'Cookies N Cream',
        image: 'https://www.kingarthurbaking.com/sites/default/files/2022-05/cookies-and-cream-ice-cream_0422.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'Blende coffee Balley',
        image: 'https://p-cdn6coffee.jmsinf.com/tmp/image-thumbnails/aa-recipe-images/image-thumb__31__auto_feab9401f1ce62dd47e2128655684d97/dunkin-coffee-slushie-8888_11271_1653.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'Panna cotta',
        image: '../pictures/panna cotta.jpg',
        price: 120000
    },
    {
        id: 8,
        name: 'Muffin',
        image: '../pictures/muffin.jpg',
        price: 120000
    },
    {
        id: 9,
        name: 'Macaron',
        image: '../pictures/macaron.jpg',
        price: 120000
    },
    {
        id: 10,
        name: 'Mousse cake',
        image: '../pictures/mousse cake.jpg',
        price: 120000
    },
    {
        id: 11,
        name: 'Bánh flan',
        image: '../pictures/bánh flan.jpg',
        price: 120000
    },
    {
        id: 12,
        name: 'Bánh tart',
        image: '../pictures/bánh tart.jpg',
        price: 120000
    }
    
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
