const e=document.querySelector(".feedback-form");e.addEventListener("input",t),e.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:r}}=e.currentTarget;if(""===t.value||""===r.value)return alert("Please fill in all the fields!");console.log(`email: ${t.value}, message: ${r.value}`),function(e){try{localStorage.removeItem(e)}catch(e){console.error("Remove state error: ",e.message)}}("feedback-form-state"),e.currentTarget.reset()}));const t=e=>{console.log("event: ",e),console.log("event type: ",e.type),console.log("currentTarget: ",e.currentTarget)};
//# sourceMappingURL=03-feedback.c47943d2.js.map
