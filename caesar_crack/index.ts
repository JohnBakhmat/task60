import { decode, encode } from "./caesar";

const data = "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD";
const key = 3;

const result = decode(data, key);

const result2 = encode(result, key);

console.log({
  data,
  key,
  result,
  result2,
});
