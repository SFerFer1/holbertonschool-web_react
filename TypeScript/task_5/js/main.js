function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'Mayor'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'Menor'
    };
}
var major1 = { credits: 10, __brand: 'Mayor' };
var major2 = { credits: 15, __brand: 'Mayor' };
var minor1 = { credits: 5, __brand: 'Menor' };
var minor2 = { credits: 7, __brand: 'Menor' };
console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));
