let aibot = document.querySelector('.js-ai-bot').addEventListener('click' , ()=> {
    presentME();
});
let smElement = document.querySelector('.js-showing-msg');
let startAddHTML = '';
let elementHTML = `
  <div class="input-under-chat">
    <input type="text" class="input-under-chat-make js-input-chat" placeholder="Ask me anything.">
    <div class="up-arrow"><img src="image/uparrow.png" height="35" width="35" class="up-arrow-img"></div>
  </div>
  `; 
  let sayByBotHTML = `
  <div class="by-bot">
    <div class="on-chat-bot">
      <img src="image/bot.jpeg" class="on-chat-bot-img" height="35" width="35">
    </div>
    <button class="message-button-bot">
      Hi! I'm currently under construction but ready to assist with the alumni webpage. Feel free to ask me anything. Apologies for the inconvenience.
    </button>
  </div>`;
let makeMe = false;

function presentME() {
  if(!makeMe) {
    smElement.innerHTML = elementHTML;
    smElement.classList.add('msg-showing');
    // document.querySelector('.js-show-relative').classList.add('js-show-rel');
    let makeDisplayElement = document.querySelector('.js-input-chat');
    let arrowClickMsgEle = document.querySelector('.up-arrow');
    arrowClickMsgEle.addEventListener("click" , ()  => {
      let metochat = `
      <div class="by-human">
        <button class="message-button-human">
          ${makeDisplayElement.value}
        </button>
        <div class="on-chat-human">
          <img src="./images/human.png" class="on-chat-human-img" height="35" width="35">
        </div>
      </div>`;
      smElement.innerHTML += metochat;
      smElement.innerHTML+=sayByBotHTML;
    });  
    makeMe=true;
  } else {
    makeMe = false;
    smElement.innerHTML = "";
    // document.querySelector('.js-show-relative').innerHTML = `
    // <div class="js-showing-msg"></div>
    // `;
    smElement.classList.remove('msg-showing'); 
    document.querySelector('.js-show-relative').classList.remove('js-show-rel');
  }
}
let currentIndex = 0;
const images = document.querySelectorAll('.scroll-images img');
const totalImages = images.length;

// function showNextImage() {
//     images[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex + 1) % totalImages;
//     images[currentIndex].classList.add('active');
// }

// setInterval(showNextImage, 4000); // Change image every 1 second

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Automatic image change every second
setInterval(showNextImage, 4300); // Change image every 3 seconds

// Event listeners for arrows
document.querySelector('.left-arrow').addEventListener('click', showPrevImage);
document.querySelector('.right-arrow').addEventListener('click', showNextImage);
