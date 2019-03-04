johnFamily = {
    bills:[124,48,268,180,42],
    tips:[],
    billsAndTips:[],
    calcTipsAndBills : function(){
        for(var i=0;i<this.bills.length;i++){
             switch(true){
                case this.bills[i]<50:
                    this.tips.push(this.bills[i]*0.2);
                    this.billsAndTips.push(this.bills[i]*1.2);
                    break;
                case this.bills[i]>=50&&this.bills[i]<200:
                    this.tips.push((this.bills[i]*0.15));
                    this.billsAndTips.push(this.bills[i]*1.15);
                    break;
                default:
                    this.tips.push(this.bills[i]*0.1);
                    this.billsAndTips.push(this.bills[i]*1.1);     
            }
            
        }
    }
    
}


markFamily = {
    bills:[77,375,110,45],
    tips:[],
    billsAndTips:[],
    calcTipsAndBills : function(){
        for(var i=0;i<this.bills.length;i++){
             switch(true){
                case this.bills[i]<100:
                    this.tips.push(this.bills[i]*0.2);
                    this.billsAndTips.push(this.bills[i]*1.2);
                    break;
                case this.bills[i]>=100&&this.bills[i]<300:
                    this.tips.push((this.bills[i]*0.1));
                    this.billsAndTips.push(this.bills[i]*1.1);
                    break;
                default:
                    this.tips.push(this.bills[i]*0.25);
                    this.billsAndTips.push(this.bills[i]*1.25);     
            }
            
        }
    }
    
}


var averageTip = function(arrayOfTips){
    var sum = 0;
    for(var i=0;i<arrayOfTips.length;i++){
        sum = sum + arrayOfTips[i];
    }
    
    return sum;
}

johnFamily.calcTipsAndBills();
markFamily.calcTipsAndBills();

averageTipMarkFamily =  averageTip(markFamily.tips);
averageTipJohnFamily =  averageTip(johnFamily.tips);

averageTipJohnFamily>averageTipMarkFamily ? console.log('John paid more tips at the end'):console.log('Mark paid more tips at the end');

console.log('John\'s family average tips ' +averageTipJohnFamily);
console.log('Mark\'s family average tips ' + averageTipMarkFamily);
