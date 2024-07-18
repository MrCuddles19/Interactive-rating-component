# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](screenshots/solution.PNG)

more screenshots!

![](screenshots/ThankYousection.PNG)
![](screenshots/Responsivedesign.PNG)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- HTML
- CSS
- JS
- CSS variables 


### What I learned

I have been practicing for sometime now soo this wasn't too difficult. But the styling for the star, result and option elements was confusing. I thought the recquired a unique  background color. But i realized it was a box shadow. And i tried a lot of them but i got this.
```css
.option {
  box-shadow: 5px 5px 50px 1px rgba(0, 0, 0, 0.5);
}
```
A transparent black color, I did some tweaking and i got an okay shadow

Another challenge I encountered was about the functionality of the project. I wanted the selected option to be the one with a white background when I clicked on it. I finally figured it out after soo much thinking.

```js
 ratingButtons.forEach(button => {
      button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedRating = button.value;
      });
    });
```
When the buttons are being looped through when clicked, it will set every other button in the selectorAll to have no background. And then it will the class active to it to make the button have a white background color. 

I added an alert message so that when you submit without selecting a rating you will be prompted. 


### Continued development
I want learn more frontend frameworks and possibly backend too. This my first challenge and I hope I nailed it (^^).

## Author

- GitHub - [MrCuddles19](https://https://github.com/MrCuddles19)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@r3al_c0sty](https://www.twitter.com/r3al_c0sty)

