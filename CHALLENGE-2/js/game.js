

// hide on the button resetButtonId when I run on brower
document.getElementById("resetButtonId").style.display ="none";

// function for store message
function sethtml(text){
    var resut = document.getElementById('resultId');
    resut.innerHTML = text;
}

// create this function for when I clcik on the playButton, so it will be show button resetButtonId and hide on the playButtonId
function onPlayClicked() {
    document.getElementById('resetButtonId').style.display = "block";
    sethtml("Played");
    document.getElementById('playButtonId').style.display = 'none';
  }

  // create this function for when I clcik on the resetButton, so it will be show button playButtonId and hide on the resetButtonId
  function onResetClciked(){
    document.getElementById('playButtonId').style.display = 'block';
    sethtml('Clear');
    document.getElementById('resetButtonId').style.display = "none";
  }

  // get ID of playButtonId from html 
  var playButton = document.getElementById('playButtonId');
  playButton.addEventListener('click', onPlayClicked);// action when I click.

   // get ID of playButtonId from html 
  var resetButton = document.getElementById('resetButtonId');
  resetButton.addEventListener('click', onResetClciked);// action when I click.

