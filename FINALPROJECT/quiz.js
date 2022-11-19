const questions = [
    {
      "question": "How much time do you have?",
      "answer1": "Less than an hour",
      "answer1Total": "1",
      "answer2": "1-4 hours",
      "answer2Total": "2",
      "answer3": "As long as it takes!",
      "answer3Total": "3"
    },
    {
      "question": "Pick a food",
      "answer1": "Salad",
      "answer1Total": "1",
      "answer2": "Cake",
      "answer2Total": "2",
      "answer3": "Pizza",
      "answer3Total": "3"
    },
    {
      "question":
      "Pick a fruit/vegtable",
      "answer1": "Carrot",
      "answer1Total": "1",
      "answer2": "Strawberry",
      "answer2Total": "3",
      "answer3": "Mushroom",
      "answer3Total": "2"
    },
    {
      "question": "What cuisine do you most prefer?",
      "answer1": "Aisan",
      "answer1Total": "3",
      "answer2": "Italian",
      "answer2Total": "2",
      "answer3": "American",
      "answer3Total": "1"
    },
    {
      "question": "Which on is most similiar to you",
      "answer1": "You have a healthy and balanced diet",
      "answer1Total": "1",
      "answer2": "You eat alot of snacks",
      "answer2Total": "2",
      "answer3": "You eat alot of junk food",
      "answer3Total": "3"
    },
    {
      "question":
        "Pick a flavor",
      "answer1": "Spicy",
      "answer1Total": "3",
      "answer2": "Sweet",
      "answer2Total": "2",
      "answer3": "Savoury",
      "answer3Total": "1"
    },
    {
      "question": "Pick a drink",
      "answer1": "Water",
      "answer1Total": "1",
      "answer2": "Hot Chocolate",
      "answer2Total": "2",
      "answer3": "Soda",
      "answer3Total": "3"
    }
  ]
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  function generateQuestions (index) {
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total; 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
  }
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);

    currentQuestion++;

        selectedOption.checked = false;
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
          
           `<div class="final-score" id="score">
            <h1> Your Score: ${totalScore}  </h1>
              <div class= "filling"> <p>15 - 21 Points: You like filling, flavourful foods! Try foods that are rich in nutrients and protein </div>
              </p>
              <p>10 - 15 Points: You have a sweet tooth. Use ingredients with natural sweetness and sweet spices like cinamon and nutmeg </p>
              <p>5 - 10 Points: You like heavy food. Cook up some comfort foods with alot of starch  </p>
              <p> Less than five points: Youre a mix of everything. Pick one of the three options above and cook away! </p>
          </div>
           `;
          return;
      }
      generateQuestions(currentQuestion);
}

function loadPreviousQuestion() {
    currentQuestion--;
    score.pop();
    generateQuestions(currentQuestion);
}

function restartQuiz(e) {
    if(e.target.matches('button')) {
    currentQuestion = 0;
    score = [];
    location.reload();
    }

}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);


  