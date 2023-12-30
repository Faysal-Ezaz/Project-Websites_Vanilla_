// targeting an element-id of html using js: 
let shop = document.getElementById('shop');
// succcessfully targeted #short and save it inside a variable.

console.log(shop);

let generateshop =() =>{
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
    `
}

generateshop();