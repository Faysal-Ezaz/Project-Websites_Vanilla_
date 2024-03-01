## Shopping Cart Project: 
(Will be completely restructured later, now it is only for my reference purpose now.)

For the icons, I am using the website, icons.getbootstrap.com  

For the icon that I select, I shall be using the CDN.
Copy the cdn <link></link>. and then paste it inside the head section.
Then we click on the icon and then the icon font will be copied and pasted in the  

Now for the colors I will use the website (coolers.co)

<h2>The main rule of using <i>Flex-Box</i> is to use it under the <b>parent selector</b>.</h2>   

## Extra notes: 
Now that the previous issue is solved, how do we specifically identify which item we are selecting from the list, for this I shall be using the 'id' element as it is unique for all the cards.  
Using the id I shall be able to specify exactly which card the user is clicking on.  

## What is the use of the bucket.  
The main use of the bucket is that it acts like a placeholder that will hold all the information about which cards the user is clicking on, help with increment decrement of the same element and so on (will be adding more information as I progress on with the project).  
In short the cards on which the user is clicking on is stored by the basket to tell specifically which items are selected by the user.  
Every time we click on the item, an object is created.   

## Search Function inside Increment and Decrement ES6 array function:  
The main aim of this function is to search whether the <i>thing/item</i> actually exists in the basket or not!   
If it exists, then only the item number will increase.   
If it doesnot exist then, this function will push an object inside the basket.  
Then we make an if else statement.  
The logic for the if else statement will be different for both increment and decrement function. 


## There are two types of function in JS: 
<details>
    a) ES6 arrow function.
        a) let generateShop = ()=>{}
    b) normal function. 
        b) funtion abcd(){}
</details>

## This is the removed code from the codebase: 
<details>    
    
    <div class="item">
            <img width="220" src="images/img-2.jpg" alt="">
            <div class="details">
                <h3>Office Shirt</h3>
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
        <div class="item">
            <img width="220" src="images/img-3.jpg" alt="">
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
</details>
