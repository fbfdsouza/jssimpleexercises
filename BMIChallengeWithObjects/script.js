var john = {
    firstName:'John',
    height:'1.8',
    mass:120,
    calculateBMI : function(){
        this.BMI = this.mass / (this.height*this.height);
    }
};

var mark = {
    firstName:'Mark',
    height:'2.1',
    mass:100,
    calculateBMI : function(){
        this.BMI = this.mass / (this.height*this.height);
    }
};


john.calculateBMI();
mark.calculateBMI();
console.log(john);
console.log(mark);

console.log(john.BMI>mark.BMI? 'John\'s BMI is bigger ' + john.BMI : 'Mark\'s BMI is bigger' + mark.BMI);


    
    
