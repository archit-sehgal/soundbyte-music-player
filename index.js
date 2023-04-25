document.querySelector(".cross-icon").addEventListener("click", function () {
    document.querySelector(".cross-icon").classList.add("hide");
    document.querySelector("aside").style.left = "-150px";
    document.querySelector(".expanding-icon").classList.remove("hide");
    document.querySelector("aside").style.height="50px";
    document.querySelector("aside").classList.add("borders");
})
document.querySelector(".expanding-icon").addEventListener("click", function () {
    document.querySelector(".expanding-icon").classList.add("hide");
    document.querySelector("aside").style.left = "0";
    document.querySelector(".cross-icon").classList.remove("hide");
    document.querySelector("aside").style.height="100vh";
    document.querySelector("aside").classList.remove("borders");
})

let audioElement = new Audio("./audio/1.mp3");
let gif = document.getElementById("gif");
let progressbar = document.querySelector(".progress-bar")
let masterplay = document.querySelector(".play");
let masterpause = document.querySelector(".pause");
let mastersongname = document.querySelector(".span-song-name");
let songindex = 0;

// play/pause
document.querySelector(".play").addEventListener("click", function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        document.querySelector(".play").classList.add("hide");
        document.querySelector(".pause").classList.remove("hide");
        gif.style.opacity = 0.5;

        //test
        // document.querySelector(".open-aside").style.left = "-50px";
        // document.querySelector("aside").style.left = "0";
    }
})
document.querySelector(".pause").addEventListener("click", function () {
    audioElement.pause();
    document.querySelector(".pause").classList.add("hide");
    document.querySelector(".play").classList.remove("hide");
    gif.style.opacity = 0;

    // //test
    // document.querySelector(".open-aside").style.left = "0";
    // document.querySelector("aside").style.left = "-200px";
})

// progress bar
audioElement.addEventListener("timeupdate", function () {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressbar.value = progress;
})
// chnge music with bar
progressbar.addEventListener("change", function () {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})

// // song name
// document.querySelector(".album-1").addEventListener("click", function () {
//     var name = document.querySelector(".song1-name").innerHTML;
//     document.querySelector(".span-song-name").textContent = name;
// })
// document.querySelector(".album-2").addEventListener("click", function () {
//     var name = document.querySelector(".song2-name").textContent;
//     document.querySelector(".span-song-name").textContent = name;
// })
// document.querySelector(".album-3").addEventListener("click", function () {
//     var name = document.querySelector(".song3-name").textContent;
//     document.querySelector(".span-song-name").textContent = name;
// })
// document.querySelector(".album-4").addEventListener("click", function () {
//     var name = document.querySelector(".song4-name").textContent;
//     document.querySelector(".span-song-name").textContent = name;
// })

// document.querySelector(".album-5").addEventListener("click", function () {
//     var name = document.querySelector(".song5-name").textContent;
//     document.querySelector(".span-song-name").textContent = name;
// })
// document.querySelector(".album-6").addEventListener("click", function () {
//     var name = document.querySelector(".song6-name").textContent;
//     document.querySelector(".span-song-name").textContent = name;
// })
// document.querySelector(".album-7").addEventListener("click", function () {
//     var name = document.querySelector(".song7-name").textContent;
//     document.querySelector(".span-song-name").textContent = name;
// })
// document.querySelector(".album-8").addEventListener("click", function () {
//     var name = document.querySelector(".song8-name").textContent;
//     document.querySelector(".span-song-name").textContent = name;
// })
// song items
let songitem = Array.from(document.getElementsByClassName("album"));

// song index
let songs = [
    { songname: "Let Me Down Slowly", filepath: "audio/1.mp3" },
    { songname: "Perfect", filepath: "audio/2.mp3" },
    { songname: "Demons", filepath: "audio/3.mp3" },
    { songname: "Believer", filepath: "audio/4.mp3" },
    { songname: "Bad Liar", filepath: "audio/5.mp3" },
    { songname: "Hold On", filepath: "audio/6.mp3" },
    { songname: "A Thousand Years", filepath: "audio/7.mp3" },
    { songname: "Memories", filepath: "audio/8.mp3" },
]
// change name of song
songitem.forEach((element, i) => {
    element.getElementsByClassName("song-name")[0].innerText = songs[i].songname;
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName("boxplaypause")).forEach((element) => {

        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("boxplaypause")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = "audio/" + (songindex + 1) + ".mp3";
        mastersongname.innerText = songs[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.add("hide");
        masterpause.classList.remove("hide");
    })
})

// next song
document.querySelector(".forw-song").addEventListener("click", () => {
    if (songindex >= 7) {
        songindex = 0
    } else {
        songindex += 1;
    }
    audioElement.src = "audio/" + (songindex + 1) + ".mp3";
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.add("hide");
    masterpause.classList.remove("hide");
})
// back song
document.querySelector(".back-song").addEventListener("click", () => {
    if (songindex <= 0) {
        songindex = 0
    } else {
        songindex -= 1;
    }
    audioElement.src = "audio/" + (songindex + 1) + ".mp3";
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.add("hide");
    masterpause.classList.remove("hide");
})


