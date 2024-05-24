"use client";
import React, { FC, useEffect, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import QuizMcq from "../../../database/quiz-two.json";
type Question = {
  title: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  right_answer: string;
};

const questionsData: Question[] = QuizMcq;

function shuffleArray(array: any[]) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

type Props = {};

const CriFour: FC<Props> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsDataShuffled, setQuestionsDataShuffled] = useState<
    Question[]
  >([]);

  useEffect(() => {
    setQuestionsDataShuffled(shuffleArray(questionsData));
  }, []);

  const currentQuestion = questionsDataShuffled[currentQuestionIndex];

  const handleAnswerClick = (choiceIndex: number) => {
    if (currentQuestion) {
      setSelectedChoice(choiceIndex);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    if (currentQuestion) {
      setShowAnswer(true);
      const correctAnswer = [
        currentQuestion.answer_1,
        currentQuestion.answer_2,
        currentQuestion.answer_3,
      ].indexOf(currentQuestion.right_answer);
      if (selectedChoice === correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedChoice(null);
    setShowAnswer(false);
  };

  const totalQuestions = questionsDataShuffled.length;
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;
  let resultText: any = "";

  if (correctAnswers === totalQuestions) {
    resultText = (
      <span className="perfect">
        Perfect {correctAnswers} out of {totalQuestions}
      </span>
    );
  } else if (correctAnswers >= totalQuestions / 2) {
    resultText = (
      <span className="good">
        Good {correctAnswers} out of {totalQuestions}
      </span>
    );
  } else if (correctAnswers > 0) {
    resultText = (
      <span className="bad">
        Bad {correctAnswers} out of {totalQuestions}
      </span>
    );
  } else {
    resultText = (
      <span className="so-bad">
        So bad {correctAnswers} out of {totalQuestions}
      </span>
    );
  }

  return (
    <div>
      <div className="w-[100%] m-auto p-1 mb-2 relative min-h-[70.9vh]">
        <div className="flex">
          <div className="w-[100%]">
            <div className="w-[100%]">
              <div className="w-[100%] ">
                <div>
                  <div>
                    <div>
                      <div className="quiz-info dark:bg-[#16181d] !p-2 w-fit mx-auto rounded-lg">
                        <div className="category !my-3">
                          Category : <span>Quiz</span>
                        </div>
                        <div className="count">
                          Questions Count : {totalQuestions}
                          <span></span>
                        </div>
                      </div>

                      <div>
                        <br />
                        <br />
                        <div className="exercises-page mx-auto px-2">
                          <div className="quiz-app rounded-xl dark:bg-[#23272f]">
                            <div className="quiz-content">
                              <div
                                className={`quiz-area ${
                                  currentQuestionIndex === totalQuestions &&
                                  "hidden"
                                } dark:bg-[#16181d] dark:text-white`}
                              >
                                {currentQuestion ? (
                                  <h2 className="text-xl ">{`${
                                    currentQuestionIndex + 1
                                  } - ${currentQuestion.title}`}</h2>
                                ) : (
                                  ""
                                )}
                              </div>

                              <div
                                className={`answers-area ${
                                  currentQuestionIndex === totalQuestions &&
                                  "hidden"
                                } dark:bg-[#16181d]`}
                              >
                                {currentQuestion
                                  ? [
                                      currentQuestion.answer_1,
                                      currentQuestion.answer_2,
                                      currentQuestion.answer_3,
                                    ].map((answer, index) => (
                                      <div
                                        className={`answer ${
                                          showAnswer &&
                                          answer ===
                                            currentQuestion.right_answer
                                            ? "bg-[#059377] hover:bg-[#059377] border-b border-b-[#059377]"
                                            : showAnswer &&
                                              selectedChoice === index
                                            ? "bg-[crimson] hover:bg-[crimson] border-b border-b-[crimson]"
                                            : "bg-[#f9f9f9] dark:bg-[#23272f] dark:border-b-[#23272f] hover:bg-[#9e9e9e29] dark:hover:opacity-[0.8] transition"
                                        }`}
                                        key={index}
                                      >
                                        <input
                                          type="radio"
                                          name="question"
                                          id={`answer_${index}`}
                                          checked={selectedChoice === index}
                                          onChange={() =>
                                            handleAnswerClick(index)
                                          }
                                          disabled={showAnswer}
                                        />
                                        <label
                                          className={` ${
                                            showAnswer &&
                                            answer ===
                                              currentQuestion.right_answer
                                              ? "bg-[#059377]  !text-white after:hidden before:bg-[#059377] before:border-[#059377] flex items-center relative"
                                              : showAnswer &&
                                                selectedChoice === index
                                              ? "bg-[crimson] !text-white after:hidden before:bg-[crimson] before:border-[crimson] flex items-center relative"
                                              : ""
                                          }`}
                                          htmlFor={`answer_${index}`}
                                        >
                                          {showAnswer &&
                                          answer ===
                                            currentQuestion.right_answer ? (
                                            <span className="absolute -left-1 -top-1 border rounded-full border-[#fff]">
                                              <BsFillCheckCircleFill
                                                className="!text-[#059377]"
                                                size={25}
                                              />
                                            </span>
                                          ) : (
                                            showAnswer &&
                                            selectedChoice === index && (
                                              <span className="absolute -left-1 border -top-1 rounded-full border-[#fff]">
                                                <AiFillCloseCircle
                                                  className="!text-[crimson]"
                                                  size={25}
                                                />
                                              </span>
                                            )
                                          )}
                                          {answer}
                                        </label>
                                      </div>
                                    ))
                                  : ""}
                              </div>
                              <div className="submit">
                                {currentQuestionIndex === totalQuestions ? (
                                  <div className="results dark:bg-[#16181d] mt-3 dark:rounded-xl">
                                    <h6 className="text-lg  dark:text-white py-1 px-3 border-r border-l border-t border-r-[#9e9e9e29] dark:border-r-[#9e9e9e29]  border-l-[#9e9e9e29] dark:border-l-[#9e9e9e29]  border-t-[#9e9e9e29] dark:border-t-[#9e9e9e29]  w-fit mx-auto rounded-t-xl">
                                      Exercise Results
                                    </h6>
                                    <p className="p-2 text-lg dark:bg-[#23272f] border border-[#9e9e9e29] dark:border-[#9e9e9e29]  rounded-t-xl bg-white">
                                      {resultText}
                                    </p>
                                    <div className="p-3 border-r border-l border-b border-r-[#9e9e9e29] dark:border-r-[#9e9e9e29] border-l-[#9e9e9e29] dark:border-l-[#9e9e9e29]  border-b-[#9e9e9e29] dark:border-b-[#9e9e9e29] rounded-b-xl">
                                      <p className="text-blue-500 text-xl py-1">
                                        Correct Answer : {correctAnswers}
                                      </p>
                                      <p className="text-[crimson] text-xl py-1">
                                        Incorrect Answer : {incorrectAnswers}
                                      </p>
                                      <p className=" text-xl py-1 dark:text-white">
                                        Total Questions : {totalQuestions}
                                      </p>
                                    </div>
                                  </div>
                                ) : (
                                  <button
                                    className={`submit-button ${
                                      showAnswer ? "bg-[#0095f6]" : "bg-[#000]"
                                    }`}
                                    onClick={
                                      showAnswer
                                        ? handleNextQuestion
                                        : handleShowAnswer
                                    }
                                    disabled={
                                      !showAnswer && selectedChoice === null
                                    }
                                  >
                                    {currentQuestionIndex === totalQuestions - 1
                                      ? "Result"
                                      : showAnswer
                                      ? "Next Answer"
                                      : "Submit Answer"}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriFour;
