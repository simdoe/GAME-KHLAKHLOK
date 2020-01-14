

// hide on the button resetButtonId when I run on brower
setVilibility("resetButtonId", false);
// create constant varible 
const PLAY_DELAY = 2000;
const pictures = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

 // create funtion for store images 
 function setImages() {
  var storeImages = "";
  var arrayStoreImages = [];
  for(let i = 0; i < 3; i++){
    var randomImages = Math.floor(Math.random() * 5) ;
    arrayStoreImages.push(randomImages);
      storeImages += `
          <img src="images/${pictures[arrayStoreImages[i]]}" width="100">
      `;
    }
    return storeImages;
 }
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
      sethtml(setImages());
      setVilibility("playButtonId", false);
      setVilibility("resetButtonId", true);
    }, PLAY_DELAY);
  }

  // create this function for when I clcik on the resetButton, so it will be show button playButtonId and hide on the resetButtonId
  function onResetClciked(){
    sethtml("Clear.");
    setVilibility("resetButtonId", false);
    setVilibility("playButtonId", true);
  }

  // get ID of playButtonId from html 
  var playButton = document.getElementById('playButtonId');
  playButton.addEventListener('click', onPlayClicked);// action when I click.

   // get ID of playButtonId from html 
  var resetButton = document.getElementById('resetButtonId');
  resetButton.addEventListener('click', onResetClciked);// action when I click.
