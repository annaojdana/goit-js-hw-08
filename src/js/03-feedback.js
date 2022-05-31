// import throttle from 'lodash.throttle';
import { save, remove } from './storage';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";


form.addEventListener("input", follow);

form.addEventListener("submit", handleSubmit);

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

function follow (data) {
    
  const {
    elements: { email, message }
  } = data.currentTarget;
    const iputsData = {
        email: email.value,
        message: message.value,
    }; 
   
    save(LOCALSTORAGE_KEY, iputsData);

}

