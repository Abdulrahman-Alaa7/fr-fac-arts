// CountDown
// Set the date we're counting down to
var countDownDate = new Date("jun 19, 2023 11:00:00").getTime();

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
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  dark.classList.remove("active");
  darkBody.classList.remove("dark");
  darkContent.classList.remove("dark");
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

// dropdown

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const btn = document.querySelector(".dropbtn");

btn.addEventListener("click", function () {
  document.getElementById("myDropdown").classList.toggle("show");
});
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
