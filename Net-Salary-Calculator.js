// Function to calculate PAYE (income tax)
function calculatePAYE(salary) {
    if (salary <= 24000) {
        return 0.1 * salary;
    } else if (salary <= 32333) {
        return 0.25 * salary;
    } else if (salary <= 500000) {
        return 0.3 * salary;
    } else if (salary <= 800000) {
        return 0.325 * salary;
    } else {
        return 0.35 * salary;
    }
}

// Function to calculate NHIF deduction
function calculateNHIF(grossPay) {
    if (grossPay <= 5999) {
        return 150;
    } else if (grossPay <= 7999) {
        return 300;
    } else if (grossPay <= 11999) {
        return 400;
    } else if (grossPay <= 14999) {
        return 500;
    } else if (grossPay <= 19999) {
        return 600;
    } else if (grossPay <= 24999) {
        return 750;
    } else if (grossPay <= 29999) {
        return 850;
    } else if (grossPay <= 34999) {
        return 900;
    } else if (grossPay <= 39999) {
        return 950;
    } else if (grossPay <= 44999) {
        return 1000;
    } else if (grossPay <= 49999) {
        return 1100;
    } else if (grossPay <= 59999) {
        return 1200;
    } else if (grossPay <= 69999) {
        return 1300;
    } else if (grossPay <= 79999) {
        return 1400;
    } else if (grossPay <= 89999) {
        return 1500;
    } else if (grossPay <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

// Function to calculate NSSF deduction
function calculateNSSF(pensionablePay) {
    if (pensionablePay <= 7000) {
        return 0.06 * pensionablePay;
    } else {
        return 0.06 * 7000; 
    }
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossPay = basicSalary + benefits;
    const payee = calculatePAYE(grossPay);
    const nhif = calculateNHIF(grossPay);
    const nssf = calculateNSSF(basicSalary); // NSSF is calculated based on basic salary
    const netSalary = grossPay - payee - nhif - nssf;
    return netSalary;
}