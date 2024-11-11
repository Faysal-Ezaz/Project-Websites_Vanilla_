


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
}