document.addEventListener("DOMContentLoaded", function () {
  const incomeList = document.getElementById("income-list");
  const expensesList = document.getElementById("expenses-list");
  const savingsList = document.getElementById("savings-list");
  const totalIncomeDisplay = document.getElementById("total-income");
  const totalExpensesDisplay = document.getElementById("total-expenses");
  const totalSavingsDisplay = document.getElementById("total-savings");
  const totalBudgetDisplay = document.getElementById("total-budget");
  const remainingBudgetDisplay = document.getElementById("remaining-budget");
  const newIncomeDescriptionInput = document.getElementById(
    "new-income-description"
  );
  const newIncomeAmountInput = document.getElementById("new-income-amount");
  const newExpenseDescriptionInput = document.getElementById(
    "new-expense-description"
  );
  const newExpenseAmountInput = document.getElementById("new-expense-amount");
  const newSavingDescriptionInput = document.getElementById(
    "new-saving-description"
  );
  const newSavingAmountInput = document.getElementById("new-saving-amount");
  const addIncomeBtn = document.getElementById("add-income");
  const addExpenseBtn = document.getElementById("add-expense");
  const addSavingBtn = document.getElementById("add-saving");

 
  function calculateTotalIncome() {
    let totalIncome = 0;
    incomeList.querySelectorAll("li").forEach((item) => {
      totalIncome += parseFloat(item.dataset.amount);
    });
    totalIncomeDisplay.textContent = "$" + totalIncome.toFixed(2);
    calculateTotalBudget();
  }

  
  function calculateTotalExpenses() {
    let totalExpenses = 0;
    expensesList.querySelectorAll("li").forEach((item) => {
      totalExpenses += parseFloat(item.dataset.amount);
    });
    totalExpensesDisplay.textContent = "$" + totalExpenses.toFixed(2);
    calculateTotalBudget();
  }

  
  function calculateTotalSavings() {
    let totalSavings = 0;
    savingsList.querySelectorAll("li").forEach((item) => {
      totalSavings += parseFloat(item.dataset.amount);
    });
    totalSavingsDisplay.textContent = "$" + totalSavings.toFixed(2);
    calculateRemainingBudget(); 
  }

 
  function calculateTotalBudget() {
    const totalIncome = parseFloat(totalIncomeDisplay.textContent.substring(1));
    const totalExpenses = parseFloat(
      totalExpensesDisplay.textContent.substring(1)
    );
    const totalSavings = parseFloat(
      totalSavingsDisplay.textContent.substring(1)
    );
    const totalBudget = totalIncome - totalExpenses - totalSavings;
    totalBudgetDisplay.textContent = "$" + totalBudget.toFixed(2);
    calculateRemainingBudget();
  }

  
  function calculateRemainingBudget() {
    const totalBudget = parseFloat(totalBudgetDisplay.textContent.substring(1));
    remainingBudgetDisplay.textContent = "$" + totalBudget.toFixed(2);
  }

 
  addIncomeBtn.addEventListener("click", function () {
    const description = newIncomeDescriptionInput.value.trim();
    const amount = parseFloat(newIncomeAmountInput.value);
    if (description && !isNaN(amount) && amount > 0) {
      const li = document.createElement("li");
      li.dataset.amount = amount;
      li.textContent = `${description}: $${amount.toFixed(2)}`;
      incomeList.appendChild(li);
      calculateTotalIncome();
      newIncomeDescriptionInput.value = "";
      newIncomeAmountInput.value = "";
    } else {
      alert("Please enter a valid description and amount for income.");
    }
  });

  
  addExpenseBtn.addEventListener("click", function () {
    const description = newExpenseDescriptionInput.value.trim();
    const amount = parseFloat(newExpenseAmountInput.value);
    if (description && !isNaN(amount) && amount > 0) {
      const li = document.createElement("li");
      li.dataset.amount = amount;
      li.textContent = `${description}: $${amount.toFixed(2)}`;
      expensesList.appendChild(li);
      calculateTotalExpenses();
      newExpenseDescriptionInput.value = "";
      newExpenseAmountInput.value = "";
    } else {
      alert("Please enter a valid description and amount for expense.");
    }
  });

  
  addSavingBtn.addEventListener("click", function () {
    const description = newSavingDescriptionInput.value.trim();
    const amount = parseFloat(newSavingAmountInput.value);
    if (description && !isNaN(amount) && amount > 0) {
      const li = document.createElement("li");
      li.dataset.amount = amount;
      li.textContent = `${description}: $${amount.toFixed(2)}`;
      savingsList.appendChild(li);
      calculateTotalSavings(); // Corrected this line
      newSavingDescriptionInput.value = "";
      newSavingAmountInput.value = "";
    } else {
      alert("Please enter a valid description and amount for saving.");
    }
  });


  calculateTotalIncome();
  calculateTotalExpenses();
  calculateTotalSavings();
});

