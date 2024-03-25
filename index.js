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
// Function to calculate NHIF Deductions based on the provided salary
function calculateNHIF(salary) {
    let nhif = 0;
    if (salary <= 5999) {
        nhif = 150;
    } else if (salary <= 7999) {
        nhif = 300;
    } else if (salary <= 11999) {
        nhif = 400;
    } else if (salary <= 14999) {
        nhif = 500;
    } else if (salary <= 19999) {
        nhif = 600;
    } else if (salary <= 24999) {
        nhif = 750;
    } else if (salary <= 29999) {
        nhif = 850;
    } else if (salary <= 34999) {
        nhif = 900;
    } else if (salary <= 39999) {
        nhif = 950;
    } else if (salary <= 44999) {
        nhif = 1000;
    } else if (salary <= 49999) {
        nhif = 1100;
    } else if (salary <= 59999) {
        nhif = 1200;
    } else if (salary <= 69999) {
        nhif = 1300;
    } else if (salary <= 79999) {
        nhif = 1400;
    } else if (salary <= 89999) {
        nhif = 1500;
    } else if (salary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate NSSF Deductions based on the provided salary
function calculateNSSF(salary) {
    // NSSF rate is 6% of gross salary, with a maximum limit of 2000
    let nssf = Math.min(salary * 0.06, 2000);
    return nssf;
}

// Function to calculate the Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const deductions = paye + nhif + nssf;
    const netSalary = grossSalary - deductions;
    return { grossSalary, paye, nhif, nssf, deductions, netSalary };
}




