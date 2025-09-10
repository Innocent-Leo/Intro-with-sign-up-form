# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.jpeg)

### Links

- Solution URL: [GitHub Repo](https://github.com/Innocent-Leo/Intro-with-sign-up-form.git)
- Live Site URL: [Live Demo](https://intro-with-sign-up-form.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

This challendge improved my ability to:

- Structure ans style a form for responsiveness
- Validate input fields with JavaScript
- Display error states dynamically with clear feedback
- Prevent form submission until inputs are valid

```js
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

### Continued development

For futur developments, I would like to:

- Add real-time validation (as the user types)
- Create a success state once the form is correctly submitted
- Explore accessibility improvements for screen readers

## Author

- Frontend Mentor - [@Innocent-Leo](https://www.frontendmentor.io/profile/Innocent-Leo)
- LinkedIn - [@Innocent-Okeke](https://www.linkedin.com/in/innocentokeke)
- Twitter - [@itz_saintleo](https://www.twitter.com/itz_saintleo)
```
