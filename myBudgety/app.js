var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
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

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);

        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }

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

        calculatePercentages: function () {
            data.allItems.exp.forEach(function (current) {
                current.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function () {
            var arrayPerc = data.allItems.exp.map(function (current) {
                return current.getPercentage();
            });

            return arrayPerc;
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
        },

        deleteItem: function (type, ID) {
            var ids, index;

            ids = data.allItems[type].map(function (current) {
                return current.id;
            });


            index = ids.indexOf(ID);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        }
    };

})();


var UIController = (function () {

    var DomStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        itemPercentage: '.item__percentage',
        date: '.budget__title--month'


    };
  

    var formatNumber = function (number, type) {
        var int, dec, arrayNumber, double, pureNumber;

        pureNumber = Math.abs(number);

        double = pureNumber.toFixed(2);

        arrayNumber = double.split('.');

        int = arrayNumber[0];

        dec = arrayNumber[1];


        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

        return (type === 'exp' ? '-' : '+') + int + '.' + dec;


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
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            if (type === 'exp') {
                element = '.expenses__list';
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

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
        },

        displayBudget: function (obj) {
            var type;

            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DomStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DomStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            document.querySelector(DomStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');

            if (obj.percentage > 0) {
                document.querySelector(DomStrings.percentageLabel).textContent = obj.percentage + '%';

            } else {
                document.querySelector(DomStrings.percentageLabel).textContent = '---';

            }
        },

        displayPercentages: function (percentages) {
            nodeList = document.querySelectorAll(DomStrings.itemPercentage);

            function nodeForEach(list, callback) {
                for (var i = 0; i < list.length; i++)
                    callback(list[i], i);
            }

            nodeForEach(nodeList, function (current, index) {
                if (percentages[index] !== -1) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }

            });
        },

        deleteItem: function (ID) {
            var el = document.getElementById(ID);
            el.parentNode.removeChild(el);
            //el.remove(); both methods work
        },

        displayDate: function () {
            var now, month, year;

            now = new Date();

            month = now.getMonth();
            months = ['January','February','March','April','May','June','July','August','September','October','November','December']
            year = now.getFullYear();
            
            document.querySelector(DomStrings.date).textContent=months[month] + ' ' + year;
            
            
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


        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    };


    function updateBudget() {

        budgeCtrl.calculateBudget();

        var budget = budgeCtrl.getBudget();

        UICtrl.displayBudget(budget);

    }

    function updatePercetages() {
        //calculate percentages in the budgetCtrl
        budgeCtrl.calculatePercentages();

        //update the UI

        UICtrl.displayPercentages(budgeCtrl.getPercentages());
    }


    var ctrlAddItem = function () {
        var newItem, inputs;

        inputs = UICtrl.getInput();
        newItem = budgeCtrl.addItem(inputs.inputType, inputs.inputDescription, inputs.inputValue);

        UICtrl.addListItem(newItem, inputs.inputType);

        UICtrl.clearFields();

        updateBudget();
        updatePercetages();


    };


    var ctrlDeleteItem = function (event) {
        var splitID, itemId, ID, type;

        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;


        if (itemId) {

            splitID = itemId.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

        }

        //delete from the data structure

        budgeCtrl.deleteItem(type, ID);

        //delete from UI
        UICtrl.deleteItem(itemId);

        //update new budget

        updateBudget();
        updatePercetages();



    }

    return {
        init: function () {
            UICtrl.displayDate();
            console.log('Application has started');
            setupEventListeners();
            UICtrl.displayBudget({
                budget: 0,
                percentage: -1,
                totalInc: 0,
                totalExp: 0
            })
        }
    };



})(budgetController, UIController);

controller.init();