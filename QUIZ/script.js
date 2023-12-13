const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
      {
        question: "What is the capital of Russia?",
        options: ["Belgium", "Moscow", "Brussels", "Barcelona"],
        correctAnswer: "Moscow"
      },
      {
          question: "What is the capital of United Kingdom?",
          options: ["Egypt", "Ethopia", "London", "Costa Rica"],
          correctAnswer: "London"
        },
        {
            question: "What is the capital of Italy?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Rome"
          },
        {
          question: "What is the capital of Japan?",
          options: ["Tokyo", "Poland", "Morocco", "Romania"],
          correctAnswer: "Tokyo"
        },
        {
            question: "What is the capital of Portgual?",
            options: ["Lisbon", "Madrid", "San José", "Athens"],
            correctAnswer: "Lisbon"
          },
        {
            question: "What is the capital of Spain?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Madrid"
          },
        {
          question: "What is the capital of Brazil?",
          options: ["San Salvador", "Tehrān", "Singapore", "Brasília"],
          correctAnswer: "Brasília"
        },
        {
            question: "What is the capital of Germany?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            correctAnswer: "Berlin"
          },
          {
              question: "What is the capital of Argentina?",
              options: ["Beijing", "Barcelona", "Buenos Aires", "Baghdad"],
              correctAnswer: "Buenos Aires"
            },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const resultContainer = document.getElementById('result');
  
    questionContainer.textContent = quizData[currentQuestion].question;
  
    optionsContainer.innerHTML = '';
    quizData[currentQuestion].options.forEach((option, index) => {
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'options';
      input.value = option;
      input.id = `option${index}`;
      const label = document.createElement('label');
      label.textContent = option;
      label.setAttribute('for', `option${index}`);
      optionsContainer.appendChild(input);
      optionsContainer.appendChild(label);
      optionsContainer.appendChild(document.createElement('br'));
    });
  
    resultContainer.textContent = '';
  }
  
  function nextQuestion() {
    const selectedOption = document.querySelector('input[name="options"]:checked');
  
    if (!selectedOption) {
      alert('Please select an answer.');
      return;
    }
  
    if (selectedOption.value === quizData[currentQuestion].correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `You scored ${score} out of ${quizData.length}. Your percentage is ${(score / quizData.length) * 100}%`;
  }
  
  loadQuestion();
  