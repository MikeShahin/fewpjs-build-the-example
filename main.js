// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const div = document.querySelector("#modal")
div.classList.add("hidden");

if (div.classList.value == "") {
  console.log("not hide")
}

let hearts = document.querySelectorAll(".like-glyph")

for (let heart of hearts) {
  heart.addEventListener("click", like)
}

function like(e) {
  let hrt = e.target
  mimicServerCall()
  .then(resp => {
    if (hrt.innerText == EMPTY_HEART) {
      hrt.innerText = FULL_HEART
      hrt.classList.add("activated-heart")
    } else {
      hrt.innerText = EMPTY_HEART
      hrt.classList.remove("activated-heart")
    }
  })
  .catch(error => {
    div.classList.remove("hidden")
    setTimeout(() => div.classList.add("hidden"), 5000)
  })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
