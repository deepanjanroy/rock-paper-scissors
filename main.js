document.addEventListener('DOMContentLoaded', function() {
  function ridiculousDelay(delaySeconds) {
    var now = performance.now();
    while (performance.now() < now + delaySeconds) {}
  }

  function installHandlers() {
    console.log("Installing handlers");
    var rpsButton = document.querySelector('#rpsButton');
    var rpsResult = document.querySelector('#rpsResult');
    var gameInProgress = false;

    function playRPS() {
      if (gameInProgress) return;
      gameInProgress = true;
      var plays = ['Rock', 'Paper', 'Scissor'];
      var playsEmoji = ['✊', '✋', '✌'];

      var rpsProgress = (currentIndex) => {
        if (currentIndex < 2) {
          rpsResult.classList.remove('emoji-font');
          rpsResult.innerText = plays[currentIndex] + '...';
          setTimeout(() => rpsProgress(currentIndex + 1), 400);
        } else {
          rpsResult.classList.add('emoji-font');
          rpsResult.innerText = playsEmoji[Math.floor(Math.random() * 3)];
          gameInProgress = false;
        }
      };

      rpsProgress(0);
    }

    rpsButton.onclick = playRPS;
  }

  function installHandlerWithDelay(delayMs) {
    var dclTime = performance.now();
    var handlerInterval = setInterval(() => {
      var currentTime = performance.now();
      var statusDiv = document.querySelector('#handlerStatus');
      if (currentTime > dclTime + delayMs) {
        installHandlers();
        statusDiv.innerText = 'Handlers installed';
        clearInterval(handlerInterval);
      } else {
        var remaining = ((dclTime + delayMs - currentTime) / 1000);
        var remainingFixed = remaining.toFixed(2);
        statusDiv.innerText = `Installing handlers in ${remainingFixed} seconds`;
      }
    });
  }

  installHandlerWithDelay(7000);

  // setTimeout(() => ridiculousDelay(500), 0);
  // setTimeout(() => ridiculousDelay(500), 0);
}, false);
















































