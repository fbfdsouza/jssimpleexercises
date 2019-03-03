var bills
var tips = new Array();
var billsAndTips = new Array();
bills = [124,48,268];

var calculateBillsAndTips = function(bill){
    switch(true){
        case bill<50:
            tips.push(bill*0.2);
            billsAndTips.push(bill*1.2);
            break;
        case bill>=50&&bill<200:
            tips.push((bill*0.15));
            billsAndTips.push(bill*1.15);
            break;
        default:
            tips.push((bill*0.1));
            billsAndTips.push(bill*1.1);     
    }
}

calculateBillsAndTips(bills[0]);
calculateBillsAndTips(bills[1]);
calculateBillsAndTips(bills[2]);

console.log('all the tips: ' + tips);
console.log('total for each restaurant + tips: ' + billsAndTips);
