const quizContent = [
  {
    question: "who was the first prime minister of india?",
    ans_a: "Jawaharlal Nehru",
    ans_b: "baba saheb ambedkar",
    ans_c: "gandhi",
    ans_d: "abul kalam azad",
    correct: "a",
  },
  {
    question: "which is the most popular language in 2021?",
    ans_a: "python",
    ans_b: "javaScript",
    ans_c: "java",
    ans_d: "none of the above",
    correct: "b",
  },
  {
    question: "who is the captain of RCB team?",
    ans_a: "AB deviliers",
    ans_b: "Max well",
    ans_c: "Virat Kohli",
    ans_d: "Moin ali",
    correct: "c",
  },
];
var actionEls = document.querySelectorAll(".messageCheckbox");
var current = 0;
var quiz = document.getElementById("quiz");
var questionText = document.getElementById("quiz__question");
var label_a = document.getElementById("label_a");
var label_b = document.getElementById("label_b");
var label_c = document.getElementById("label_c");
var labe_d = document.getElementById(" labe_d");
var button = document.getElementById("button");
var score = 0;
function appendQuiz() {
  var quizData = quizContent[current];
  questionText.innerHTML = quizData.question;
  label_a.innerHTML = quizData.ans_a;
  label_b.innerHTML = quizData.ans_b;
  label_c.innerHTML = quizData.ans_c;
  label_d.innerHTML = quizData.ans_d;
}
function getChecked() {
  let action = undefined;
  actionEls.forEach((actionEl) => {
    if (actionEl.checked) {
      action = actionEl.value;
    }
  });

  return action;
}
function removeSelected() {
  actionEls.forEach((actionEl) => {
    actionEl.checked = false;
  });
}

appendQuiz();

button.addEventListener("click", function () {
  const answer = getChecked();
  if (answer) {
    var correct = quizContent[current].correct;
    if (answer == correct) {
      score++;
    }
    current++;
    if (current < quizContent.length) {
      appendQuiz();
      removeSelected();
    } else {
      quiz.innerHTML = `<h2>You answered ${score} correctly out of ${quizContent.length} </h2>
      <button id="button" onclick="location.reload()">Reload</button>`;
      //after completion of quiz
    }
  }
});
