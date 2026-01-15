interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

const teacher1: Teacher = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
};

const teacher2: Teacher = {
  firstName: "Bob",
  lastName: "Brown",
  fullTimeEmployee: false,
  location: "San Francisco",
};

const teachersList: Teacher[] = [teacher1, teacher2];

const table = document.createElement("table");

// Optional: add table header
const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add one row per teacher
teachersList.forEach((teacher) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = teacher.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = teacher.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
