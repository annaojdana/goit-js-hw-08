const e=document.querySelector(".feedback-form");e.addEventListener("input",throttle((e=>function(e){const{elements:{email:t,message:r}}=e.currentTarget,a={email:t.value,message:r.value};!function(e,t){try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}}("feedback-form-state",a)}(e)),500)),e.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:r}}=e.currentTarget;if(""===t.value||""===r.value)return alert("Please fill in all the fields!");console.log(`email: ${t.value}, message: ${r.value}`),function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.e90c7373.js.map
