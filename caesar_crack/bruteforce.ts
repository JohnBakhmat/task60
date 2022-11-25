import { decode } from "./caesar";
import chalk from "chalk";

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

//ENG version
{
  const input = "CQN ZDRLT KAXFW OXG SDVYB XENA CQN UJIH MXP";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const susWords = ["THE", "AND", "FOR", "ARE"];

  bruteForce(input, alphabet, susWords);
}

//RUS version
{
  const input = "АРЬШ ЮМПЗШЖ ЖЙУЖМЪЩЖ ЦЯМХД ЧШЦЩЪГФ АРЬШЦФ";
  const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
  const susWords = ["ОЧЕНЬ", "ИЛИ", "НО", "ШИФР"];
  bruteForce(input, alphabet, susWords);
}
