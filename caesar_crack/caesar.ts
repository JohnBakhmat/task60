export function decode(data: string, key: number, alphabet?: string) {
  return proceed(data, key, "decode", alphabet);
}

export function encode(data: string, key: number, alphabet?: string) {
  return proceed(data, key, "encode", alphabet);
}

const proceed = (
  data: string,
  key: number,
  action: "encode" | "decode",
  alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
) => {
  const alphabetArray = alphabet.split("");
  const dataArray = data.split("");
  const sign = action === "encode" ? -1 : 1;

  const result = dataArray.map((char) => {
    const index = alphabetArray.indexOf(char);
    if (index === -1) {
      return char;
    }

    const newIndex = (index + key * sign) % alphabetArray.length;
    return alphabetArray.at(newIndex);
  });
  return result.join("");
};
