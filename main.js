const button1 = document.querySelector('.button-1')
const button2 = document.querySelector('.button-2')
const button3 = document.querySelector('.button-3')
const button4 = document.querySelector('.button-4')
const button5 = document.querySelector('.button-5')
const submitButton = document.querySelector('.submit-button')

const buttons = [button1, button2, button3, button4, button5];

buttons.forEach(button => {
  button.addEventListener('click', selectRating);
});

submitButton.addEventListener('click', submitRating);

function selectRating (rating) {
  buttons.forEach(button => {
    button.style.backgroundColor = 'var(--Dark-Blue)';
    button.style.color = 'var(--Light-Grey)';
  });

  rating.target.style.backgroundColor = 'var(--White)';
  rating.target.style.color = 'var(--Dark-Blue)';

  const spanText = document.querySelector('.rating-number span');
  spanText.textContent = rating.target.textContent;
}

function submitRating (submit) {
  const container = document.querySelector('.container');
  const secondContainer = document.querySelector('.second-container');

  container.style.display = 'none';
  secondContainer.style.display = 'block';
}