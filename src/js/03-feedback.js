import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

// variables
const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";
const  { email, message } = form.elements;

// addEventListeners
form.addEventListener("input", throttle(saveChanges, 500
));
form.addEventListener("submit", handleSubmit);

getData();

// Functions
function handleSubmit(event) {
  event.preventDefault();
  
  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`email: ${email.value}, message: ${message.value}`);
  remove(LOCALSTORAGE_KEY);  
  event.target.reset();
}

function saveChanges (event) { 
  const iputsData = {
    email: email.value,
    message: message.value,
  }; 
  save(LOCALSTORAGE_KEY, iputsData);
};

function getData() { 
  const storedData = load(LOCALSTORAGE_KEY);
 
    if (storedData === undefined ) {
        return
    };
  
    email.value = storedData.email;
    message.value = storedData.message;
  
};