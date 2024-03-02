// targeting an element-id of html using js: 
let shop = document.getElementById("shop");
// succcessfully targeted #short and save it inside a variable.

let shopItemsData = [ // declaring an array that has many objects.
    {
        id: "1",
        name: "Casual Shirt", 
        price: 45, 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        img: "images/img-1.jpg"
        // successfully defined one item(object).
    }, 
    {
        id: "2",
        name: "Office Shirt", 
        price: 45, 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        img: "images/img-2.jpg"
    }, 
    {
        id: "3",
        name: "T Shirt", 
        price: 25, 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        img: "images/img-3.jpg"
    }, 
    {
        id: "4",
        name: "Mens Suit", 
        price: 300, 
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        img: "images/img-4.jpg"
    }
];
// the above code denotes that we have 4 items to sell.

let basket = [
];

// all the code below is hard coded, and we need to automate it, as we need a lot of the cards. 
let generateshop = () =>{ // this is an ES6 arrow function.
    return (shop.innerHTML=  shopItemsData.map( (x)=> {
            // instead of using x.items, x. price, etc. We will be using the concept of DESTRUCTURING: 
            let {id, name, price, desc, img} = x;
        return `
            <div id=product-id-${id} class="item">
                <img width="220" src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2> $ ${price}</h2>
                        <div class="buttons">
                            <!-- here we use bootstrap icons. -->
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            
                            <div id=${id} class="quantity">0</div>  
                            
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i> 
                        </div>
                    </div>
                </div>
            </div>
        `;
    } ).join(""));
};
// The reason behind creating the id is so that the '0' will be targetted using the id.

generateshop(); // This is the function call that displays all the content. 

// So far so good, now I will work on the 'increment' and the 'decrement' funtion. 
// working on the ES6 arrow functions. 
// INCREMENT FUNCTION.
let increment = (id) => {
    let selectedItem = id; 
    let search = basket.find((x) => x.id === selectedItem);   

    // logic behind this if else, if the item exists, increment, if item doesnot exist, push object to basket.
    if(search === undefined){
        basket.push({
            id: selectedItem, 
            item: 1, 
        });
    }
    else{
        search.item+=1; 
    }
    // console.log(basket); 
    update(selectedItem); // we get the id of the item. 
};
// DECREMENT FUNCTION.
let decrement = (id) => {
    let selectedItem = id; 
    let search = basket.find((x) => x.id === selectedItem);   

    // logic has to be changed. 
    if(search.item === 0) return; // this return statement stops items from moving to negative. 
    else{
        search.item-=1; 
    }
    // console.log(basket);
    update(selectedItem); // we get the unique id of the item.
};
// UPDATE FUNCTION to update the number after increment or decrement.
let update = (id) => {
    // making a quick search function, if and only if item exists, only then the number will increase. 
    let search = basket.find((x) => x.id === id); // using the find((what i search for) => (what i am searching against === (tyring to match with))) method.
    document.getElementById(id).innerHTML = search.item; 
    console.log(search.item); 
    calculation(); // only trigerred when the update() is triggered.  
};  

// want this funciton to run only when the update funciton gets trigerred. 
let calculation = (id) => {
    let cartIcon = document.getElementById("cartAmount"); 
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y) => x+y, 0); 
    console.log(); // in the second function, x and y are used.
    // the reason for using two numbers is so that the one number will store the addition of the two numbers. 
};