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
        question: "#1 True or False? Tottenham Hotspur Football Club has never won the Premier League.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "#2 True or False? Manchester United is the most decorated club in the Premier League with 13 League Titles.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "#3 True or False? The Premier League consists of 18 teams.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "#4 True or False? The Premier League utilizes VAR (Video Assistant Referee) to review and possibly reverse calls.",
        answers: ["True", "False"],
        correctAnswer: "False"
    },
    {
        question: "#5 True or False? The 3 teams with the least points at the end of the season are relegated to the division below.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "#6 True or False? Teams earn 3 points for a win, 1 point for a draw, and 0 points for a loss.",
        answers: ["True", "False"],
        correctAnswer: "True"
    }
];

//Trivia object
var trivia = {
    counter: 60,
    correct: 0,
    incorrect: 0,

    //countdown function
    countdown: function() {
        trivia.counter--;
        $("#timer").html(trivia.counter);
        if (trivia.counter === 0) {
            self.stop();
            trivia.done();
        }
    },
    //start function
    start: function() {
        $("#start").remove();
        var timer = setInterval(trivia.countdown, 1000);
        $("#main").prepend("<h2>Time remaining: <span id='timer'>60</span> seconds</h2>");

        for (var i = 0; i < questionsArr.length; i++) {
            $("#trivia").append("<h2>" + questionsArr[i].question + "</h2>");
            for (var j = 0; j < questionsArr[i].answers.length; j++) {
                $("#trivia").append("<input type='radio' name='Question #" + i + "' value='" + questionsArr[i].answers[j] + "''>" + questionsArr[i].answers[j]);
            }
        }
        $("#trivia").append("<button id='done'>Done!</button>");
    },
    //done function
    done: function() {
        var input = $("#trivia").children("input:checked");

        for (var i = 0; i < input.length; i++) {
            if ($(input[i]).val() === questionsArr[i].correctAnswer) {
                trivia.correct++;
            }
            else {
                trivia.incorrect++;
            }
        }
        clearInterval(timer);
        $("#main h2").remove();
        $("#main").html("<h2>Finished!</h2>");
        $("#main").append("<h3>Correct answers: " + this.correct + "<h/3>");
        $("#main").append("<h3>Incorrect answers: " + this.incorrect + "</h3>");

        if (this.correct >= 3) {
            $("#main").append("<h3>Congrats, you passed!</h3>");
        } else {
            $("#main").append("<h3>Sorry, you failed. Please try again.</h3>");
        }
    }
}