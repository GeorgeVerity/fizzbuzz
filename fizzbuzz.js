//count through numbers 1 to 20 and figure out if each one is divisible by 3, 5, or both.
for (i=1; i<=20; i++){
  //for each number, do the following check:

  if (i % 3 === 0) {
    //if so: see if it is also divisible by 5
    if (i % 5 === 0) {
      //if divisible by 3 and 5, print fizzbuzz
      console.log('FizzBuzz');
    } else {
      //if only divisible by 3, print fizz
      console.log('Fizz')
    }
    //if divisible by 5, print buzz
  } else if (i % 5 === 0) {
    console.log('Buzz')
    //if not divisible by 3 or 5, print number
  } else {
    console.log(i);
  }
}
