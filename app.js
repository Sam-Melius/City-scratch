// import functions and grab DOM elements
import { createCountString } from './utils.js';
const skylineDropdown = document.querySelector('#skyline-dropdown');
const skylineImageEl = document.querySelector('#skyline-image');
const waterfrontDropdown = document.querySelector('#waterfront-dropdown');
const waterfrontImageEl = document.querySelector('#waterfront-image');
const castleDropdown = document.querySelector('#castle-dropdown');
const castleImageEl = document.querySelector('#castle-image');
const sloganInputEl = document.querySelector('#slogan-input');
const sloganButton = document.querySelector('#slogan-button');
const sloganListEl = document.querySelector('.list');
const countEl = document.querySelector('.count'); 


// let state
let waterfrontCount = 0;
let skylineCount = 0;
let castleCount = 0;
let sloganArray = [];


// set event listeners 

waterfrontDropdown.addEventListener('change', () => {
    const id = waterfrontDropdown.value;

    waterfrontImageEl.src = `./assets/waterfront-${id}.jpeg`;

    waterfrontCount++;

    displayStats();
});

skylineDropdown.addEventListener('change', () => {
    const id = skylineDropdown.value;

    skylineImageEl.src = `./assets/skyline-${id}.jpeg`;

    skylineCount++;

    displayStats();
});

castleDropdown.addEventListener('change', () => {
    const id = castleDropdown.value;

    castleImageEl.src = `./assets/castle-${id}.jpeg`;

    castleCount++;

    displayStats();
});

// get user input
  // use user input to update state 
  // update DOM to reflect the new state
  
sloganButton.addEventListener('click', () => {

    const newSlogan = sloganInputEl.value;

    sloganArray.push(newSlogan);

    sloganListEl.textContent = '';
  
    displaySlogans();
});

function displayStats() {
    const statsString = createCountString(waterfrontCount, skylineCount, castleCount);

    countEl.textContent = statsString;
}

function displaySlogans() {
    sloganListEl.textContent = '';

    for (let slogan of sloganArray) {
        const p = document.createElement('p');

        p.classList.add('slogan');

        p.textContent = slogan;

        sloganListEl.append(p);
    }

}