var ageArray = [1985, 1988, 1997, 2007, 1958, 1955];

//fn is the callback function, function that we pass as an argument to another function that is called at a later time
function arrayCalc(arr, fn){

    var arrayResults = [];
    
    for(var i = 0; i<arr.length;i++){
        arrayResults.push(fn(arr[i]));    
    }
    
    return arrayResults;
}

function yearsToRetire(fn){
    return 65 - fn;
}

function yearsToRetire(yearOfBirth){
    return 65 - (2019-yearOfBirth);
}

function calcAge(yearOfBirth){
    return 2019-yearOfBirth;
}


function inverviewQuestion(job){
    if(job==='teacher'){
        return function(name){
            console.log('Which subject do you teach ' + name)
        }
    }else if(job==='driver'){
        return function(name){
            console.log('Did you ever drive uber or 99 pop ' + name);
        }
    }else{
        return function(name){
            console.log('What do you do for life ' + name);
        }
    }
}

var teacherQuestion  = inverviewQuestion('teacher');

teacherQuestion('Bruno');