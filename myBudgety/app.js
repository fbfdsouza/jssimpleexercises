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
                console.log(entry.value);
            });
        },
        
        getIncome : function(){
            return income;
        }
    }
    
})();


var UIController = (function(){
    
    var DomStrings = {
        inputType : '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'
        
    };
    
    return {
        
        getInput : function(){
           return {
            inputType: document.querySelector(DomStrings.inputType).value,
            inputDescription: document.querySelector(DomStrings.inputDescription).value,
            inputValue: document.querySelector(DomStrings.inputValue).value
           };
           
        },
        
        getDomStrings : function(){
            return DomStrings;
        }
        
    };
    
})();

var controller = (function(budgeCtrl, UICtrl){
    var DOM = UICtrl.getDomStrings();
    
    var ctrlAddItem = function() {
        console.log(UICtrl.getInput());
    }
    
    document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);
    

    
    
    
    document.addEventListener('keypress', function(event){
        if(event.keyCode===13 || event.which ===13){
            ctrlAddItem();
        }
    });
   
})(budgetController, UIController);