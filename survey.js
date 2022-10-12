const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer1) => {
  // console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What\'s an activity you like doing? ', (answer2) => {
    // console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question('What do you listen to while doing that? ', (answer3) => {
      // console.log(`Thank you for your valuable feedback: ${answer}`);
      
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          // console.log(`Thank you for your valuable feedback: ${answer}`);
          
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            // console.log(`Thank you for your valuable feedback: ${answer}`);
            
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Your generated profile bio is:\nMy name is ${answer1} and I enjoying listening to ${answer3} while I ${answer2}. My favorite thing to eat is ${answer5} at ${answer4}. My asbolute favorite sport is ${answer6} and I\'m amazing at ${answer7}!`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
