var budgetController = (function () {


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
        console.log(UICtrl.getInput());
    }
    
    return {
        init: function(){
            console.log('Application has started');
            setupEventListeners();
        }
    }



})(budgetController, UIController);

controller.init();

/*

	1 - Get the field input data
	2 - Add the item to the budget controller
	3 - Add the item to the UI
	4 - Calculate budget
	5 - Display the budget on the UI

*/