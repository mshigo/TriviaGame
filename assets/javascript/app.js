//click handlers
$(document).on("click", "#start", function() {
    trivia.start();
});

$(document).on("click", "#done", function() {
    trivia.done();
});

//questions array
var questionsArr = [
    {
        question: "True or false? Tottenham Hotspur Football Club has never won the Premier League.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or false? Manchester United is the most decorated club in the Premier League with 13 League Titles.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or false? The Premier League consists of 18 teams.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "True or false? The Premier League utilizes VAR (Video Assistant Referee) to review and possibly reverse calls.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "True or false? The 3 teams with the least points at the end of the season are relegated to the division below.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "True or false? Teams earn 3 points for a win, 1 point for a draw, and 0 points for a loss.",
        answers: ["True", "False"],
        correctAnswer: "True"
    }
];

//timer for setInterval
var timer;

//Trivia object
var trivia = {
    counter: 60,
    correct: 0,
    incorrect: 0,

    //start function
    start: function() {

    }
}