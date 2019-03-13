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


 beth.calcAge = bruno.calcAge;

 beth.calcAge();