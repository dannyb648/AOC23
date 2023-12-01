# Advent of Code 2023

Set up should be pretty simple
``` pnpm i ```

## File Layout

### day-XX.ts

This file will contain a function that will take in an input, and return the solution. 

### day-XX.test.ts

This file will import your solution function, and also import the example input which AOC provides. This will use your function and the example input and use Jest to check if you've solved it. 

### day-XX.test.txt

Example file provided by AOC

### day-XX.txt

Real input which will be used to solve the real challenge

### index.ts

This file contains a function, AOC. AOC will import the real input for each day, and execute your solution function. It should then console.log the correct answer you can submit to AOC. 

### Note 

Any issues, feel free to fork the repo and fix it yourself, im not your mom. 