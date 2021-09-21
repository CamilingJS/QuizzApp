const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const questionNums = document.quertySelector('qnum');
const submitBtn = document.getElementsByClassName('submitBtn');

let currentQuestion = {}
let acceptingAnswers = true
let availableQuestions = []

let questionsArr = [
  {questiion: "Which of the following is not a real eCommerce platform?",
   choice1: "Shopify", 
   choice2: "WooCommerce",
   choice3: "ShopCommerce",
   choice4: "BigCommerce",
   answer: "ShopCommerce"
  },
  {questiion: "If Shopify is so good, why are Shopify developers necessary?",
   choice1:"To save time on things like store setups and migrations",
   choice2:"To extend the limited design options and funcationalities of themes with custom code",
   choice3:"To provide support with a deep understanding of how the platform works and what its limitations are",
   choice4:"All the above",
   answer:"All the above"
  },
  {questiion: "If Shopify is so good, why are Shopify developers necessary?",
  choice1:"They are paid extremely well",
  choice2:"There is a high demand for them",
  choice3:"They need to know web development, the platform itself, and the liquid template language",
  choice4:"All the above",
  answer:"All the above"  
  }
]

const MAX_QUESTIONS =3


startQuiz = () => {
  questionCounter = 0
  availableQuestions = [...questionsArr]
  getNewQuestion()
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS ){
    localStorage.setItem('')
  }

  questionCounter++
  questionNums.innerText = `Question ${questionCount} / ${MAX_QUESTIONS}`

  currentQuestion = availableQuestions[]
}


