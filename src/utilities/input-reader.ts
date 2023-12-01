import { promises as fs } from 'fs';

export async function readInput(day: number): Promise<string> {
    return await fs.readFile(`./src/day-${day.toString().padStart(2, '0')}.txt`, 'utf8');
}

export async function readTestInput(day: number): Promise<string> {
    return await fs.readFile(`./src/day-${day.toString().padStart(2, '0')}.test.txt`, 'utf8');
}