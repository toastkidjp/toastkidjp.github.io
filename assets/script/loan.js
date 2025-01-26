/*
 * Copyright (c) 2025 toastkidjp.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompany this distribution.
 * The Eclipse Public License is available at http://www.eclipse.org/legal/epl-v10.html.
 */

/**
 * @author toastkidjp
 */
function calculate() {
    const paymentCount = (document.getElementById("term").value * 12);
    const convertedRate = document.getElementById("interestRate").value / 100.0;
    const actualTotalAmount = document.getElementById("amount").value - document.getElementById("downPayment").value;
    let currentAmount = actualTotalAmount;
    const poweredMonthlyInterestRate = Math.pow((1 + convertedRate / 12), paymentCount);

    const numerator = (actualTotalAmount * convertedRate) / 12 * poweredMonthlyInterestRate;
    const denominator = poweredMonthlyInterestRate - 1;
    const monthlyPaymentToBank = Math.max(numerator / denominator, 0.0);

    const monthlyPayment = monthlyPaymentToBank + document.getElementById("managementFee").value + document.getElementById("renovationReserves").value;
    document.getElementById('monthlyPayment').textContent = "Monthly payment: " + Math.round(monthlyPayment);

    let newTable = '<table cellpadding="0" cellspacing="0" border="0" width="100%">'
      + '<th>Amount</th><th>Actual returning</th><th>Interest</th>';
    for (let i = 0; i < paymentCount; i++) {
        const monthlyInterest = currentAmount * (convertedRate / 12);
        const monthlyActualReturning = monthlyPaymentToBank - monthlyInterest;
        currentAmount -= (monthlyPaymentToBank - monthlyInterest);
        newTable += '<tr><td>' + Math.round(currentAmount) + '</td><td>' + Math.round(monthlyActualReturning) + '</td><td>' + Math.round(monthlyInterest) + '</td></tr>';
    }
    newTable += '</table>';

    document.getElementById('paymentSchedule').innerHTML = newTable;
}
