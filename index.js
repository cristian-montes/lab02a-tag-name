const nameTag = document.getElementById('name-tag');
const nameSection = document.getElementById('name-section');
const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');

//***SUBMIT GET ITEMS***
const nameInput= document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');

//***PRONOUN GET ITEMS***
const pronounSection = document.getElementById('pronoun-section');
const pronounsInput =document.getElementById('pronouns-input');
const pronounBtn = document.getElementById('pronoun-btn');

//***PRONOUN GET ITEMS***
const clearBtn = document.getElementById('clear-btn');

//***COLOR GET ITEMS***
const greenBtn = document.getElementById('green-btn');
const yellowBtn = document.getElementById('yellow-btn');
const pinkBtn = document.getElementById('pink-btn');

//* NUMBER OF CHANGES GET ITEMS */
const numberOfChanges = document.getElementById('number-of-changes');
let changes = 0;


// SUBMIT BUTTON ///
submitBtn.addEventListener ('click', () => {
  nameSection.innerText = nameInput.value;
  changes ++; 
  numberOfChanges.textContent = changes + ' Times Name changed';
});


//PRONOUN BUTTON //
pronounBtn.addEventListener('click', ()=> {
    pronounSection.innerText = pronounsInput.value;
});

//CLEAR BUTTON//
clearBtn.addEventListener ('click', ()=> {
    nameSection.innerText = "";
    pronounSection.innerText = "";
    topSection.classList.remove('changeGreen');
    bottomSection.classList.remove('changeGreen');
    topSection.classList.remove('changeYellow');
    bottomSection.classList.remove('changeYellow');
    topSection.classList.remove('changePink');
    bottomSection.classList.remove('changePink');
    numberOfChanges.innerText = "";
});


//CHANGE COLORS

   // Change Color Green
greenBtn.addEventListener('click', ()=> {
    topSection.classList.add('changeGreen');
    bottomSection.classList.add('changeGreen');
});

  // Change Color Yellow
  yellowBtn.addEventListener('click', ()=> {
    topSection.classList.add('changeYellow');
    bottomSection.classList.add('changeYellow');
});

// Change Color Pink
pinkBtn.addEventListener('click', ()=> {
    topSection.classList.add('changePink');
    bottomSection.classList.add('changePink');
});
