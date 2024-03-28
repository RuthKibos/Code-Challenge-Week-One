// Speed Detector algorithm
function speedDetector(speed){
    //Checking If the speed is less than 70
    if(speed < 70){
    // Printing "Ok" if speed is within the limit
      return "Ok"
    } else if(speed >= 70){
      let difference = speed - 70
      // Calculating the demerit points
      let demeritPoints = Math.floor(difference / 5)
      //total demerit points
      let total = `${demeritPoints} Demerit Points`
      // Checking if demerit points exceed twelve 
    if(demeritPoints > 12) {
      // Printing "License suspended" if demerit points exceed twelve
        console.log("License suspended");
      // Printing the total number of demerit points if speed exceeds the speed limit
      } else {
        console.log("total");
      }
    }
  }
  //Prompts user to input speed using prompt-sync extension
  const prompt = require('prompt-sync')();
  const speed = prompt('Enter car speed: ')
  // Returns vehicle speed, Demerit Points(if any) and 
  console.log(`${Number(speed)} km/s`);
  console.log(speedDetector(Number(speed)));