import './sass/main.scss';
import Notiflix from "notiflix";

const form = document.querySelector(".form")
console.log(form);
const button = document.querySelector("button")
console.log(button);

form.addEventListener("submit", onSubmit);

function onSubmit(e){
  e.preventDefault();
  console.log(e.currentTarget);
  let delay = Number(form.delay.value); 
  let step = Number(form.step.value);
  let amount = Number(form.amount.value);
  console.log(delay, step, amount);

for(let i=1; i<=amount; i +=1){
  createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  });
 delay = delay+step;
} 
}
  
function createPromise(position, delay) {
    
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({position, delay});
          }
        else {
          reject({position, delay});
         }  
      }, delay);
    })
   
    } 
  
    
  
  
 
