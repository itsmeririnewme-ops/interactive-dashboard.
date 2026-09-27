// Magic Eight Ball

// Possible answers the ball can give
let answers = [
  "It is certain",
  "Without a doubt",
  "Yes, definitely",
  "Ask again later",
  "Cannot predict now",
  "Don't count on it",
  "My reply is no",
  "Outlook not so good"
];

// Picks a random answer and shows it in the circle
function displayAnswer() {
  let pick = Math.floor(Math.random() * answers.length);
  let circle = document.getElementById("circle");
  circle.style.display = "block";
  circle.innerHTML = answers[pick];
}

// When the ball is clicked, check for a question first
document.getElementById("ball").addEventListener("mousedown", function () {
  let userQuestion = document.getElementById("question").value;

  if (userQuestion === "") {
    alert("Please enter a question before shaking the Magic Eight Ball!");
  } else {
    displayAnswer();
  }
});

// Hide the answer again when reset is clicked
document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("circle").style.display = "none";
});

// Bonus: let the user add their own responses to the array
let addBtn = document.getElementById("addResponse");
if (addBtn) {
  addBtn.addEventListener("click", function () {
    let userAnswer = document.getElementById("newAnswer").value;

    if (userAnswer === "") {
      alert("Please type a new response before adding it.");
    } else {
      answers.push(userAnswer);
      console.log("New response added: " + userAnswer);
      console.log("Total number of responses: " + answers.length);
      document.getElementById("newAnswer").value = "";
    }
  });
}