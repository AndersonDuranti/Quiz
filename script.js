const questions = [
    {
      question: "Qual país sediou as Olimpíadas de 2020 (realizadas em 2021)?",
      options: ["Japão", "China", "Brasil"],
      answer: "Japão"
    },
    // Adicione as outras perguntas aqui
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let attempts = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const currentQuizQuestion = questions[currentQuestion];
  
    questionElement.textContent = currentQuizQuestion.question;
    optionsContainer.innerHTML = '';
  
    currentQuizQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option');
      button.onclick = () => check(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function check(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    const feedback = document.getElementById('feedback');
  
    if (selectedOption === correctAnswer) {
      feedback.textContent = 'Resposta correta!';
      score++;
      nextQuestion();
    } else {
      attempts++;
      if (attempts < 2) {
        feedback.textContent = 'Resposta errada! Tente novamente.';
      } else {
        feedback.textContent = `Resposta errada! A resposta correta é: ${correctAnswer}`;
        nextQuestion();
      }
    }
  }
  
  function nextQuestion() {
    attempts = 0;
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
      document.getElementById('feedback').textContent = '';
    } else {
      const quizContainer = document.querySelector('.quiz-container');
      quizContainer.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;
    }
  }
  
  // Iniciar o quiz ao carregar a página
  displayQuestion();
  