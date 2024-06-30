import {
  emailPattern,
  strHasNumber,
  strHasUpperCase,
  strNoSpace,
} from "../utils/validations";

test("email pattern correct example", () => {
  const email = "nkurdus@gmail.com";
  expect(email).toMatch(emailPattern);
});

test("email pattern not correct example", () => {
  const emails = [
    "nkurdusgmail.com",
    "nk urdus@gmail.com",
    "nkurdus@gmail",
    "nkurdus@gmail.",
    "@nkurdus@gmail.com",
    "nkurdus@",
    "@nkurdus@gmail.com@",
  ];
  emails.forEach((email) => expect(email).not.toMatch(emailPattern));
});

test("check strHasUpperCase with correct size symbol", () => {
  const correctCase = "Nkurdus";
  expect(strHasUpperCase(correctCase)).toBeTruthy();
});

test("check strHasUpperCase with not correct size symbol", () => {
  const notCorrectCases = ["nkurdus", "3kurdus", "kurdus*", "n-kurdus"];
  notCorrectCases.forEach((item) => expect(strHasUpperCase(item)).toBeFalsy());
});

test("check strNoSpace", () => {
  const correctCase = "nkurdus";
  const notCorrectCase = "n kurdus";
  expect(strNoSpace(correctCase)).toBeTruthy();
  expect(strNoSpace(notCorrectCase)).toBeFalsy();
});

test("check strHasNumber", () => {
  const correctCase = "nkurdus3";
  const notCorrectCase = "nkurdus";
  expect(strHasNumber(correctCase)).toBeTruthy();
  expect(strHasNumber(notCorrectCase)).toBeFalsy();
});
