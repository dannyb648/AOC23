import { readInput } from "./utilities/input-reader";
import { day01 } from "./day-01";

const AOC = async () => {
    const input = await readInput(1);

    const day01Solution = await day01(input);

    console.log('Day 01 Solution is: ', day01Solution);
}

AOC();