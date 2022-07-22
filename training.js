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
// The scope of ‘days’ is too tight
const getTrainingDays = event => {
 if (event === ‘Marathon’) {
   let days = 50;
} else if (event === ‘Triathlon’) {
   let days = 100;
} else if (event === ‘Pentathlon’) {
   let days = 200;
}
return days;
};
