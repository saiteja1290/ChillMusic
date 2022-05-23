// console.log("HELLO")
// let audioelement = new Audio("/songs/1.mp3");
let play = document.getElementById("two");
let myprogbar = document.getElementById("myprogbar");
let forward = document.getElementById("three");
let songitems = Array.from(document.getElementsByClassName("songitem"));
let mastersongname = document.getElementById("mastersongname");
let backward = document.getElementById("one");
let pause = document.getElementById("four");

let songs = [
  { songname: "Kaikai Kitan (JJK) - Kijugo", filepath: "/songs/Kaikai Kitan (JJK) - Kijugo.mp3" },
  { songname: "Kiss Of Death (Darling In The Franxx) - Kijuro", filepath: "/songs/Kiss Of Death (Darling In The Franxx) - Kijuro.mp3" },
  { songname: "Lost In Paradise (JJK) - Kijugo", filepath: "/songs/Lost In Paradise (JJK) - Kijugo.mp3" },
  { songname: "My War (AOT) - Kijugo", filepath: "/songs/My War (AOT) - Kijugo.mp3" },
  { songname: "Shinzo Wo Sasageyo (AOT) - Kijuro", filepath: "/songs/Shinzo Wo Sasageyo (AOT) - Kijuro.mp3" },
  { songname: "Unravel (Tokyo Ghoul) - Kijugo", filepath: "/songs/Unravel (Tokyo Ghoul) - Kijugo.mp3" },
  { songname: "kataware doki (Your Name) - Kijugo", filepath: "/songs/kataware doki (Your Name) - Kijugo.mp3" },
];
let songindex = 0;
// randomnumber = Math.floor((Math.random() * 5));
let audioelement = new Audio(songs[songindex].filepath);

play.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime == 0) {
    audioelement.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    mastersongname.innerHTML = songs[songindex].songname;
  } else {
    audioelement.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    mastersongname.innerHTML = songs[songindex].songname;
  }
});

if (audioelement.currentTime == audioelement.duration) {
}
forward.addEventListener("click", () => {
  // Forward
  audioelement.pause();
  if (songindex >= 4) {
    songindex = 0;
  } else {
    songindex++;
  }
  audioelement = new Audio(songs[songindex].filepath);
  if (audioelement.paused || audioelement.currentTime == 0) {
    audioelement.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    mastersongname.innerHTML = songs[songindex].songname;
  } else {
    audioelement.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    mastersongname.innerHTML = songs[songindex].songname;
  }
  audioelement.addEventListener("timeupdate", () => {
    progress = parseInt(
      (audioelement.currentTime / audioelement.duration) * 100
    );
    myprogbar.value = progress;
  });

  myprogbar.addEventListener("change", () => {
    audioelement.currentTime = (myprogbar.value * audioelement.duration) / 100;
  });
});

backward.addEventListener("click", () => {
  // backward
  audioelement.pause();
  if ((songindex = 0)) {
    songindex = 4;
  } else {
    songindex--;
  }
  audioelement = new Audio(songs[songindex].filepath);
  if (audioelement.paused || audioelement.currentTime == 0) {
    audioelement.play();
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    mastersongname.innerHTML = songs[songindex].songname;
  } else {
    audioelement.pause();
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    mastersongname.innerHTML = songs[songindex].songname;
  }
  audioelement.addEventListener("timeupdate", () => {
    progress = parseInt(
      (audioelement.currentTime / audioelement.duration) * 100
    );
    myprogbar.value = progress;
  });

  myprogbar.addEventListener("change", () => {
    audioelement.currentTime = (myprogbar.value * audioelement.duration) / 100;
  });
});

audioelement.addEventListener("timeupdate", () => {
  progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
  myprogbar.value = progress;
});

myprogbar.addEventListener("change", () => {
  audioelement.currentTime = (myprogbar.value * audioelement.duration) / 100;
});

pause.addEventListener("click", () => {
  audioelement.pause();
  play.classList.remove("fa-pause");
  play.classList.add("fa-play");
});
