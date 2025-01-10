const ratingButton= document.querySelectorAll('.rating-button')
const submitButton = document.querySelector('.submit-button')

ratingButton.forEach(button => {
  button.addEventListener('click', selectRating);
});
submitButton.addEventListener('click', submitRating);

let selectedRating;

function selectRating (rating) {
  ratingButton.forEach(button => {
    button.style.backgroundColor = 'var(--Dark-Blue)';
    button.style.color = 'var(--Light-Grey)';
  });

  rating.target.style.backgroundColor = 'var(--White)';
  rating.target.style.color = 'var(--Dark-Blue)';

  const spanText = document.querySelector('.rating-number span');
  spanText.textContent = rating.target.textContent;

  selectedRating = rating.target.textContent;
}

function submitRating (submit) {
  
  if (!selectedRating) {
    alert("Please select a rating before submitting!");
    return;
  }

  const container = document.querySelector('.container');
  const secondContainer = document.querySelector('.second-container');

  container.style.display = 'none';
  secondContainer.style.display = 'block';
}
