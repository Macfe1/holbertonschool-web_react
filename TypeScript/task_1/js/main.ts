interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [anyProperty: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

//Interface printTeacherFunction  - Function described printTeacher

interface printTeacherFunction {
  (firstName: string, lastName:string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Class StudentClass - its interface and the interface for the class constructor

interface StudentClassInterface { // Class Interface
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor { // Constructor Interface
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
