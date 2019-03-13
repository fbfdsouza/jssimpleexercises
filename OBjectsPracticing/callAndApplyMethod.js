/*Call method does function borrowing it receives as the main parameter a object (becomes the this - replaces the other object role), it should follow the syntaxe 
objectToLendFunctino.functionMethodName.call(objectToBorrowFunction, parameter1, parameter2, ...)


the apply method does exactly the same but it will receive only two arguments, the object (this), and an array with the elements used in the other function that will be lent, the other function
originally also has to receive an array as the argument
*/

var bruno = {
    firstName:'Bruno',
    lastName:'Filgueiras',
    birthYear: 1985,
    family:['Bel','Betimar','Benicio','Lucia'],
    job:'Analista de Suporte',
    isMarried:false,
    calcAge: function(){
        return this.age = 2019 - this.birthYear;
    }
};


var beth = {
    firstName:'Beth',
    lastName:'Farias',
    birthYear: 1997,
    family:['Ana','Andre','Irene','Tiago'],
    job:'Programadora',
    isMarried:false
 };


 bruno.calcAge.call(beth);


//teaches sample

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
