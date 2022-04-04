"use strict";

const bodyEl = document.querySelector("body");
const cardLikeEls = document.getElementsByClassName("like-tag");
const cardLikeHeartEls = document.getElementsByClassName("heart");
const cardPlaceBidBtns = document.getElementsByClassName("card__place-bid");
const timerPlaceholderEls = document.getElementsByClassName("card__timer--txt");
const cardPlaceBidTxt = document.getElementsByClassName("place-bid__txt");
const priceETH = document.getElementsByClassName("price__ETH");
const priceUSD = document.getElementsByClassName("price__USD");
const scrollTop = document.querySelector(".scrolltop");
const headerEl = document.querySelector(".header");
const searchIcon = document.querySelector(".functionalities__search");

const likeClickCount = [];
for (const [i] of Object.entries(cardLikeEls)) {
  cardLikeEls[i].addEventListener("click", function () {
    likeClickCount[i] ||= 0;
    likeClickCount[i] += 1;
    let likesCount = Number(this.querySelector("span").innerText);
    likesCount = likeClickCount[i] % 2 !== 0 ? likesCount + 1 : likesCount - 1;
    this.querySelector("span").innerText = likesCount;
    cardLikeHeartEls[i].classList.toggle("is-active");
  });
}

for (const [i] of Object.entries(cardPlaceBidBtns)) {
  cardPlaceBidBtns[i].onclick = () => {
    document.URL.includes("index.html")
      ? (cardPlaceBidTxt[i].innerHTML = "Thanks")
      : (cardPlaceBidTxt[i].innerHTML =
          "New NFT Item Has Been Added to Your Cart");

    cardPlaceBidBtns[i].classList.add("place-bid--active");
  };
}

const countDownDates = [
  new Date("Apr 17, 2022 15:37:25").getTime(),
  new Date("Apr 15, 2022 11:11:55").getTime(),
  new Date("Apr 19, 2022 01:53:00").getTime(),
  new Date("Apr 21, 2022 09:00:00").getTime(),
  new Date("Apr 20, 2022 21:25:37").getTime(),
  new Date("Apr 30, 2022 18:44:14").getTime(),
  new Date("Apr 25, 2022 10:04:40").getTime(),
  new Date("Apr 16, 2022 13:31:05").getTime(),
  new Date("Apr 25, 2022 18:44:30").getTime(),
  new Date("Apr 5, 2022 20:14:20").getTime(),
  new Date("Apr 19, 2022 01:53:00").getTime(),
  new Date("Apr 21, 2022 09:00:00").getTime(),
  new Date("Apr 20, 2022 21:25:37").getTime(),
];
for (const [i] of Object.entries(timerPlaceholderEls)) {
  var cardTimer = setInterval(function () {
    var countDownDate = countDownDates[i];
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerPlaceholderEls[i].innerText =
      days + " : " + hours + " : " + minutes + " : " + seconds;

    if (distance < 0) {
      clearInterval(cardTimer);
      timerPlaceholderEls[i].innerText = "EXPIRED";
    }
  }, 1000);
}

for (const [i] of Object.entries(priceETH)) {
  const priceInEth = Number(priceETH[i].innerText.split(" ")[0]);
  const ethPriceInUSD = (priceInEth * 2.594).toFixed(3);
  priceUSD[i].innerText = ` = $${ethPriceInUSD}`;
}

window.addEventListener("scroll", function () {
  let yAxis = window.scrollY;
  if (yAxis >= 100) {
    scrollTop.classList.remove("hidden");
  } else {
    scrollTop.classList.add("hidden");
  }
});

window.addEventListener("scroll", function () {
  let yAxis = window.scrollY;
  if (yAxis >= 70) {
    headerEl.classList.add("sticky-nav");
  } else {
    headerEl.classList.remove("sticky-nav");
  }
});

function openSearch() {
  document.querySelector(".searchbar").classList.remove("d-none");
  document.querySelector(".blur-bg").classList.remove("d-none");
}

function closeSearch() {
  document.querySelector(".searchbar").classList.add("d-none");
  document.querySelector(".blur-bg").classList.add("d-none");
}

document.querySelector(".blur-bg").addEventListener("click", closeSearch);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeSearch();
  } else if (e.ctrlKey && (e.key === "b" || e.key === "B")) {
    openSearch();
  }
});

searchIcon.addEventListener("click", openSearch);

const logoColorChanger = function (isLightTheme) {
  if (isLightTheme) {
    document.querySelector(".logo").src = "assets/img/01_header/logo_light.png";
  } else {
    document.querySelector(".logo").src = "assets/img/01_header/logo_dark.png";
  }
};

const theme = localStorage.getItem("theme");
if (theme) {
  bodyEl.classList.add(theme);
  if (bodyEl.classList.contains("light")) {
    logoColorChanger(true);
  }
}

document.querySelector(".theme-light").addEventListener("click", function () {
  bodyEl.classList.replace("dark", "light");
  logoColorChanger(true);
  localStorage.setItem("theme", "light");
});
document.querySelector(".theme-dark").addEventListener("click", function () {
  bodyEl.classList.replace("light", "dark");
  logoColorChanger(false);
  localStorage.setItem("theme", "dark");
});
