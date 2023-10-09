console.log("Welcome to Spotify"); 

// Initializing the variables
let songIndex = 0; /* kaunsa song play ho rha hai*/
let audioElement = new Audio('1.mp3'); /* */
let masterPlay = document.getElementById('masterPlay'); /* */
let myProgressBar = document.getElementById('myProgressBar')

let songs = [
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverPath: "1.jpg"}
]
// audioElement.play() 

// Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play(); 
    }
})
// Listening to Events
myProgressBar.addEventListener('timeUpdate', ()=>{
    console.log('timeUpdate');
    // Update Seekbar
})