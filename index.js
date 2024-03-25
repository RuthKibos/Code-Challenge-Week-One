//Student Grade Generator
function studentMarks(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
//Net Salary Calculator.
function grossSalary (mSalary) {
    }
if (mSalary <= 24000){
    return mSalary = (10/100);
}
else if (mSalary >= 24001 && mSalary <= 32333) {
        return ((mSalary-24000) * 0.25) + (24000*0.1)
}
else if (mSalary >= 32334 && mSalary <= 500000) {
    return ((mSalary-32333) * 0.3) + (24000*0.1) + (32333*0.25)
}
else if (mSalary >= 500001 && mSalary <= 800000) {
    return ((mSalary-500000) * 0.32) + (24000*0.1) + (500000*0.3)
}
else {
    return mSalary * 0.35;
}
//nhifDeductions
function Deductions(nhifDeduction) {
if (grossSalary<= 5999) {
    nhifDeduction=150;
}else if (grossSalary >= 6000 && grossSalary <= 7999) {
    nhifDeduction=300;
}else if (grossSalary >= 8000 && grossSalary <= 11999) {
    nhifDeduction=400;
}else if (grossSalary >=12000 && grossSalary <= 14999) {
    nhifDeduction=500;
}else if (grossSalary >=15000 && grossSalary <= 19999) {
    nhifDeduction=600; 
}else if(grossSalary >=20000 && grossSalary <= 24999)
    nhifDeduction=700; 
}