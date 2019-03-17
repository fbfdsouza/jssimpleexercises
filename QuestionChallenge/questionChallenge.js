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

Question.prototype.checkAnswer = function() {
    
    var answer = prompt(this.question + ' type exit in order to quit the program');
    
   if(answer===this.correctAnswer){
       console.log('Correct Answer :)');
       score++;
       console.log('Your current score is :' + score);
       console.log('____________________________________');
       }
    else{
       console.log('Not Correct');
       console.log('Your current score is :' + score);
       console.log('____________________________________');
     }
    
     return answer;
}

var exit = 'keepAsking';

//randomically select a question from the array questions
while (exit!='exit') {
    
            var questionSelection = Math.floor(Math.random() * questions.length);
            var question = questions[questionSelection];
            question.ask();
            exit = question.checkAnswer();
     

}})();