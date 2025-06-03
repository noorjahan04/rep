# 🌌 Star Wars Wiki Application

## Project Description

The *Star Wars Wiki Application* is a web-based character encyclopedia built using the [Star Wars API](https://akabab.github.io/starwars-api/). Users can browse iconic Star Wars characters in a paginated grid, view detailed information on each character in a new tab, and enjoy a live-updating clock footer. The project emphasizes asynchronous JavaScript, dynamic DOM rendering, and basic interactivity without any frontend framework.

### Key Features

*Character Gallery*: Displays six characters per page in a 3×2 grid layout.  
*Pagination*: “Next” and “Previous” buttons to navigate through all characters.  
*Character Card*:
  - Image
  - Name
  - Species
  - Gender
  - Clickable card that opens a detail view in a new tab  
*Character Details Page*:
  - Full-size image
  - Name, Gender, Species
  - Homeworld & Affiliations (if multiple, all are listed)
  - Physical attributes: Height, Mass, Eye/Hair/Skin color  
*Live-Updating Footer Clock*: Shows the current time in the format `HH:MM:SS Day Date`  
*Optional Enhancements*:
  - Dark/Light theme toggle
  - “Random Character” button

## Table of Contents

1. [Demo & Deployed Link](#demo--deployed-link)
2. [Tech Stack](#tech-stack)
3. [Setup & Installation](#setup--installation)
4. [Screenshots](#screenshots)
5. [Challenges Faced](#challenges-faced)

## Demo & Deployed Link

A live version of this application is deployed and can be accessed here:  
*[Deployed Star Wars Wiki App](https://starwars-wiki-project.netlify.app/)*


## Tech Stack

*Frontend*:
  - HTML5, CSS3 (Grid / Flexbox)
  - Vanilla JavaScript (ES6)
*API*: [Star Wars API](https://akabab.github.io/starwars-api/api/all.json)  
*Styling*:
  - Responsive layout
  - CSS theme toggling
*Deployment*:
  - Netlify (or any other static host)

## Setup & Installation
- Open `index.html` in any modern browser

### Prerequisites
- No dependencies or installations required  
- Works offline after initial API load

## Screenshots

![alt text](<screenshot1.png>)  
![alt text](<screenshot2.png>)  
![alt text](<screenshot3.png>)  
![alt text](<screenshot4.png>)


## Challenges Faced

### 1. *Handling Raw JSON Data*

Unlike a paginated API, the entire character set was delivered in one large array. I had to manually implement pagination logic on the frontend to divide this into manageable pages.

### 2. *Dark Mode Support*

Adding dark/light mode without a framework required dynamically toggling classes and ensuring the theme applied to both the main page and the detail page independently.

### 3. *Dynamic Detail Routing*

Opening character details in a new tab required extracting query parameters from the URL and using them to fetch and render character-specific data — all using vanilla JS.

### 4. *Consistent Clock Formatting*

Creating a live-updating clock with the correct formatting across both pages needed a reusable `setInterval` setup and careful use of JavaScript’s `Date` and `toLocaleDateString` APIs.

### 5. *Random Character Navigation*

Adding the “Random Character” feature involved selecting a character at random from the loaded array and opening their detail page dynamically.


