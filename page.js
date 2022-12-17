const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const questMark = document.getElementById("questMark");
const resultsMsg = document.getElementById("resultsMsg");
const winLabel = document.getElementById("winLabel");
const winCount = document.getElementById("winCount");
const loseLabel = document.getElementById("loseLabel");
const loseCount = document.getElementById("loseCount");
const tieLabel = document.getElementById("tieLabel");
const tieCount = document.getElementById("tieCount");

winCount.innerHTML = localStorage.wins;
loseCount.innerHTML = localStorage.loses;
tieCount.innerHTML = localStorage.ties;

function load() {
  if (localStorage.wins == undefined) {
    winCount.innerHTML = 0;
  }
  if (localStorage.loses == undefined) {
    loseCount.innerHTML = 0;
  }
  if (localStorage.ties == undefined) {
    tieCount.innerHTML = 0;
  }
}

function game(x) {
  if (x == "rock") {
    var playChoice = "rock";
    rock.style.transform = "scale(1.5)";
    paper.style.transform = "scale(1)";
    scissors.style.transform = "scale(1)";
    rock.classList.add("press");
    paper.classList.remove("press");
    scissors.classList.remove("press");
  }
  else if (x == "paper") {
    var playChoice = "paper";
    paper.style.transform = "scale(1.5)";
    rock.style.transform = "scale(1)";
    scissors.style.transform = "scale(1)";
    paper.classList.add("press");
    rock.classList.remove("press");
    scissors.classList.remove("press");
  }
  else if (x == "scissors") {
    var playChoice = "scissors";
    scissors.style.transform = "scale(1.5)";
    rock.style.transform = "scale(1)";
    paper.style.transform = "scale(1)";
    scissors.classList.add("press");
    rock.classList.remove("press");
    paper.classList.remove("press");
  };
  var num = Math.ceil(Math.random() * 3);
  if (num == 1) {
    var compChoice = "rock";
    questMark.src = "img/rock.svg";
    questMark.classList.remove("scale");
    void questMark.offsetWidth;
    questMark.classList.add("scale");
  }
  else if (num == 2) {
    var compChoice = "paper";
    questMark.src = "img/paper.svg";
    questMark.classList.remove("scale");
    void questMark.offsetWidth;
    questMark.classList.add("scale");
  }
  else if (num == 3) {
    var compChoice = "scissors";
    questMark.src = "img/scissors.svg";
    questMark.classList.remove("scale");
    void questMark.offsetWidth;
    questMark.classList.add("scale");
  };
  if ((playChoice == "rock") && (compChoice == "paper")) {
    var result = "lose";
  }
  else if ((playChoice == "rock") && (compChoice == "scissors")) {
    var result = "win";
  }
  else if ((playChoice == "paper") && (compChoice == "rock")) {
    var result = "win";
  }
  else if ((playChoice == "paper") && (compChoice == "scissors")) {
    var result = "lose";
  }
  else if ((playChoice == "scissors") && (compChoice == "rock")) {
    var result = "lose";
  }
  else if ((playChoice == "scissors") && (compChoice == "paper")) {
    var result = "win";
  }
  else if (playChoice == compChoice) {
    var result = "tie";
  };
  if (result == "win") {
    resultsMsg.innerHTML = "Congrats, you won this round!";
    winCount.innerHTML++;
    localStorage.wins = winCount.innerHTML;
    winLabel.style.fontWeight = "bold";
    loseLabel.style.fontWeight = "normal";
    tieLabel.style.fontWeight = "normal";
    winCount.style.fontWeight = "bold";
    loseCount.style.fontWeight = "normal";
    tieCount.style.fontWeight = "normal";
    winCount.style.transform = "scale(1.25)";
    loseCount.style.transform = "scale(1)";
    tieCount.style.transform = "scale(1)";
  }
  else if (result == "lose") {
    resultsMsg.innerHTML = "Aww, you lost.  Want to try again?";
    loseCount.innerHTML++;
    localStorage.loses = loseCount.innerHTML;
    loseLabel.style.fontWeight = "bold";
    winLabel.style.fontWeight = "normal";
    tieLabel.style.fontWeight = "normal";
    loseCount.style.fontWeight = "bold";
    winCount.style.fontWeight = "normal";
    tieCount.style.fontWeight = "normal";
    loseCount.style.transform = "scale(1.25)";
    winCount.style.transform = "scale(1)";
    tieCount.style.transform = "scale(1)";
  }
  else if (result == "tie") {
    resultsMsg.innerHTML = "It's a tie!  Play again to break it!";
    tieCount.innerHTML++;
    localStorage.ties = tieCount.innerHTML;
    tieLabel.style.fontWeight = "bold";
    winLabel.style.fontWeight = "normal";
    loseLabel.style.fontWeight = "normal";
    tieCount.style.fontWeight = "bold";
    winCount.style.fontWeight = "normal";
    loseCount.style.fontWeight = "normal";
    tieCount.style.transform = "scale(1.25)";
    winCount.style.transform = "scale(1)";
    loseCount.style.transform = "scale(1)";
  };
}

function reset() {
  localStorage.wins = 0;
  localStorage.loses = 0;
  localStorage.ties = 0;
  winCount.innerHTML = 0;
  loseCount.innerHTML = 0;
  tieCount.innerHTML = 0;
  winLabel.style.fontWeight = "normal";
  loseLabel.style.fontWeight = "normal";
  tieLabel.style.fontWeight = "normal";
  winCount.style.fontWeight = "normal";
  loseCount.style.fontWeight = "normal";
  tieCount.style.fontWeight = "normal";
  winCount.style.transform = "scale(1)";
  loseCount.style.transform = "scale(1)";
  tieCount.style.transform = "scale(1)";
  resultsMsg.innerHTML = "Best of luck!";
  questMark.src = "img/questionMark.svg";
  questMark.classList.remove("scale");
  rock.style.transform = "scale(1)";
  paper.style.transform = "scale(1)";
  scissors.style.transform = "scale(1)";
  rock.classList.remove("press");
  paper.classList.remove("press");
  scissors.classList.remove("press");
}