johnFamily = {
    fullName: 'John Smith',
    bills:[124,48,268,180,42],
    calcTipsAndBills : function(){
        this.tips = [];
        this.billsAndTips = [];
        
        for(var i=0;i<this.bills.length;i++){
            var bill = this.bills[i];
             switch(true){
                case bill<50:
                    this.tips.push(bill*0.2);
                    this.billsAndTips.push(bill*1.2);
                    break;
                case bill>=50&&bill<200:
                    this.tips.push(bill*0.15);
                    this.billsAndTips.push(bill*1.15);
                    break;
                default:
                    this.tips.push(bill*0.1);
                    this.billsAndTips.push(bill*1.1);     
            }   
        }
    }    
}

markFamily = {
    fullName: 'Mark Sellers',
    bills:[77,75,110,45],
    calcTipsAndBills : function(){
        this.tips = [];
        this.billsAndTips = [];
        for(var i=0;i<this.bills.length;i++){
            var bill = this.bills[i];
             switch(true){
                case bill<100:
                    this.tips.push(bill*0.2);
                    this.billsAndTips.push(bill*1.2);
                    break;
                case bill>=100&&bill<300:
                    this.tips.push((bill*0.1));
                    this.billsAndTips.push(bill*1.1);
                    break;
                default:
                    this.tips.push(bill*0.25);
                    this.billsAndTips.push(bill*1.25);     
            }  
        }
    } 
}


var averageTip = function(arrayOfTips){
    var sum = 0;
    for(var i=0;i<arrayOfTips.length;i++){
        sum = sum + arrayOfTips[i];
    }
    
    return sum/arrayOfTips.length;
}

johnFamily.calcTipsAndBills();
markFamily.calcTipsAndBills();

johnFamily.average =  averageTip(johnFamily.tips);
markFamily.average =  averageTip(markFamily.tips);

johnFamily.average >markFamily.average  ? console.log('John paid more tips at the end'):console.log('Mark paid more tips at the end');

console.log(johnFamily);
console.log(markFamily);
