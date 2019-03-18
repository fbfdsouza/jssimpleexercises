(function(){
    
    
score = 0;

var Question = function (question, answers, correctAnswer, number) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.number = number;
}

var questions = [new Question('What is Bruno\'s favorite food? ', ['cake', 'chicken wings', 'fruit'], '1', 0),
                 new Question('What is Bruno\'s mother\'s name? ', ['Anne', 'Mary', 'Lucia'], '2', 1),
                 new Question('What is Bruno graduated at? ', ['computer science', 'law', 'history of Brazil'], '0', 2)];

Question.prototype.ask = function () {

    console.log(this.question)
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }  
   
}

Question.prototype.checkAnswer = function(callBack) {
    var sc;
    var answer = prompt(this.question + ' type exit in order to quit the program');
    
   if(answer===this.correctAnswer){
       console.log('Correct Answer :)');
       score++;
       console.log('Your current score is :' + callBack(true));
       console.log('____________________________________');
       }
    else{
       console.log('Not Correct');
       console.log('Your current score is :' + callBack(false));
       console.log('____________________________________');
     }
    
     return answer;
}


var exit = 'keepAsking';
    
    
function updateScore(){
    var sc = 0;
    
    //the power of closures will give this next function access to the sc variable of the parent function as many as time as it is called
    return function(answer){
        if(answer)
            return ++sc;
        else
            return sc;
    }
    
}
    
var updatingScore = updateScore();

//randomically select a question from the array questions
while (exit!='exit') {
    
            var questionSelection = Math.floor(Math.random() * questions.length);
            var question = questions[questionSelection];
            question.ask(); //adding a callback function
            exit = question.checkAnswer(updatingScore);
     

}})();