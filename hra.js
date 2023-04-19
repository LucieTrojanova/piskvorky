import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
let currentPlayer = 'circle';
const krouzek = document.querySelector('.krouzek');
const krizek = document.querySelector('.krizek');

const btnClick = (evt) => {
  if (currentPlayer == 'circle') {
    evt.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    krizek.style.display = 'block';
    krouzek.style.display = 'none';
  } else {
    evt.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    krizek.style.display = 'none';
    krouzek.style.display = 'block';
  }
  evt.target.disabled = true;

  const allButtons = document.querySelectorAll('button');
  let hraciPole = [];

  allButtons.forEach((button) => {
    if (button.classList.contains('board__field--circle')) {
      hraciPole.push('o');
    } else if (button.classList.contains('board__field--cross')) {
      hraciPole.push('x');
    } else {
      hraciPole.push('_');
    }
  });

  let vitez = findWinner(hraciPole);
  if (vitez === 'o' || vitez === 'x') {
    const zpozdeni = () => {
      alert(`Vyhrál hráč se symbolem ${vitez}.`);

      location.reload();
    };
    setTimeout(zpozdeni, 100);
  }

  console.log(hraciPole);
};

/*const button1 = document.querySelector('#button1');
button1.addEventListener('click', btnClick);

const button2 = document.querySelector('#button2');
button2.addEventListener('click', btnClick);

const button3 = document.querySelector('#button3');
button3.addEventListener('click', btnClick);

const button4 = document.querySelector('#button4');
button4.addEventListener('click', btnClick);

const button5 = document.querySelector('#button5');
button5.addEventListener('click', btnClick);

const button6 = document.querySelector('#button6');
button6.addEventListener('click', btnClick);

const button7 = document.querySelector('#button7');
button7.addEventListener('click', btnClick);

const button8 = document.querySelector('#button8');
button8.addEventListener('click', btnClick);

const button9 = document.querySelector('#button9');
button9.addEventListener('click', btnClick);

const button10 = document.querySelector('#button10');
button10.addEventListener('click', btnClick);*/

const allBtn = document.querySelectorAll('button');
allBtn.forEach((button) => {
  button.addEventListener('click', btnClick);
});
