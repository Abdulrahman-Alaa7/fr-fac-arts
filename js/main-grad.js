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

dark.addEventListener("click", function darkMode() {
  dark.classList.toggle("active");
  darkBody.classList.toggle("dark");
});

// Start Gallery Section

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", function (e) {
    // Create Overlay Element
    let overlay = document.createElement("div");

    overlay.className = "popup-overlay";

    // Append Overlay To Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    popupBox.className = "popup-box";

    /////////////// The Heading //////////////////
    // if (img.alt !== null) {
    //   //Create The Heading
    //   let imgHeading = document.createElement("h3");

    //   // Create Text For Heading
    //   let imgText = document.createTextNode(img.alt);

    //   // Append The Text To The Heading
    //   imgHeading.appendChild(imgText);

    //   // Append The Heading To The Popup Box
    //   popupBox.appendChild(imgHeading);
    // }
    //////////////// The Heading ///////////////////

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image "src"
    popupImage.src = img.src;

    // Append Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To The Body
    document.body.appendChild(popupBox);

    // Create The Close Button
    let closeBurron = document.createElement("span");

    closeBurron.className = "close";

    let buttonText = document.createTextNode("x");

    closeBurron.appendChild(buttonText);

    // Append Span Close To The Popup Box
    popupBox.appendChild(closeBurron);
  });
});

// Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    // Reomve The Current Popup
    e.target.parentNode.remove();
    // Remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// End Gallery Section
