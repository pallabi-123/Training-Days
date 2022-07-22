/* 1)	Let’s begin by running the trainingDays.js file. In the console we can see that the program is broken!
Ideally, the getRandEvent() function selects an event at random. The getTrainingDays() functions returns the number of days to train based on the event selected. The logEvent() and logTime() functions print the athlete name, event, and number of days to the console.
But poorly scoped variables are causing errors.*/

// The scope of ‘random’ is too loose
Const random = math.floor(Math.random()*3);

const getRandEvent = () => {
  if (random === 0) {
   return ‘Marathon’;
} else if (random === 1) {
   return ‘Triathlon’;
} else if (random === 2) {
   return ‘Pentathlon’;
}
};
// The scope of ‘days’ is too 
/* 2) To avoid the RefferenceError, declare days within the getTrainingDays function, before the if statement.*/
/* 3) Run the program again: no error, but days is undefined! New days variables are being defined in the scope of each if/ else if statement. 
Delete the three let’s within the if/else if statements.*/
/* 4) Run the program again: fixed! Now the if/else if statements are changing the original days rather than defining a new one.*/
const getTrainingDays = event => {
  
  let days;
 if (event === ‘Marathon’) {
  days = 50;
} else if (event === ‘Triathlon’) {
  days = 100;
} else if (event === ‘Pentathlon’) {
  days = 200;
}
return days;
};
// The scope of ‘name’ is too tight
Const logEvent = event => {
  Const name = ‘Nala’;
  Console.log(`${name}’s event is: ${event}`);
};
Const logTiem = days => {
   Const name = ‘Nala’;
  Console.log(`${name}’s time to train is: ${days} days`);
};
Const event = getRandEvent();
Const days = getTrainingDays(event);


//Define a name variable. Use it as an argument after updating logEvent and logTime.
logEvent(event);
logTime(days);


