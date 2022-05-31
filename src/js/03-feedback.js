import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

// variables
const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";
const throttleSave = throttle(event => saveChanges(event), 500);

// addEventListeners
window.addEventListener('load', getData);
form.addEventListener("input", throttleSave);
form.addEventListener("submit", handleSubmit);

// functions
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`email: ${email.value}, message: ${message.value}`);
  remove(LOCALSTORAGE_KEY);  
  event.currentTarget.reset();
}

function saveChanges (data) {
    
  const {
    elements: { email, message }
  } = data.currentTarget;
    const iputsData = {
        emailContent: email.value,
        messageContent: message.value,
    }; 
   
    save(LOCALSTORAGE_KEY, iputsData);
};

function getData (data) {
    let currentData = load(LOCALSTORAGE_KEY);
    console.log(currentData);
  const { emailContent, messageContent }
        = currentData;
     const {
    elements: { email, message }
    } = data.currentTarget;
    email.value = emailContent;
    message.value = messageContent;
}

