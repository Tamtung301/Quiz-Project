
const questions = [
    {
        question: "Which is the best Anime?",
        answers: {
        a : "Dragon Ball Z",
        b : "Naruto/Naruto Shipudden",
        c : "One Piece",
        d : "My Hero Academia"
        },
    correctAnswer: "a"
    },
    {
        question: "When was the first iPhone released?",
        answers: {
        a : "2005",
        b : "2010",
        c : "2001",
        d : "2007"
        },
        correctAnswer: "d"
    },
    {
        question: "Which is NOT a Windows OS?",
        answers: {
        a : "XP",
        b : "7",
        c : "9",
        d : "8.1"
        },
        correctAnswer: "c"
    },
    {
        question: "What is Spider-Man's real name?",
        answers: {
        a : "Tony Stark",
        b : "Peter Parker",
        c : "Stan Lee",
        d : "Reed Richards"
        },
        correctAnswer: "b"
    },
    {
        question: "What does W.W.W stand for?",
        answers: {
        a : "Wireless Web Warriors",
        b : "World Wide Websites",
        c : "World Wide Web",
        d : "Wireless Widget Wizards"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the mascot of Cal State Fullerton?",
        answers: {
        a : "Titan",
        b : "Elephant",
        c : "Coyote",
        d : "Shark"
        },
        correctAnswer: "b"
    },
    {
        question: "What does CPU stand for?",
        answers: {
        a : "Central Processing Unit",
        b : "Computer Processing Unit",
        c : "Cyber Prismal Unit",
        d : "Canda Panama United-States"
    },
    correctAnswer: "a"
    },
    {
        question: "What is Apple's stock market symbol?",
        answers: {
        a : "AAPL",
        b : "APPL",
        c : "APLE",
        d : "SJOB"
        },
        correctAnswer: "a"
    },
    {
        question: "What does GUI mean?",
        answers: {
        a : "Galactic User Interface",
        b : "Graphical User Interface",
        c : "Genius User Interface",
        d : "Graphical User Interaction"
        },
        correctAnswer: "b"
    },
    {
        question: "Who was the creator fo PayPal?",
        answers: {
        a : "Mark Zuckerberg", 
        b : "Chase Bank",
        c : "Grant Cardon",
        d : "Elon Musk"
        },
        correctAnswer: "d"
    }];

    let currentQuestionIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;


    let usernames = [];
    let passwords = [];

    const registerButton = document.getElementById('registerBtn');
    registerButton.addEventListener('click', function(e) {

    const usernameInput = document.getElementById('uname');
    const passwordInput = document.getElementById('pswrd');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    usernames.push(username);
    passwords.push(password);

    });

    const nextBtn = document.getElementById('nextBtn')
    nextBtn.addEventListener('click', function() {
      event.preventDefault();
      console.log(questions);
  });

  function updateTracker() {
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
  }

  function displayQuestion() {
    const container = document.getElementById('questionContainer');
    const questionObj = questions[currentQuestionIndex];

    container.innerHTML = '';

      const qDiv = document.createElement('div');
      qDiv.className = 'question'
      qDiv.textContent = `Question ${currentQuestionIndex + 1}: ${questionObj.question}`;
      container.appendChild(qDiv);
      qDiv.appendChild(document.createElement('br'))

      // Shows the choices with a radio button for selection
      const choicesDiv = document.createElement('div');
      choicesDiv.className = 'choices-container';

      for (const choice in questionObj.answers) {
        const choiceInput = document.createElement('input');
        choiceInput.type = 'radio';
        choiceInput.name = `choice`;
        choiceInput.value = choice;

        const choiceLabel = document.createElement('label');
        choiceLabel.textContent = `${choice.toUpperCase()}: ${questionObj.answers[choice]}`;

        choicesDiv.appendChild(choiceInput);
        choicesDiv.appendChild(choiceLabel);
        choicesDiv.appendChild(document.createElement('br'));

      }
      container.appendChild(choicesDiv);
      updateTracker();

/*       container.appendChild(choicesDiv); */

    function nextQuestion() {

      const selectedChoice = document.querySelector('input[name="choice"]:checked');
      if (!selectedChoice) {
          alert("Please select an answer before moving to the next question.");
          return; // Exit the function if no choice is selected
      }

      const questionObj = questions[currentQuestionIndex];
      if (selectedChoice.value === questionObj.correctAnswer) {
          correctCount++;
      } else {
          incorrectCount++;
      }

      currentQuestionIndex++;

      if (currentQuestionIndex == 9) {
        nextBtn.textContent = "Submit Quiz"
      }

      if (currentQuestionIndex >= questions.length) {
        alert(`End of quiz! Good job, ${usernames[0]}! \n\nYou scored ${(correctCount/10) * 100}%\n\nClick "OK" to restart the quiz.`);
        currentQuestionIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
      }
      displayQuestion();
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      displayQuestion();

      const nextButton = document.getElementById('nextBtn');
      nextButton.addEventListener('click', nextQuestion);

    });
  }

  displayQuestion();
  updateTracker();