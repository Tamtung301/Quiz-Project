
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
    // Initialize variables that will hold user info
    let currentQuestionIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let usernames = [];
    let passwords = [];
    let firstNames = [];
    let lastNames = [];
    let emails = [];

    // Click event listener that saves information from modal into arrays that hold user info
    const registerButton = document.getElementById('registerBtn');
registerButton.addEventListener('click', function(e) {

  // Associates html modal input variables with JS variables
const usernameInput = document.getElementById('uname');
const passwordInput = document.getElementById('pswrd');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');

// Trims empty surrounding characters from user inputs
const username = usernameInput.value.trim();
const password = passwordInput.value.trim();
const firstName = firstNameInput.value.trim();
const lastName = lastNameInput.value.trim();
const email = emailInput.value.trim();

// Saves user info
usernames.push(username);
passwords.push(password);
lastNames.push(lastName);
firstNames.push(firstName);
emails.push(email);

});
    // Click event listener for next questions
    const nextBtn = document.getElementById('nextBtn')
    nextBtn.addEventListener('click', function() {
      event.preventDefault();
      console.log(questions);
  });
  // function initializer to update the correct/incorrect tracker
  function updateTracker() {
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
  }
  // function handles displaying questions into the questionContainer in HTML
  function displayQuestion() {
    const container = document.getElementById('questionContainer');
    const questionObj = questions[currentQuestionIndex];
    // Used to erase contents of container before reloading next question
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
        const choiceContainer = document.createElement('div'); // Container for each choice
        choiceContainer.className = 'choice-container';

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
function checkAnswer(selectedChoice, questionObj) {
  if (selectedChoice.value === questionObj.correctAnswer) {
    // Increments correct choice answer
      correctCount++;
      alert("Correct answer!");
  } else {
    // Increments incorrect choice counter and displays correct answer
      incorrectCount++;
      alert(`Wrong answer! The correct answer is: ${questionObj.answers[questionObj.correctAnswer]}`);
  }
}

    function nextQuestion() {

      const selectedChoice = document.querySelector('input[name="choice"]:checked');
      if (!selectedChoice) {
          alert("Please select an answer before moving to the next question.");
          return; // Exit the function if no choice is selected
      }

    const questionObj = questions[currentQuestionIndex];
    checkAnswer(selectedChoice, questionObj); // Call the checkAnswer function
    currentQuestionIndex++; // Increments current question counter

      if (currentQuestionIndex == 9) {
        nextBtn.textContent = "Submit Quiz" // Changes text on button to Submit Quiz on final question
      }

      if (currentQuestionIndex >= questions.length) {
            // Calculate grade percentage
    var gradePercentage = (correctCount / 10) * 100;

    // Determine letter grade based on grade percentage
    var letterGrade;
    if (gradePercentage >= 90) {
        letterGrade = 'A';
    } else if (gradePercentage >= 80) {
        letterGrade = 'B';
    } else if (gradePercentage >= 70) {
        letterGrade = 'C';
    } else if (gradePercentage >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    // Mock report card output
    var reportCard = `Report Card\n
Username: ${usernames[0]}
First Name: ${firstNames[0]}
Last Name: ${lastNames[0]}
Email: ${emails[0]}
Grade Percentage: ${gradePercentage.toFixed(2)}%
Letter Grade: ${letterGrade}`;

    // Display report card
    alert(`${reportCard}`);

    // Reset quiz variables
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
      }
      displayQuestion();
    }

    // Loads form container and handles changing the questions when nextBtn is clicked
    document.addEventListener('DOMContentLoaded', function() {
      displayQuestion();

      const nextButton = document.getElementById('nextBtn');
      nextButton.addEventListener('click', nextQuestion);

    });
  }

  displayQuestion();
  updateTracker();