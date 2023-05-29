// Rendirect ke situs google
function searchGoogle() {
  const input = document.getElementById("Input").value;
  const defaultSearch = "Air Terjun Tretes";
  const searchUrl = `https://www.google.com/search?q=${defaultSearch}+${input}`;
  window.location.href = searchUrl;
}

// Ganti warna tombol search
const btn = document.querySelector(".cari button");
btn.addEventListener("mouseover", ganti);
btn.addEventListener("mouseout", out);
function ganti() {
  btn.style.color = "white";
  btn.style.backgroundColor = "forestgreen";
  btn.style.borderColor = "white";
  btn.style.border = "solid";
}
function out() {
  btn.style = "";
}

// Hover Galery
const gambar = document.querySelectorAll("#galeri .foto img");

for (let i = 0; i < gambar.length; i++) {
  gambar[i].addEventListener("mouseover", bulat);
  gambar[i].addEventListener("mouseout", normal);
  function bulat() {
    gambar[i].style.borderRadius = "50px";
    gambar[i].style.filter = "brightness(150%)";
  }
  function normal() {
    gambar[i].style = "";
  }
}

// slider home
const images = [
  "img/home-tretes.jpg",
  "img/home-tretes1.jpg",
  "img/home-tretes2.jpg",
];
const img = document.querySelector("#home img");

let hitungIndex = 0;
setInterval(function () {
  setTimeout(function () {
    img.src = images[hitungIndex];
    hitungIndex++;
    if (hitungIndex == images.length) {
      hitungIndex = 0;
    }
  }, 500);
}, 3000);

// Muncukan Manu Navbar
const toggleSidebar = document.querySelector("#toggle-sidebar");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
  toggleSidebar.classList.toggle("buka");
});

// Warna Navbar
const btns = document.querySelector(".sidebar");
const nav = btns.getElementsByClassName("btn");

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("aktif");
    current[0].className = current[0].className.replace(" aktif", "");
    this.className += " aktif";
  });
}

// Event timer

function setTimer(target, text) {
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    let selisih = target - now;
    let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    let jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((selisih % (1000 * 60)) / 1000);

    text.innerHTML =
      hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik";

    if (selisih <= 0) {
      clearInterval(countdown);
      text.innerHTML = "Expired !!!";
    }
  }, 1000);
}

const target = new Date("July 1, 2023 16:12:00").getTime();
const target1 = new Date("Maret 1, 2024 12:11:50").getTime();
const text = document.getElementById("waktu1");
const text1 = document.getElementById("waktu2");
setTimer(target, text);
setTimer(target1, text1);

// api
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=-8.2329&lon=113.3026&appid=5416120bf0b1e911eb62d7a270626087&units=metric"
)
  .then((respon) => respon.json())
  .then((data) => {
    let cuaca = document.querySelector("#cuaca");
    cuaca.innerHTML = "Cuaca : " + data.weather[0].description;
    let suhu = document.querySelector("#suhu");
    suhu.innerHTML = "Suhu : " + data.main.temp + " °C";
    let icon = document.querySelector("#icon");
    icon.src =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let angin = document.querySelector("#angin");
    angin.innerHTML = "Kecepatan Angin : " + data.wind.speed + " km/h";
  });
