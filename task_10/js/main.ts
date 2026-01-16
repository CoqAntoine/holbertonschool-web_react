export interface MajorCredits {
  credits: number;
  brand: 'major';
}

export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

const math: MajorCredits = { credits: 3, brand: 'major' };
const physics: MajorCredits = { credits: 4, brand: 'major' };

const minor1: MinorCredits = { credits: 1, brand: 'minor' };
const minor2: MinorCredits = { credits: 2, brand: 'minor' };

console.log(sumMajorCredits(math, physics));
console.log(sumMinorCredits(minor1, minor2));
