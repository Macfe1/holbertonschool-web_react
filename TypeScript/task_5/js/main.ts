export interface MajorCredits {
  credits: number;
  readonly __brand: 'Major';
}

export interface MinorCredits {
  credits: number;
  readonly __brand: 'Minor';
}

function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const suma = subject1.credits + subject2.credits;
  return {
    credits: suma,
    __brand: 'Major'
  };
}

function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const suma = subject1.credits + subject2.credits;
  return {
    credits: suma,
    __brand: 'Minor'
  };
}