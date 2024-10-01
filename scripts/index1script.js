function animation1() {
  document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.text');
    const textContent = text.textContent;
    text.textContent = '';
    textContent.split('').forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.1}s`;
      text.appendChild(span);
    });
  });
}
animation1();
function animation() {
  const text = document.querySelector('.text');
  const textContent = text.innerText;
  text.innerText = '';
  textContent.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = `${index * 0.1}s`;
    text.appendChild(span);
  });
}
const languageText = {
  "ENGLISH": `Welcome to Alumni.`,
  "हिन्दी": "अलुम्नि में आपका स्वागत है",
  "বাংলা": "আলুমনিতে আপনাকে স্বাগতম",
  "मराठी": "अलुम्नि मध्ये आपले स्वागत आहे",
  "ગુજરાતી": "અલ્યુમનીમાં આપનું સ્વાગત છે",
  "اردو": "الومنی میں خوش آمدید",
  "ਪੰਜਾਬੀ": "ਅਲੁਮਨੀ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
  "తెలుగు": "అల్యూమ్నీకి స్వాగతం",
  "ಕನ್ನಡ": "ಅಲ್ಯೂಮ್ನಿಯಲ್ಲಿ ನಿಮಗೆ ಸ್ವಾಗತ",
  "മലയാളം": "അല്യൂമ്നിയിലേക്ക് സ്വാഗതം",
  "ଓଡ଼ିଆ": "ଅଲୁମ୍ନିରେ ଆପଣଙ୍କୁ ସ୍ଵାଗତ"
};
let mouseOverBox1 = document.querySelector('.box1');
let mouseOverBox2 = document.querySelector('.box2');
let mouseOverBox3 = document.querySelector('.box3');
let mouseOverBox4 = document.querySelector('.box4');
let mouseOverBox5 = document.querySelector('.box5');
let mouseOverBox6 = document.querySelector('.box6');
let mouseOverBox7 = document.querySelector('.box7');
let mouseOverBox8 = document.querySelector('.box8');
let mouseOverBox9 = document.querySelector('.box9');
let mouseOverBox10 = document.querySelector('.box10');
let mouseOverBox11 = document.querySelector('.box11');

mouseOverBox1.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox1.innerText);
});
mouseOverBox2.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox2.innerText);
});
mouseOverBox3.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox3.innerText);
});
mouseOverBox4.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox4.innerText);
});
mouseOverBox5.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox5.innerText);
});
mouseOverBox6.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox6.innerText);
});
mouseOverBox7.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox7.innerText);
});
mouseOverBox8.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox8.innerText);
});
mouseOverBox9.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox9.innerText);
});
mouseOverBox10.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox10.innerText);
});
mouseOverBox11.addEventListener('mouseover', () => {
  changeAndAdd(mouseOverBox11.innerText);
});




mouseOverBox1.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox2.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox3.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox4.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox5.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox6.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox7.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox8.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox9.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox10.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
mouseOverBox11.addEventListener('mouseout', () => {
  document.querySelector('.text').innerHTML = `<span class="text">Welcome&nbsp;to&nbsp;Alumni.</span>`;
  animation();
});
function changeAndAdd(ele) {
  animation();
  document.querySelector('.text').innerText = languageText[ele];

}