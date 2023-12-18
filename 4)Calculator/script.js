let string = ""; // Empty String.
let buttons = document.querySelectorAll('.button'); 
// query selector all un sare buttons ko select kar lenegi jinki class '.button' hain.
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            document.querySelector('input').value = string;
            string = string + e.target.innerHTML;
        }
    })

})