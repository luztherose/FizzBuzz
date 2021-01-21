const fizzBuzz = function (n) {
    const fizzBuzz = [];
    const isFizzBuzz = (i) => i % 3 === 0 && i % 5 === 0;
    const isFizz = (i) => i % 3 === 0;
    const isBuzz = (i) => i % 5 === 0;

    for (let i = 1; i <= n; i++) {
        switch (i) {
            case isFizzBuzz(i):
                fizzBuzz.push("FizzBuzz");
                break;
            case isFizz(i):
                fizzBuzz.push("Fizz");
                break;
            case isBuzz(i):
                fizzBuzz.push("Buzz");
                break;
            default:
                fizzBuzz.push(i.toString())
                break
        }
    }
    return fizzBuzz;
};


const testFizzBuzz = () => {
    const expectedResult = [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz"
    ]

    const result = fizzBuzz(15).every((item, index) => expectedResult[index])
    console.assert(result, 'FizzBuzz is incorrect please verify')
}


testFizzBuzz()
