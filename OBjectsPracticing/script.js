var bruno = {
    firstName:'Bruno',
    lastName:'Filgueiras',
    birthYear: 1985,
    family:['Bel','Betimar','Benicio','Lucia'],
    job:'Support Analyst',
    isMarried:false,
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};


bruno.calcAge();
console.log(bruno);