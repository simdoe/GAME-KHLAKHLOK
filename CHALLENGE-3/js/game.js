

// hide on the button resetButtonId when I run on brower
setVilibility("resetButtonId", false);
// create constant varible 
const PLAY_DELAY = 2000;
// function for store message
function sethtml(text){
    var resut = document.getElementById('resultId');
    resut.innerHTML = text;
}

function setVilibility(elementId, isVisabile){
  var properties = isVisabile ?  "block" : "none";
  document.getElementById(elementId).style.display = properties;
}

// create function setimeOut

// create this function for when I clcik on the playButton, so it will be show button resetButtonId and hide on the playButtonId
function onPlayClicked() {
    // setVilibility("playButtonId", false);
    sethtml("Wait.");
    setTimeout(() => {
      sethtml("Played");
      setVilibility("playButtonId", false);
      setVilibility("resetButtonId", true);
    }, PLAY_DELAY);
    
  }

  // create this function for when I clcik on the resetButton, so it will be show button playButtonId and hide on the resetButtonId
  function onResetClciked(){
      setVilibility("resetButtonId", false);
      sethtml('Clear');
    setVilibility("playButtonId", true);
  }

  // get ID of playButtonId from html 
  var playButton = document.getElementById('playButtonId');
  playButton.addEventListener('click', onPlayClicked);// action when I click.

   // get ID of playButtonId from html 
  var resetButton = document.getElementById('resetButtonId');
  resetButton.addEventListener('click', onResetClciked);// action when I click.

