document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.options');
    const submitButton = document.querySelector('.submit-btn');
    const cardRatings = document.querySelector('.card-ratings');
    const thankYouCard = document.querySelector('.thank-you-card');
    const chosenOptionSpan = document.querySelector('.chosen-option');

    cardRatings.classList.add('active');

    let selectedRating = null;

    ratingButtons.forEach(button => {
      button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedRating = button.value;
      });
    });

    submitButton.addEventListener('click', () => {
      if (selectedRating) {
        chosenOptionSpan.textContent = selectedRating;
        cardRatings.classList.remove('active');
        thankYouCard.classList.add('active');
      } else {
        alert('Please select a rating');
      }
    });

  });