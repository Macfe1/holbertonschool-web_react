interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mafe',
  lastName: 'Peña',
  age: 23,
  location: 'Colombia',
};

const student2: Student = {
  firstName: 'Laura',
  lastName: 'PC',
  age: 30,
  location: 'Colombia',
};

const studentsList = [student1, student2];

//Create the table

const table = document.createElement("table");
const rowTh = document.createElement("tr");
const columnTh = document.createElement("th");
const columnThSec = document.createElement("th");

columnTh.textContent = "Firstname";
columnThSec.textContent = "Location";

rowTh.appendChild(columnTh);
rowTh.appendChild(columnThSec);
table.appendChild(rowTh);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const column = document.createElement("td");
  const columnSec = document.createElement("td");

  column.textContent = student.firstName;
  columnSec.textContent = student.location;

  row.appendChild(column);
  row.appendChild(columnSec);
  table.appendChild(row);
});

document.body.appendChild(table);