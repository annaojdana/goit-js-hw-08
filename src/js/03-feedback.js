import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

// variables
const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";
const throttleSave = throttle((event) => saveChanges(event), 500);

// addEventListeners
form.addEventListener("input", throttleSave);
form.addEventListener("submit", handleSubmit);


getData(); 


// Functions
function handleSubmit(event) {
  event.preventDefault();
  const  { email, message } = event.currentTarget.elements;

  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`email: ${email.value}, message: ${message.value}`);
  remove(LOCALSTORAGE_KEY);  
  event.currentTarget.reset();
}

function saveChanges (event) { 
  const { email, message } = event.currentTarget.elements;
  const iputsData = {
    email: email.value,
    message: message.value,
  }; 
  save(LOCALSTORAGE_KEY, iputsData);
};

function getData() { 
  const storedData = load(LOCALSTORAGE_KEY);
    if (storedData === null) {
        return
    };

    const { email, message } = form.elements;
    
    email.value = storedData.email;
    message.value = storedData.message;
  
};

