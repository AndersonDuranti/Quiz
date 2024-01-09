document.addEventListener('DOMContentLoaded', function() {
    const scoreElement = document.getElementById('score');
    const wrongAnswersList = document.getElementById('wrong-answers');
  
    const score = localStorage.getItem('score');
    const wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers'));
  
    scoreElement.textContent = score;
  
    wrongAnswers.forEach(questionNumber => {
      const listItem = document.createElement('li');
      listItem.textContent = `Pergunta ${questionNumber}: Você errou`;
      wrongAnswersList.appendChild(listItem);
    });
  
    localStorage.removeItem('score');
    localStorage.removeItem('wrongAnswers');
  });
  