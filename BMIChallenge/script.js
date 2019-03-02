var johnWeight, markWeight, johnHeight, markHeight, johnBMI, markBMI, markBMIhiggerThanJohnBMI;

johnWeight = prompt("Enter John's weight");
johnHeight = prompt("Enter John's height");

johnBMI = calculateBMI(johnHeight,johnWeight);
//johnBMI = johnWeight/(johnHeight*johnHeight);


markWeight = prompt("Enter Mark's weight");
markHeight = prompt("Enter Mark's height");

//markBMI = markWeight/(markHeight*markHeight);
markBMI = calculateBMI(markHeight,markWeight);

markBMIhiggerThanJohnBMI = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s ' + markBMIhiggerThanJohnBMI);

console.log("Mark BMI: " + markBMI);

console.log("John BMI: " + johnBMI );


function calculateBMI(height, weight){
    return weight/(height*height);
}