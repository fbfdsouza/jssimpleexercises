var budgetController = (function(){
    
    var expenses = [];
    var income = [];
    
    return {
        addExpenses : function(description, value){
            expenses.push({'description': description,'value': value});
        },
        
        addIncome : function(description, value){
            income.push({'description': description,'value': value});
        },
        
        getExpenses : function(){
            return expenses.forEach(function(entry){
                console.log(entry);
            });
        },
        
        getIncome : function(){
            return income;
        }
    }
    
})();


var UIController = (function(){
    
})();

var controller = (function(budgeCtrl, UICtrl){
    document.querySelector('.add__btn').addEventListener('click', function(){
       
        var description = document.querySelector('.add__description').value;
        var value = document.querySelector('.add__value').value;

        budgeCtrl.addExpenses(description,value);
            
        console.log(budgeCtrl.getExpenses());
        console.log(budgeCtrl.getIncome());
        
    
        document.querySelector('.add__description').value = '';
        document.querySelector('.add__value').value = '';
        
    });
   
})(budgetController, UIController);