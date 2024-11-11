let currMoleTile; // This helps keep track of which tile has the mole.




window.onload() = function(){
    setGame();
}

function setGame(){
    // setting up the grid for the gameboard in html 
    for(let i = 0; i < 9; i++){
        // creating individual div's for all the tiles. 
        let tile = document.createElement('div'); 
        tile.id = i.toString(); // assigning id to the div tag from '0-8' 
        document.getElementById('board').appendChild(tile);
    }
    setInterval(setMole, 2000); // after every 2 seconds.
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString(); // returned in string format so it can be used with `tile id`
}

function setMole() {

    let mole = document.createElement("img");
    mole.src =  "./monty-mole.png"; 

    let num = getRandomTile(); 
    currMoleTile = document.getElementById(num); 
    currMoleTile.appendChild(mole); 

}