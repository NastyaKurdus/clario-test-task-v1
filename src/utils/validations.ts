export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const minLengthEmail = 8;
const maxLengthEmail = 64;

const isUpperCase = (ch: string) => {
  return ch === ch.toUpperCase() && ch !== ch.toLowerCase();
};

const strSatisfies = (pred: (ch: string) => boolean, str: string) => {
  for (const c of str) {
    if (pred(c)) return true;
  }
  return false;
};

export const strHasNumber = (str: string) => strSatisfies((ch) => ch >= "0" && ch <= "9", str);

export const strHasUpperCase = (str: string) => strSatisfies(isUpperCase, str);

export const strNoSpace = (str: string) => !str.includes(" ");

export const minLength = (str: string) => str.length >= minLengthEmail;

export const maxLength = (str: string) => str.length <= maxLengthEmail;
