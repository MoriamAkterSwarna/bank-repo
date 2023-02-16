/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5. also make sure to convert tthe input into a number by using parseFloat()
3. get previous withdraw total
4. calculate total withdraw amount
4.5. set withdraw total amount
5. get the previous balance total 
6.calculate the new balance total
6.5. set the new balance total
7.clear the withdraw field
*/
// step 1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw button clicked');

    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    // console.log(withdrawField);
    const newWidthdrawAmountString = withdrawField.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);
    // console.log(newWidthdrawAmount);

    // step 7: 
    withdrawField.value = '';


    if (isNaN(newWidthdrawAmount)) {
        alert('please provide a valid number');
        return;
    }

    // step 3: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);




    // step 5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if (newWidthdrawAmount > previousBalanceTotal) {
        alert('Exceeded the balance limit');
        return;
    }
    // step 4:
    const currentWithdrawTotal = previousWithdrawTotal + newWidthdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    // step 6:
    const newBalanceTotal = previousBalanceTotal - newWidthdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;




})