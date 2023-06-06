let countSpan = document.querySelector(".quiz-app .count span");
let bullets = document.querySelector(".bullets");
let spansBullets = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let submitButton = document.querySelector(".submit-button");
let finalyResault = document.querySelector(".results");
let countDown = document.querySelector(".countdown");
const btnRightAns = document.querySelector(".right-ans");
const myInput = document.querySelector(".answer-input");
const val = document.querySelector("textarea").value;
const wrong = document.querySelector(".wrong-answer");

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
      // createBullets(questionCount);

      //Add Question Data
      addQuestionData(myObjectJs[currentIndex], questionCount);

      //Start Count Down
      // counDown(5, questionCount);

      let theAns = document.querySelector(".the-answer h3");
      btnRightAns.onclick = () => {
        let theAnswer = myObjectJs[currentIndex].right_answer;
        let thea = document.createTextNode(theAnswer);
        theAns.appendChild(thea);
        theAns.style.display = "block";
        btnRightAns.disabled = true;
      };

      // New

      //Click On Submit
      submitButton.onclick = () => {
        let theRightAnswer = myObjectJs[currentIndex].right_answer;
        const ans = theRightAnswer;
        const ans1 = ans.replace(".", " ");
        const ans2 = ans1.replace(" : ", " ");
        const ans3 = ans2.replace("  ", " ");
        const ans4 = ans3.replace("   ", " ");
        const ans5 = ans4.trim();
        const val = document.querySelector("textarea").value;
        const val2 = val.replace(".", " ");
        const val3 = val2.replace(" : ", " ");
        const val4 = val3.replace("  ", " ");
        const val5 = val4.replace("   ", " ");
        const val6 = val5.trim();

        if (ans5.toLowerCase() === val6.toLowerCase()) {
          //Get Right Answer
          //Increase Index
          currentIndex++;
          //Cheack The Answer
          // cheackAnswer(theRightAnswer, questionCount);
          //Remove Privious Question
          btnRightAns.disabled = false;
          theAns.style.display = "none";
          wrong.style.display = "none";
          theAns.innerHTML = "";
          quizArea.innerHTML = "";
          answersArea.innerHTML = "";
          myInput.value = "";

          //Add Question Data Again To Continue
          addQuestionData(myObjectJs[currentIndex], questionCount);
          rightAnswers++;
          // Handle Bullets Classes
          // handleBullets();
          //Start Count Down Again
          clearInterval(countdownInterval);
          // counDown(5, questionCount);
          //Show Resaults
          showResaults(questionCount);
          number = number++;
        } else {
          myInput.value = "";
          wrong.style.display = "block";
        }
      };
    }
  };

  myRequest.open("Get", "/database/quiz-terre.json", true);
  myRequest.send();
}
getQuestions();

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
  }
}

function showResaults(count) {
  let theResault;
  if (currentIndex === count) {
    quizArea.remove();
    answersArea.remove();
    submitButton.remove();
    bullets.remove();
    myInput.remove();

    if (rightAnswers > count / 2 && rightAnswers < count) {
      theResault = `<div > <span class="good ">Good</span> <h6 class="num"> ${rightAnswers} From ${count} </h6> 
                                  <img src ="/images/good.gif" alt="con" class="img-a"/>

                   </div>`;
    } else if (rightAnswers === count) {
      theResault = `<div > <span class="perfect">Congratulations</span><h6 class="num"> ${rightAnswers} From ${count}</h6>
    
                            <img src ="/images/congra.gif" alt="con" class="img-a"/>
      </div>`;
    } else {
      theResault = `<div> <span class="bad">Bad</span> <h6 class="num">${rightAnswers} From ${count}</h6> 
                                  <img src ="/images/wrong.gif" alt="con" class="img-a"/>
      </div>`;
    }

    btnRightAns.style.display = "none";
    finalyResault.innerHTML = theResault;
    finalyResault.style.padding = "10px";
    finalyResault.style.backgroundColor = "white";
    finalyResault.style.marginTop = "10px";
  }
}

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
