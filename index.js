const nameTag = document.getElementById('name-tag');
const nameSection = document.getElementById('name-section');
const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');
const nameInput= document.getElementById('name-input');
const inputBtn = document.getElementById('submit-btn');

//inputName.addEventListener('input', (event)=> {
    //console.log(event.target.value);
//})

//nameInput.addEventListener('input', (event)=> {
//    console.log(event.target.value);
//   nameSection.innerText = event.target.value;
//})


inputBtn.addEventListener('click', () => {
    nameSection.innerText = nameInput.value;
}
