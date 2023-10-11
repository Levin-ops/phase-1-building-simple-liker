// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.getElementsByClassName(`like-glyph`);

const event =likes.addEventListener(`click`,()=>{
  console.log(`heart clicked`)})
 

const errorMod = document.querySelector(`modal`);


function errorHandling(error) {
  errorMod.classList.remove(`hidden`);
  errorMod.textContent = error;
  setTimeout(()=> {errorMod.classList.add(`hidden`);}, 3000); 
}


likes.forEach(like => {
  like.addEventListener(`click`,()=>{
    console.log(`heart clicked`)})
  })

    errorMod.classList.add('hidden')

    if (like.textContent === EMPTY_HEART){
      mimicServerCall()
        .then(()=> {
          like.value.textContent= FULL_HEART;
          like.classList.add(`activated-heart`)
        })
        .catch(error =>{
          errorHandling(error);
        });
    }else if (like.value.textContent===FULL_HEART){
      like,innerText= EMPTY_HEART;
      like.classList.remove(`activated-heart`)
    }
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
