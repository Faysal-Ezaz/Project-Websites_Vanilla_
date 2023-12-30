// targeting an element-id of html using js: 
let shop = document.getElementById('shop');
// succcessfully targeted #short and save it inside a variable.

let shopItemsData = [
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
]
// the above code denotes that we have 4 items to sell.

console.log(shop);

// all the code below is hard coded, and we need to automate it, as we need a lot of the cards. 
let generateshop =() =>{
    return (shop.innerHTML=  shopItemsData.map( ()=> {
        return `
        <div class="item">
            <img width="220" src="images/img-1.jpg" alt="">
            <div class="details">
                <h3>Casual Shirt</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <div class="price-quantity">
                    <h2> $ 45</h2>
                    <div class="buttons">
                        <!-- here we use bootstrap icons. -->
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>  <!--This is the number of items between the plus and the minus symbols-->
                        <i class="bi bi-plus-lg"></i> 
                    </div>
                </div>
            </div>
        </div>
        `;
    } ).join(""));
};

generateshop();