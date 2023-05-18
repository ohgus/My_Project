const bg = [
    {
        id:1,
        url: "cutedabak.jpg"
    },
    {
        id:2,
        url: "hatleo.jpg"
    },
    {
        id:3,
        url: "leosleep.jpg"
    },
    {
        id:4,
        url: "bkms1.jpg"
    },
    {
        id:5,
        url: "bkms2.jpg"
    },
    {
        id:6,
        url: "dl.jpg"
    },
    {
        id:7,
        url: "dabak.jpg"
    }
]
const todayBg = bg[Math.floor(Math.random() * bg.length)].url;

const bgImage = document.createElement("img");
bgImage.src = `./bg/${todayBg}`;

document.body.prepend(bgImage);