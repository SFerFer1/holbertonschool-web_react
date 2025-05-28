interface MajorCredits {
credits: number;
readonly __brand: 'Mayor';
}

interface MinorCredits {
credits: number;
readonly __brand: 'Menor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'Mayor'
    };
  }

function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'Menor'
    }
}



const major1: MajorCredits = { credits: 10, __brand: 'Mayor' };
const major2: MajorCredits = { credits: 15, __brand: 'Mayor' };

const minor1: MinorCredits = { credits: 5, __brand: 'Menor' };
const minor2: MinorCredits = { credits: 7, __brand: 'Menor' };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));