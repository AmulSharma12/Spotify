console.log("welcome to spotify")

//intialisation of variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

console.log(document.getElementsByClassName('songItem'));
let songItems = Array.from(document.getElementsByClassName('songItem'));
console.log(songItems);

//masterSongName
let masterSongName = document.getElementById('masterSongName');
//console.log(document.getElementById('masterSongName'));




let songs = [
    {songName : "Neon BLADE", filePath : "songs/1.mp3" , coverPath : "covers/1.jfif"},
    {songName : "NF", filePath : "songs/2.mp3" , coverPath : "covers/2.jfif"},
    { songName: "Warriyo Mortals", filePath : "songs/3.mp3" , coverPath : "covers/3.jfif"},
    {songName : "Stay - Justin", filePath : "songs/4.mp3" , coverPath : "covers/4.jfif"},
    {songName : "Love Again - Dua Lipa", filePath : "songs/5.mp3" , coverPath : "covers/5.jfif"},
    {songName : "Safari - Sugar Brownies", filePath : "songs/6.mp3" , coverPath : "covers/6.jfif"},
]

songItems.forEach((element, i) => {
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    console.log(element.getElementsByTagName("img"));
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//handle play/pause click
masterPlay.addEventListener('click', () => {
    var myImage = document.getElementById('masterPlay');
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        var myImage = document.getElementById('masterPlay');
        myImage.src = "pause.jfif";
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        myImage.src = "play.png";
        gif.style.opacity = 0;
    }

})

//event listeners
audioElement.addEventListener('timeupdate', () => {
    console.log('timeUpdate');

    //update thee seekbar
    progressBar = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    //console.log(progressBar)
    myProgressBar.value = progressBar;

})


myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

//makeAllPlays()
const makeAllPlays = () => {

    var image = document.getElementsByClassName('songItemPlay');
    for (let i = 0; i < image.length; i++)
    {
        image[i].src = "play.png";
    }
}

//for the container  play functionality
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

    element.addEventListener('click', (e) => {
        makeAllPlays()
        //console.log(e.target.src);

        songIndex = parseInt(e.target.id);
        e.target.src = "pause.jfif";
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        var myImage = document.getElementById('masterPlay');
        myImage.src = "pause.jfif";
        gif.style.opacity = 1;

    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 5) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    var myImage = document.getElementById('masterPlay');
    myImage.src = "pause.jfif";
    gif.style.opacity = 1;
    
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 5;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    var myImage = document.getElementById('masterPlay');
    myImage.src = "pause.jfif";
    gif.style.opacity = 1;

})