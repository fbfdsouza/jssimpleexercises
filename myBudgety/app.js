var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    };


    return {

        addItem: function (type, description, value) {

            var ID, newItem;

            if (data.allItems[type] > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1] + 1;
            } else {
                ID = 0;
            }

            if (type === 'exp'){
                 newItem = new Expense(ID, description, value);
            }else if(type==='inc'){ 
                newItem = new Income(ID, description, value);
            }
            
            
            data.allItems[type].push(newItem);            
            
            return newItem;

        },

        showData: function () {
            console.log(data);
        }
    };

})();


var UIController = (function () {

    var DomStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn'

    };

    return {

        getInput: function () {
            return {
                inputType: document.querySelector(DomStrings.inputType).value,
                inputDescription: document.querySelector(DomStrings.inputDescription).value,
                inputValue: document.querySelector(DomStrings.inputValue).value
            };

        },

        getDomStrings: function () {
            return DomStrings;
        }

    };

})();

var controller = (function (budgeCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDomStrings();

        document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

    };


    var ctrlAddItem = function () {
        var newItem, inputs;

        inputs = UICtrl.getInput();
        newItem = budgeCtrl.addItem(inputs.inputType, inputs.inputDescription, inputs.inputValue);
        
        budgeCtrl.showData();

    };

    return {
        init: function () {
            console.log('Application has started');
            setupEventListeners();
        }
    };



})(budgetController, UIController);

controller.init();

/*

	1 - Get the field input data
	2 - Add the item to the budget controller
	3 - Add the item to the UI
	4 - Calculate budget
	5 - Display the budget on the UI

*/