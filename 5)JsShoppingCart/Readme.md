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

## Update Function: 
This function needs to run every time we click on plus or minus button.  
This funtion is in use with <b>Increment</b> and <b>Decrement</b> ES6 arrow function and yeilds the output as the <i>unique id</i> that is being increment or decremented.  
Now the <b>id</b> used in <i>update</i> funtion is directly related to <b>generateShop</b>'s `<div id=${id} class="quantity">0</div>` line.  
So the output generated shall be in that specific form itself. To execute the same, `let search = basket.find((x) => x.id === id);` inside the update function helps make the required changes.  

 ## Working on the Cart Symbol:  
 We will add up all the numbers from the items and display it as the <b>cart number</b>.  
 New ES6 arrow function will be created with the name <b><i>calculation</i></b>.  
 This function calculation will run only when the <b><i>update function</i> is triggered</b>.  
 Since the unique element is <b>id</b> so we use it to calculate the final number.  
 We need to make changes to the cart icon so we copy the <b>id</b> of the cart icon and use `document.getElementById` with it and save it to the variable `cartIcon`.  
 `basket.map((x)=>x.item).reduce((x,y) => x+y, 0)`
Using this piece of code, we show the final number to the user as cartNumber.  

## How to make data stay every time we hit refresh.  (setItem, getItem), (JSON.stringify), (JSON.parse): 
To do something of this sort, we need to store the it in <b>local storage</b> to save the data.  
Need to click on <b>>></b> button.  
Following this need to click on <b>Application</b>.   
But before this, we need to push specifically the <b>basket</b> into the local storage to store the data.  
After this the browser will remember which item we pick and will store it in the local storage.  
Ever time we click on the <i>plus</i> or <i>minus</i> button, we want the local storage to be trigerred.  
for this we use the command `localStorage.setItem("data", JSON.stringify(basket));`  `setItem is used to set the data to the local storage`.  
here <i>data</i> is the name for the key (of the key value pair) and <i>basket</i> is the object that is pushed to store the data.  
the reason for using `JSON.stringify` is that it <i>returns</i> the <b>data in a readable format</b>.  
Still the work is not done since every time we click on refresh, the values on the cart refreshes to 0 but the cart value is stored in the local storage.  
Main aim is to <b><i>retrieve</i></b> the data from the <b>local storage</b> to the application.    
Up-untill this point, `let basket = JSON.parse(localStorage.getItem("data")) || [];` If we have local data it will be retrieved otherwise its just an empty array.  
But the problem that we face is: when we refresh, the numbers reset and when we click on any of the icons, the original number comes back from the local memory,  
In order to prevent this behavious, we need to keep updated the funciton, hence we use the <b>search</b> function inside the main template `generateShop`.  
`let search = basket.find((x)=>x.id === id);` Here, we are matching against the id's. After this the function will check for all the id's one by one.


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
