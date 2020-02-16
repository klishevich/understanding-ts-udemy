var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function throwError(message, code) {
    throw { message: message, code: code };
    // while (true) {}
}
var result = throwError("some error", 500);
console.error(result);
