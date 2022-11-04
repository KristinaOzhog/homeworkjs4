function getPasswordChecker(password) {
    return function checkPassword(toCheck) {
        if (toCheck == password) {
            return true;
        } else if (toCheck != password) {
            return false
        };
    };
};

const password1 = getPasswordChecker('123456')('123456');
const password2 = getPasswordChecker('123456')('654321');
const password3 = getPasswordChecker('654321')('123456');

console.log(password1)
console.log(password2)
console.log(password3)