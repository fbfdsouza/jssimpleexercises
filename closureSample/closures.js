/*The idea of closures is that an inner function can stil access the scope chain of an outter function that is already gone from the excution stack*/

function interviewQuestion(job){

    var cool = 'cool you are a ';
    var notCool = 'Oh sorry you are not ';
    if(job==='teacher'){
        return function(name){
            console.log(cool +job +' Which subject do you teach ' + name + '?')
        }
    }else if(job==='driver'){
        return function(name){
            console.log(cool +job +' Did you ever drive uber or 99 pop ' + name + '?');
        }
    }else{
        return function(name){
            console.log(notCool +job + ' What do you do for life ' + name + '?');
        }
    }
}

interviewQuestion('teacher')('Bel');