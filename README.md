# Frontend Mentor - IP Address Tracker Solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). 

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [Key Features](#key-features)
  - [Accessibility (A11y)](#accessibility-a11y)
- [Author](#author)

---

## Overview

### The Challenge

Users should be able to:
- View the optimal layout for each page depending on their device's screen size.
- See hover states for all interactive elements on the page.
- See their own IP address on the initial page load.
- Search for any IP addresses or domains and see the key information and location.
- **Bonus**: Use a custom error message with "Dark Glassmorphism" style for invalid inputs.

### Links

- **Live Site URL**: [View Project](https://anasdef.github.io/ip-address-tracker/)
- **Challenge URL**: [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0)

---

## My Process

### Built With

- **HTML5**: Semantic markup for better structure.
- **Sass (SCSS)**: Modular architecture (7-1 pattern) for clean and maintainable styles.
- **CSS Flexbox**: For responsive and centered layouts.
- **Vanilla JavaScript**: For DOM manipulation and asynchronous API calls.
- **Leaflet.js**: An open-source JavaScript library for interactive maps.
- **IP Geolocation API (Ipify)**: To fetch real-time data based on user input.

### Key Features

- **Responsive Design**: The app is fully responsive, adapting perfectly from mobile to desktop.
- **Dark Glassmorphism**: High-quality UI for error messages using `backdrop-filter` and blurred backgrounds.
- **Real-time Map Updates**: The map smoothly transitions to the searched location using a custom marker.
- **Input Validation**: Uses a custom **Regex** to validate IPv4 syntax before making API requests, saving bandwidth and improving UX.

### Accessibility (A11y)

I focused heavily on making this project accessible:
- **ARIA Roles**: Used `role="alert"` and `aria-live="assertive"` for the error messages.
- **Dynamic Content**: Applied `aria-live="polite"` to info cards so screen readers announce updates without interrupting the user.
- **Focus Management**: Linked input fields with error descriptions using `aria-describedby`.

---

## Author

- Frontend Mentor - [@anasdef](https://www.frontendmentor.io/profile/anasdef)
- GitHub - [anasdef](https://github.com/anasdef)
