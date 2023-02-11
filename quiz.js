const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .6)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which smartphone can not take 8k videos?',
    answers: [
      { text: 'Oneplus 11 pro', correct: false},
      { text: 'Vivo X90 pro +', correct: false },
      { text: 'Xiaomi 12s Ultra', correct: false },
      { text: 'iPhone 14 pro max', correct: true}
    ]
  },
          {
    question: 'What is the name of the biggest technology company in South Korea?',
    answers: [
      { text: 'Oneplus', correct: false},
      { text: 'Vivo', correct: false },
      { text: 'Oppo', correct: false },
      { text: 'Samsung', correct: true}
    ]
  },
        {
    question: 'Which is the fastest proccessor in this?',
    answers: [
      { text: 'Tensor G2', correct: false},
      { text: 'Exynos 2200', correct: false },
      { text: 'A16 bionic chip', correct: true },
      { text: 'Snapdragon 8 gen 2', correct: false}
    ]
  },
      {
    question: 'What is "cynophobia"?',
    answers: [
      { text: 'Fear of dark', correct: false},
      { text: 'Fear of dog', correct: true },
      { text: 'Fear of letters', correct: false },
      { text: 'Fear of red color', correct: false}
    ]
  },

      {
    question: 'Which country invented ice cream?',
    answers: [
      { text: 'China', correct: true },
      { text: 'America', correct: false },
      { text: 'England', correct: false },
      { text: 'Russia', correct: false}
    ]
  },
    {
    question: 'What is the most consumed manufactured drink in the world?',
    answers: [
      { text: 'Coca Cola', correct: false },
      { text: 'Coffee', correct: false },
      { text: 'Pepsi', correct: false },
      { text: 'tea', correct: true }
    ]
  },

  {
    question: 'When was the first iPhone released?',
    answers: [
      { text: '20011', correct: false },
      { text: '2007', correct: true },
      { text: '2013', correct: false },
      { text: '2008', correct: false }
    ]
  },
    {
    question: 'What is the smallest country in the world?',
    answers: [
      { text: 'Monaco', correct: false },
      { text: 'Vatican City', correct: true },
      { text: 'Nauru', correct: false },
      { text: 'Tuvalu', correct: false }


    ]
  },
  {
    question: 'In which country was Elon Musk born?',
    answers: [
      { text: 'Etheopia', correct: false },
      { text: 'South Africa', correct: true },
      { text: 'Egypt', correct: false },
      { text: 'Afganistan', correct: false }

    ]
  },
  {
    question: 'Who is the best YouTube channel?',
    answers: [
      { text: 'Inzo Tech', correct: true },
      { text: 'Mr beast', correct: false },
      { text: 'Pwedepie', correct: false }
    ]
  },
  {
    question: ' How many countries in the Coca Cola does not exist',
    answers: [
      { text: '6', correct: false },
      { text: '2', correct: true },
      { text: '8 ', correct: false },
      { text: '4', correct: false }
    ]
  },
  {
    question: 'In which country dose not have any pyramids',
    answers: [
      { text: 'Italy', correct: false },
      { text: 'Spain', correct: true },
      { text: 'Sudan', correct: false },
      { text: 'Peru', correct: false }

    ]

  }
]