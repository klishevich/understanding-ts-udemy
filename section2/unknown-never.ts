let userInput: unknown;
let userName: string;

userInput = 6;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

function throwError(message: string, code: number): never {
  throw { message, code };
  // while (true) {}
}

const result = throwError("some error 2", 500);

console.error(result);
