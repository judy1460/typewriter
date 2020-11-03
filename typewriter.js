const sentence = "hello there from lighthouse labs";
const typewriter = (sentence) => {
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time += 50) 
  setTimeout(() =>{ 
    process.stdout.write("\n")
  }, 3000)  
}
}
typewriter(sentence);