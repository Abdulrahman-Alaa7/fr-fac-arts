let tabs = document.querySelectorAll(".tabs li ");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// console.log(divsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});

// top button

let span = document.querySelector(".up");

window.onscroll = function () {
  myFunction();

  this.scrollY >= 400
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Scroll Progress

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// CountDown
// Set the date we're counting down to
var countDownDate = new Date("jun 10 , 2023 9:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("min").innerHTML = "0";
    document.getElementById("sec").innerHTML = "0";
  }
}, 1000);

// Setting Dark Mode

const darkBody = document.body;
const dark = document.querySelector(".mode");
const darkContent = document.querySelector(".content");
const darkArabic = document.querySelectorAll(".ar");
const darkFr = document.querySelectorAll(".fr");

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  dark.classList.add("active");
  darkBody.classList.add("dark");
  darkContent.classList.add("dark");
  darkArabic.forEach((e) => {
    e.classList.add("dark");
  });
  darkFr.forEach((ev) => {
    ev.classList.add("dark");
  });
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  dark.classList.remove("active");
  darkBody.classList.remove("dark");
  darkContent.classList.remove("dark");
  darkArabic.forEach((e) => {
    e.classList.remove("dark");
  });
  darkFr.forEach((ev) => {
    ev.classList.remove("dark");
  });
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

dark.addEventListener("click", function () {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
