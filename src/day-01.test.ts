import { day01 } from "./day-01";
import { readTestInput } from "./utilities/input-reader";


test('Example Input returns 142', async () => {
    const exampleInput = await readTestInput(1);

    expect(day01(exampleInput)).toBe(142);
});