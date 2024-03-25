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
// Speed Detector algorithm
function speedDetector(speed){
    if(speed < 70){
      return "Ok"
    } else if(speed >= 70){
      let difference = speed - 70
      let demeritPoints = Math.floor(difference / 5)
      let total = `${demeritPoints} Demerit Points`
      if(demeritPoints >=0 && demeritPoints <= 12){
        judgement= "Warning Issued"
      } else if(demeritPoints > 12){
        judgement = "License suspended"
      }
      console.log(total)
      return judgement
    }
  }
  //Prompts user to input speed using prompt-sync extension
  const prompt = require('prompt-sync')();
  const speed = prompt('Enter car speed: ')
  // Returns vehicle speed, Demerit Points(if any), and a Judgement
  console.log(`${Number(speed)} km/s`);
  console.log(speedDetector(Number(speed)));

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
}else if(grossSalary >=20000 && grossSalary <= 24999) {
    nhifDeduction=750; 
}else if(grossSalary >=25000 && grossSalary <= 34999) {
    nhifDeduction=800;
}else if(grossSalary >=35000 && grossSalary <= 39999) {
    nhifDeduction=850;
}else if(grossSalary >=40000 && grossSalary<= 44999 ) {
    nhifDeduction=900;
}else if(grossSalary >=45000 && grossSalary<= 49999 ) {
    nhifDeduction=950;
} else if(grossSalary >=50000 && grossSalary<= 54999 ) {
    nhifDeduction=1000;
} else if(grossSalary >=55000 && grossSalary<= 59999 ) {
    nhifDeduction=1000;
}else if(grossSalary >=60000 && grossSalary<= 64999 ) {
    nhifDeduction=1100;
}else if(grossSalary >=65000 && grossSalary<= 69999 ) {
    nhifDeduction=1200;
}else if(grossSalary >=70000 && grossSalary<= 74999 ) {
    nhifDeduction=1300;
}else if(grossSalary >=75000 && grossSalary<= 79999 ) {
    nhifDeduction=1400;
}else if(grossSalary >=80000 && grossSalary<= 84999 ) {
    nhifDeduction=1500;
}else if(grossSalary >=85000 && grossSalary<= 89999 ) {
    nhifDeduction=1600; 
}    