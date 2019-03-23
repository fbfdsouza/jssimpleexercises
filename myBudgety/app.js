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
        },
        percentage: -1,
        budget: 0
    };

    var calculateTotal = function (type) {

        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });

        data.totals[type] = sum;

    }


    return {


        calculateBudget: function () {

            calculateTotal('inc');
            calculateTotal('exp');


            data.budget = data.totals.inc - data.totals.exp;

            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {

                data.percentage = -1;
            }

        },

        addItem: function (type, description, value) {

            var ID, newItem;

            if (data.allItems[type] > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1] + 1;
            } else {
                ID = 0;
            }

            if (type === 'exp') {
                newItem = new Expense(ID, description, value);
            } else if (type === 'inc') {
                newItem = new Income(ID, description, value);
            }


            data.allItems[type].push(newItem);

            return newItem;

        },
        getBudget: function () {
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp
            }
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
                inputValue: parseFloat(document.querySelector(DomStrings.inputValue).value)
            };

        },

        addListItem: function (obj, type) {
            var html, newHtml, element;

            if (type === 'inc') {
                element = '.income__list';
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            if (type === 'exp') {
                element = '.expenses__list';
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        clearFields: function () {

            var fields, filedsArray;

            fields = document.querySelectorAll(DomStrings.inputDescription + ',' + DomStrings.inputValue);

            filedsArray = Array.prototype.slice.call(fields);

            filedsArray.forEach(function (current, index, array) {
                current.value = '';
            });

            filedsArray[0].focus();
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

    function updateBudget() {

        budgeCtrl.calculateBudget();

        var budget = budgeCtrl.getBudget();

        console.log(budget);

    }


    var ctrlAddItem = function () {
        var newItem, inputs;

        inputs = UICtrl.getInput();
        newItem = budgeCtrl.addItem(inputs.inputType, inputs.inputDescription, inputs.inputValue);

        UICtrl.addListItem(newItem, inputs.inputType);

        UICtrl.clearFields();

        updateBudget();

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