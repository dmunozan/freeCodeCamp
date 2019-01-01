/*
 * JavaScript Algorithms and Data Structures Projects: Cash Register
 *
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
 * payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * 
 * cid is a 2D array listing available currency.
 * 
 * The checkCashRegister() function should always return an object with a status key and a change key.
 * 
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot 
 * return the exact change.
 * 
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 * 
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, 
 * as the value of the change key.
 * 
 *** Assertion Tests ***
 * 
 * checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
 *   ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
 * checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
 *   ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
 * checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
 *   ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], 
 *     ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
 * checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
 *   ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
 * checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], 
 *   ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
 * checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], 
 *   ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], 
 *     ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
 */

function checkCashRegister(price, cash, cid) {
  var change = [];
  var totalFunds = 0;
  var initialFunds = [];
  var status = "INSUFFICIENT_FUNDS";
  var amountReturn = (cash * 100) - (price * 100);
  var currencyValue = [ 10000, 2000, 1000, 500, 100, 25, 10, 5, 1 ];

  // Loop through cash-in-drawer initializing initialFunds and totalFunds
  for (var i = 0; i < cid.length; i++) {
    var currentValue = (cid[cid.length - 1 - i][1] * 100).toFixed(0);
    initialFunds.push(currentValue);
    totalFunds += Number.parseInt(currentValue);
  }

  // If we have enough money to return
  if (totalFunds >= amountReturn) {
    var auxChange = [];

    // Loop through the different available currencies
    for (var index = 0; index < currencyValue.length; index++) {

      // Save the amount of the current currency
      var currentAmount = initialFunds[index];

      // Loop while current currency is equal or smaller to the amount to return and we have change available
      while (currencyValue[index] <= amountReturn && initialFunds[index] > 0) {
        amountReturn -= currencyValue[index];
        initialFunds[index] -= currencyValue[index];
        totalFunds -= currencyValue[index];
      }

      // Add the change of the current currency
      if (((currentAmount - initialFunds[index]) !== 0)) {
        auxChange.push([cid[cid.length - 1 - index][0], (currentAmount - initialFunds[index])/100]);
      }
    }

    // If amountReturn is different than 0 return "INSUFFICIENT_FUNDS"
    if (amountReturn === 0) {
      // If there is no money left in the drawer return "CLOSED"
      if (totalFunds === 0) {
        status = "CLOSED";
        change = cid;
      } else {
        status = "OPEN";
        change = auxChange;
      }
    }
  }

  return {
    "status": status,
     "change": change
  };
  
}
