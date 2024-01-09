const questions = [
    {
      question: "Qual país sediou as Olimpíadas de 2020 (realizadas em 2021)?",
      options: ["Japão", "China", "Brasil"],
      answerIndex: 0 // Resposta: Japão
    },
    {
      question: "Qual é o nome do vírus que causou a pandemia global em 2019-2020?",
      options: ["H1N1", "COVID-19", "Ebola"],
      answerIndex: 1 // Resposta: COVID-19
    },
    {
      question: "Quem é o CEO da Tesla e SpaceX?",
      options: ["Mark Zuckerberg", "Elon Musk", "Jeff Bezos"],
      answerIndex: 1 // Resposta: Elon Musk
    },
    {
      question: "Qual é o nome da primeira vacina contra a COVID-19 a ser aprovada para uso emergencial?",
      options: ["Pfizer-BioNTech", "Moderna", "Johnson & Johnson"],
      answerIndex: 0 // Resposta: Pfizer-BioNTech
    },
    {
      question: "Qual é a capital da Austrália?",
      options: ["Melbourne", "Sydney", "Canberra"],
      answerIndex: 2 // Resposta: Canberra
    },
    // Adicione mais perguntas abaixo
    {
      question: "Quem é o autor da série de livros 'As Crônicas de Gelo e Fogo'?",
      options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling"],
      answerIndex: 1 // Resposta: George R.R. Martin
    },
    {
      question: "Qual é o maior oceano da Terra?",
      options: ["Oceano Atlântico", "Oceano Pacífico", "Oceano Índico"],
      answerIndex: 1 // Resposta: Oceano Pacífico
    },
    {
      question: "Qual é a montanha mais alta do mundo?",
      options: ["Monte Everest", "Monte Kilimanjaro", "Monte K2"],
      answerIndex: 0 // Resposta: Monte Everest
    },
    {
      question: "Quem pintou a Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
      answerIndex: 1 // Resposta: Leonardo da Vinci
    },
    {
      question: "Qual é o maior planeta do sistema solar?",
      options: ["Júpiter", "Saturno", "Urano"],
      answerIndex: 0 // Resposta: Júpiter
    },
    {
      question: "Qual é o evento anual realizado pela Apple para lançar novos produtos?",
      options: ["Apple Expo", "Apple Fest", "Apple Keynote"],
      answerIndex: 2 // Resposta: Apple Keynote
    },
    {
      question: "Qual é a fórmula química da água?",
      options: ["H2O", "CO2", "O2"],
      answerIndex: 0 // Resposta: H2O
    },
    {
      question: "Qual é a capital da Rússia?",
      options: ["São Petersburgo", "Moscou", "Kiev"],
      answerIndex: 1 // Resposta: Moscou
    },
    {
      question: "Quem é o diretor do filme 'Pulp Fiction'?",
      options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg"],
      answerIndex: 1 // Resposta: Quentin Tarantino
    },
    {
      question: "Quem escreveu 'Hamlet'?",
      options: ["William Shakespeare", "Charles Dickens", "Jane Austen"],
      answerIndex: 0 // Resposta: William Shakespeare
    }
    // Adicione mais perguntas conforme necessário
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let wrongAnswers = [];
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const currentQuizQuestion = questions[currentQuestion];
  
    questionElement.textContent = currentQuizQuestion.question;
    optionsContainer.innerHTML = '';
  
    currentQuizQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option');
      button.onclick = () => checkAnswer(index);
      optionsContainer.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswerIndex = questions[currentQuestion].answerIndex;
  
    if (selectedOption === correctAnswerIndex) {
      score++;
    } else {
      wrongAnswers.push(currentQuestion + 1);
    }
  
    nextQuestion();
  }
  
  function nextQuestion() {
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      localStorage.setItem('score', score);
      localStorage.setItem('wrongAnswers', JSON.stringify(wrongAnswers));
      window.location.href = 'results.html';
    }
  }
  
  displayQuestion();
  