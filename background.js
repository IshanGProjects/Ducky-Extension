// background.js

//function to change the image source in the duckyImage div
function duckyColor(imageSelction) {
  const img = document.getElementById("ducky");
  if(imageSelction == "blue"){
    img.src = "/assets/blueDuck.png";
  }
  else{
    img.src = "/assets/defaultDuck.png"
  }
}

duckyColor("blue");

/*
Function to Render text 
*/
var container = document.querySelector(".textBox");

var speeds = {
   pause: 500, //Higher number = longer delay
   slow: 120,
   normal: 90,  
   fast: 40,
   superFast: 10
};

var textLines = [
   { speed: speeds.slow, string: "Oh, hello!" },
   { speed: speeds.pause, string: "", pause: true },
   { speed: speeds.normal, string: "Are you having trouble coding?" },
   { speed: speeds.pause, string: "", pause: true },
];


var characters = [];
textLines.forEach((line, index) => {
   if (index < textLines.length - 1) {
      line.string += " "; //Add a space between lines
   }

   line.string.split("").forEach((character) => {
      var span = document.createElement("span");
      span.textContent = character;
      container.appendChild(span);
      characters.push({
         span: span,
         isSpace: character === " " && !line.pause,
         delayAfter: line.speed,
         classes: line.classes || []
      });
   });
});

function revealOneCharacter(list) {
   var next = list.splice(0, 1)[0];
   next.span.classList.add("revealed");
   next.classes.forEach((c) => {
      next.span.classList.add(c);
   });
   var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

   if (list.length > 0) {
      setTimeout(function () {
         revealOneCharacter(list);
      }, delay);
   }
}

//Kick it off
setTimeout(() => {
   revealOneCharacter(characters);   
}, 600)