import { decode } from "./caesar";
import chalk from "chalk";
import fs from "fs/promises";
const bruteForce = (
  input: string,
  alphabet: string,
  susWords: string[] = []
) => {
  const alphabetPower = alphabet.length;
  const keyResultMap = new Map<number, string>();
  let log = "";

  for (let i = 1; i <= alphabetPower; i++) {
    const result = decode(input, i, alphabet);
    keyResultMap.set(i, result);

    const isSus = susWords.some((word) => result.split(" ").includes(word));
    log += chalk`{${isSus ? "bgMagenta" : "white"} ${i}:\t${result}}\n`;
  }
  console.log(log);
};

fs.readFile("./input.json", "utf-8").then((inputData) => {
  const { text, alphabet, susWords } = JSON.parse(inputData);
  bruteForce(text, alphabet, susWords);
});
