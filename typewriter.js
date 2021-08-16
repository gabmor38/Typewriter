const sentence = "hello there from lighthouse labs";
const newSentence = sentence + "\n"; // will be the txt with the added new line 

let timer = 0;
for (const char of newSentence) {
  setTimeout( () => { 
    process.stdout.write(char);
  }, timer )
  timer += 50;
};