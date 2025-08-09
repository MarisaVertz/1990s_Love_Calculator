document.getElementById("love-form").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("yourName").value;
  var crushName = document.getElementById("crushName").value;

  var yourFirstLetter = name.slice(0, 1).toUpperCase();
  var yourFinishedName = yourFirstLetter + name.slice(1).toLowerCase();

  var crushFirstLetter = crushName.slice(0, 1).toUpperCase();
  var finishedName = crushFirstLetter + crushName.slice(1).toLowerCase();

  var loveScore = Math.floor(Math.random() * 100) + 1;

  var line2 = "";
  if (loveScore > 70) {
    line2 = "You’re each other’s missing puzzle piece.";
  } else if (loveScore > 30) {
    line2 = "There are some sparks, but also some fizzle.";
  } else {
    line2 = "You might be better off as friends.";
  }

  const line1 = `${yourFinishedName} and ${finishedName} are <span class="result-percent">${loveScore}%</span> compatible!`;

  document.getElementById("resultText").innerHTML =
    `<span class="result-line1">${line1}</span><br>` +
    `<span class="result-line2">${line2}</span>`;

  document.getElementById("result").classList.remove("hidden");
});

document.getElementById("tryAgain").addEventListener("click", function () {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("love-form").reset();
});
