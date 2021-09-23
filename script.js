const questions = document.querySelectorAll('.form')
const button = document.querySelector('.submitBtn');

const submit = () => {
  for (let i = 0; i < questions.length; i++) {
    questions[i].classList.remove('activeQuestion')
  }
    
  for (let i = 0; i < questions.length; i++) {
    questions[i+1].classList.add('activeQuestion')
  }
  
  
}

button.addEventListener("click", (e) => {
  submit(e.currentTarget)
})


