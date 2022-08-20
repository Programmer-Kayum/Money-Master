
document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodAmountElement = document.getElementById('food-amoun');
    const foodAmountElementString = foodAmountElement.value;
    const foodAmount = parseFloat(foodAmountElementString);



    const rentAmountElement = document.getElementById('rent-amount');
    const rentAmountElementString = rentAmountElement.value;
    const rentAmount = parseFloat(rentAmountElementString);


    const clothAmountElement = document.getElementById('cloth-amount');
    const clothAmountElementString = clothAmountElement.value;
    const clothAmount = parseFloat(clothAmountElementString);

    const sum = foodAmount + rentAmount + clothAmount;

    const totalExpensesField = document.getElementById('total-expenses');
    const totalExpensesFieldString = totalExpensesField.innerText;
    const totalExpenses = parseFloat(totalExpensesFieldString)
    totalExpensesField.innerText = sum;


    const totalIncomeAmount = document.getElementById('income-amount');
    const totalIncomeAmountString = totalIncomeAmount.value;
    const totalIncome = parseFloat(totalIncomeAmountString);

    const afterExpensesAmount = totalIncome - sum;

    const totalBlanceElement = document.getElementById('total-balance');
    const totalBlanceElementString = totalBlanceElement.innerText;
    const totalBalance = parseFloat(totalBlanceElementString);
    totalBlanceElement.innerText = afterExpensesAmount;


})


document.getElementById('save-btn').addEventListener('click', function () {

    const parcentangeElement = document.getElementById('parcentenge');
    const parcentangeElementString = parcentangeElement.value;
    const parcentangeAmounts = parseFloat(parcentangeElementString) / 100;



    const totalBlanceElement = document.getElementById('total-balance');
    const totalBlanceElementString = totalBlanceElement.innerText;
    const totalBalance = parseFloat(totalBlanceElementString);

    const saveAmount = parcentangeAmounts * totalBalance;



    const savingAmountElement = document.getElementById('saving-amount');
    const savingAmountElementString = savingAmountElement.innerText;
    const savingAmounts = parseFloat(savingAmountElementString);
    savingAmountElement.innerText = saveAmount;


    const reaminAmount = totalBalance - saveAmount;

    const remainingAmountElement = document.getElementById('remain-amount');
    const remainingAmount = remainingAmountElement.innerText;
    remainingAmountElement.innerText = reaminAmount;

})