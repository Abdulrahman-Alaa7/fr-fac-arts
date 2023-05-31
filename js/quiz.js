//Select Elements

let countSpan = document.querySelector(".quiz-app .count span");
let bullets = document.querySelector(".bullets");
let spansBullets = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let finalyResault = document.querySelector(".results");
let countDown = document.querySelector(".countdown");
//Set Options
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;
let number = 1;

function getQuestions() {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let myObjectJs = JSON.parse(this.responseText);
      let questionCount = myObjectJs.length;

      //Create Bullets + Set Question Count
      createBullets(questionCount);

      //Add Question Data
      addQuestionData(myObjectJs[currentIndex], questionCount);

      //Start Count Down
      // counDown(5, questionCount);

      const btnRightAns = document.querySelector(".right-ans");
      let theAns = document.querySelector(".the-answer h3");
      btnRightAns.onclick = () => {
        let theAnswer = myObjectJs[currentIndex].right_answer;
        let thea = document.createTextNode(theAnswer);
        theAns.appendChild(thea);
        theAns.style.display = "block";
        btnRightAns.disabled = true;
      };

      //Click On Submit
      submitButton.onclick = () => {
        //Get Right Answer
        let theRightAnswer = myObjectJs[currentIndex].right_answer;
        //Increase Index
        currentIndex++;
        //Cheack The Answer
        cheackAnswer(theRightAnswer, questionCount);
        //Remove Privious Question
        btnRightAns.disabled = false;
        theAns.style.display = "none";
        theAns.innerHTML = "";
        quizArea.innerHTML = "";
        answersArea.innerHTML = "";

        //Add Question Data Again To Continue
        addQuestionData(myObjectJs[currentIndex], questionCount);
        // Handle Bullets Classes
        // handleBullets();
        //Start Count Down Again
        clearInterval(countdownInterval);
        // counDown(5, questionCount);
        //Show Resaults
        showResaults(questionCount);
        number = number++;
      };
    }
  };

  myRequest.open("Get", "/database/quiz.json", true);
  myRequest.send();
}
getQuestions();

function createBullets(num) {
  countSpan.innerHTML = num;

  //Create Spans
  for (let i = 0; i < num; i++) {
    //Create Bullets
    let theBullet = document.createElement("span");
    //Cheack if First Span
    if (i === 0) {
      theBullet.className = "on";
    }
    //Append Bullets To Main Bullets Container
    spansBullets.appendChild(theBullet);
  }
}

function addQuestionData(obj, count) {
  if (currentIndex < count) {
    //Create H2 Question Title
    let questionTitle = document.createElement("h2");

    //Create Question Text
    let questionText = document.createTextNode(`${number++}- ${obj.title}`);

    //Append Text To H2
    questionTitle.appendChild(questionText);
    //Append H2 To The Quiz Area
    quizArea.appendChild(questionTitle);
    //Create The Answers

    for (let i = 1; i <= 3; i++) {
      //Create Main Answers Div
      let mainDiv = document.createElement("div");
      //Add Class To Main Div
      mainDiv.className = "answer";
      //Creat Input Radio
      let radioInput = document.createElement("input");
      // Add Type + Name + Id + Data Attribute To My Input
      radioInput.name = "question";
      radioInput.type = "radio";
      radioInput.id = `answer_${i}`;
      radioInput.dataset.answer = obj[`answer_${i}`];
      //Make First Option Selected / 'Cheacked'
      if (i === 1) {
        radioInput.checked = true;
      }
      //Create Label
      let theLabel = document.createElement("label");
      // Add For Attribute
      theLabel.htmlFor = `answer_${i}`;
      //Create Label Text
      let labelText = document.createTextNode(obj[`answer_${i}`]);
      //Add The Text To Label
      theLabel.appendChild(labelText);
      //Add Input To MainDiv
      mainDiv.appendChild(radioInput);
      //Add Label To MainDiv
      mainDiv.appendChild(theLabel);
      //Add MainDiv To Answers Area
      answersArea.appendChild(mainDiv);
    }
  }
}

function cheackAnswer(rAnswer, count) {
  let answers = document.getElementsByName("question");
  let theChossenAnswer;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      theChossenAnswer = answers[i].dataset.answer;
    }
  }

  if (rAnswer === theChossenAnswer) {
    rightAnswers++;
  }
}

// function handleBullets() {
//   let bulletsSpans = document.querySelectorAll(".bullets .spans span ");
//   let arrayOfSpan = Array.from(bulletsSpans);
//   arrayOfSpan.forEach((span, index) => {
//     if (currentIndex === index) {
//       span.className = "on";
//     }
//   });
// }

function showResaults(count) {
  let theResault;
  if (currentIndex === count) {
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();
    bullets.remove();

    if (rightAnswers > count / 2 && rightAnswers < count) {
      theResault = `<span class="good">Good</span>, ${rightAnswers} From ${count}`;
    } else if (rightAnswers === count) {
      theResault = `<span class="perfect">Perfect</span>, ${rightAnswers} From ${count}`;
    } else {
      theResault = `<span class="bad">Bad</span>, ${rightAnswers} From ${count}`;
    }

    finalyResault.innerHTML = theResault;
    finalyResault.style.padding = "10px";
    finalyResault.style.backgroundColor = "white";
    finalyResault.style.marginTop = "10px";
  }
}

// function counDown(duration, count) {
//   if (currentIndex < count) {
//     let minutes, seconds;
//     countdownInterval = setInterval(() => {
//       minutes = parseInt(duration / 60);
//       seconds = parseInt(duration % 60);

//       //Optmise Minutes And Secons "01:02" When Less Than Ten'10'
//       minutes = minutes < 10 ? `0${minutes}` : minutes;
//       seconds = seconds < 10 ? `0${seconds}` : seconds;

//       countDown.innerHTML = `${minutes}:${seconds}`;

//       if (--duration < 0) {
//         clearInterval(countdownInterval);
//         submitButton.click();
//       }
//     }, 1000);
//   }
// }

// //   {
//     "title": "",
//     "answer_1": "",
//     "answer_2": "",
//     "answer_3": "",
//     "right_answer": ""
//   },

// Setting Dark Mode

const darkBody = document.body;
const dark = document.querySelector(".mode");
const darkContent = document.querySelector(".quiz-app");
const darkArabic = document.querySelector(".quiz-info");
const darkFr = document.querySelector(".quiz-area");
const darkFr2 = document.querySelector(".answers-area");

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  dark.classList.add("active");
  darkBody.classList.add("dark");
  darkContent.classList.add("dark");
  darkArabic.classList.add("dark");
  darkFr.classList.add("dark");
  darkFr2.classList.add("dark");

  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  dark.classList.remove("active");
  darkBody.classList.remove("dark");
  darkContent.classList.remove("dark");
  darkArabic.classList.remove("dark");
  darkFr.classList.remove("dark");
  darkFr2.classList.remove("dark");

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
