const questions = document.querySelectorAll('.form')
const button = document.querySelector('.submitBtn');

const submit = () => {
  for (let i = 0; i < questions.length; i++) {

    if (questions[i].classList.contains('activeQuestion')){
      questions[i].classList.remove('activeQuestion')
      questions[i+1].classList.add('activeQuestion')
      break
    }

  }
    

}

button.addEventListener("click", (e) => {
  submit(e.currentTarget)
})


