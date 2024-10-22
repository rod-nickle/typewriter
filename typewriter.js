const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  // Write out each letter of the sentence individually.
  // We need to increase the delay by 50ms each iteration so they don't all print at once.
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, (50 * i));

  // After the final iteration, print a new line.
  if (i === (sentence.length - 1)) {
    setTimeout(() => {
      process.stdout.write('\n');
    }, (50 * i));
  }
}



// const greeting = 'hello there world'.split(' ');

// for (let i = 0; i < greeting.length; i++) {
//   setTimeout(() => {
//     console.log(greeting[i]);
//   }, (1000 * i))
// }
