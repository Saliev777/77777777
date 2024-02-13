// let students = JSON.parse(localStorage.getItem("students")) || [];
// let studentEditing = null;

// const studentList = document.getElementById("student-list");
// const search = document.getElementById("search");
// const filter = document.getElementById("filter");
// const location = document.getElementById("location");

// const firstName = document.getElementById("firstName");
// const secondName = document.getElementById("secondName");
// const manzil = document.getElementById("location");
// const birthday = document.getElementById("birthday");
// const lavozim = document.getElementById("lavozim");
// const lavozim_turi = document.getElementById("lavozim_turi");
// const salary = document.getElementById("salary");
// const isMerried = document.getElementById("isMerried");

// const editModal = document.getElementById("editModal");
// const addModal = document.getElementById("addModal");
// const editModalLabel = document.getElementById("editModalLabel");

// const firstNameEdit = document.getElementById("firstNameEdit");
// const secondNameEdit = document.getElementById("secondNameEdit");
// const locationEdit = document.getElementById("locationEdit");
// const birthdayEdit = document.getElementById("birthdayEdit");
// const lavozimEdit = document.getElementById("lavozimEdit");
// const lavozim_turiEdit = document.getElementById("lavozim_turiEdit");
// const salaryEdit = document.getElementById("salaryEdit");
// const isMerriedEdit = document.getElementById("isMerriedEdit");

// function displayStudents(students) {
//   let str = "";
//   students.forEach((student) => {
//     str += `
//         <tr >
//           <td>${student.id}</td>
//           <td>${student.firstName}</td>
//           <td>${student.lastName}</td>
//           <td>${student.location}</td>
//           <td>${student.lavozim}</td>
//           <td>${student.lavozim_turi}</td>
//           <td>${student.salary}</td>
//           <td>${student.isMerried ? "Ha" : "Yo'q"}</td>
//           <td>
//             <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
//             data-bs-target="#editModal" onclick="handleEdit(${
//               student.id
//             })">Edit</button>
//             <button class="btn btn-sm btn-danger" onclick="deleteStudent(${
//               student.id
//             })">Delete</button>
//           </td>
//         </tr>
//       `;
//   });
//   studentList.innerHTML = str;
// }

// displayStudents(students);

// btnAdd.addEventListener("click", function (e) {
//   console.log(e);
//   e.preventDefault();
//   const newStudent = {
//     id: students.length + 1,
//     firstName: firstName.value,
//     lastName: lastName.value,
//     location: location.value,
//     birthday: birthday.value,
//     lavozim: lavozim.value,
//     lavozim_turi: lavozim_turi.value,
//     salary: salary.value,
//     isMerried: isMerried.checked,
//   };
//   let newStudents = [...students, newStudent];
//   displayStudents(newStudents);
//   localStorage.setItem("students", JSON.stringify(newStudents));
// });

// function deleteStudent(studentId) {
//   if (confirm("Are you sure you want to delete this student?")) {
//     let students = JSON.parse(localStorage.getItem("students"));
//     let newStudents = students.filter((student) => student.id !== studentId);
//     displayStudents(newStudents);
//     localStorage.setItem("students", JSON.stringify(newStudents));
//   }
// }

// function handleEdit(studentId) {
//   const students = JSON.parse(localStorage.getItem("students"));
//   const studentEdit = students.find((student) => student.id === studentId);
//   studentEditing = studentEdit;

//   firstNameEdit.value = studentEdit.firstName;
//   lastNameEdit.value = studentEdit.lastName;
//   groupEdit.value = studentEdit.group;
//   doesWorkEdit.checked = studentEdit.doesWork;
// }

// btnUpdate.addEventListener("click", function (e) {
//   e.preventDefault();
//   let studentId = studentEditing.id;
//   let studentUpdated = {
//     id: studentId,
//     firstName: firstNameEdit.value,
//     lastName: lastNameEdit.value,
//     group: groupEdit.value,
//     doesWork: doesWorkEdit.checked,
//   };

//   let students = JSON.parse(localStorage.getItem("students"));
//   let newStudents = students.map((student) =>
//     student.id === studentId ? studentUpdated : student
//   );
//   displayStudents(newStudents);
//   localStorage.setItem("students", JSON.stringify(newStudents));
// });

// search.addEventListener("input", function (e) {
//   let text = e.target.value.toLowerCase();
//   let students = JSON.parse(localStorage.getItem("students"));
//   let newStudents = students.filter(
//     (student) =>
//       student.firstName.toLowerCase().includes(text) ||
//       student.lastName.toLowerCase().includes(text) ||
//       student.group.toLowerCase().includes(text)
//   );
//   displayStudents(newStudents);
// });

// filter.addEventListener("change", function (e) {
//   let value = e.target.value;
//   let students = JSON.parse(localStorage.getItem("students"));
//   let newStudents =
//     value === "All"
//       ? students
//       : students.filter((student) => student.group === value);
//   displayStudents(newStudents);
// });

const btnAdd = document.getElementById("btn-add");
const btnUpdate = document.getElementById("btn-update");

let students = JSON.parse(localStorage.getItem("students")) || [];
let studentEditing = null;

const studentList = document.getElementById("student-list");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

function displayStudents(students) {
  let str = "";
  students.forEach((student) => {
    str += `
        <tr>
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.location}</td>
          <td>${student.birthday}</td>
          <td>${student.lavozim}</td>
          <td>${student.lavozim_turi}</td>
          <td>${student.salary}</td>
          <td>${student.isMerried ? "Ha" : "Yo'q"}</td>
          <td>
            <button class="btn btn-sm btn-warning" data-bs-toggle="modal"
            data-bs-target="#editModal" onclick="handleEdit(${
              student.id
            })">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="deleteStudent(${
              student.id
            })">Delete</button>
          </td>
        </tr>
      `;
  });
  studentList.innerHTML = str;
}

displayStudents(students);

btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  const newStudent = {
    id: students.length + 1,
    firstName: firstName.value,
    lastName: secondName.value,
    location: manzil.value,
    birthday: birthday.value,
    lavozim: lavozim.value,
    lavozim_turi: lavozim_turi.value,
    salary: salary.value,
    isMerried: isMerried.checked,
  };
  students.push(newStudent);
  displayStudents(students);
  localStorage.setItem("students", JSON.stringify(students));
});

function deleteStudent(studentId) {
  if (confirm("Are you sure you want to delete this student?")) {
    let newStudents = students.filter((student) => student.id !== studentId);
    students = newStudents;
    displayStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  }
}

function handleEdit(studentId) {
  const studentEdit = students.find((student) => student.id === studentId);
  studentEditing = studentEdit;

  firstNameEdit.value = studentEdit.firstName;
  lastNameEdit.value = studentEdit.lastName;
  locationEdit.value = studentEdit.location;
  birthdayEdit.value = studentEdit.birthday;
  lavozimEdit.value = studentEdit.lavozim;
  lavozim_turiEdit.value = studentEdit.lavozim_turi;
  salaryEdit.value = studentEdit.salary;
  isMerriedEdit.checked = studentEdit.isMerried;
}

btnUpdate.addEventListener("click", function (e) {
  e.preventDefault();
  let studentId = studentEditing.id;
  let studentUpdated = {
    id: studentId,
    firstName: firstNameEdit.value,
    lastName: secondNameEdit.value,
    location: locationEdit.value,
    birthday: birthdayEdit.value,
    lavozim: lavozimEdit.value,
    lavozim_turi: lavozim_turiEdit.value,
    salary: salaryEdit.value,
    isMerried: isMerriedEdit.checked,
  };

  let newStudents = students.map((student) =>
    student.id === studentId ? studentUpdated : student
  );
  students = newStudents;
  displayStudents(newStudents);
  localStorage.setItem("students", JSON.stringify(newStudents));
});

search.addEventListener("input", function (e) {
  let text = e.target.value.toLowerCase();
  let newStudents = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(text) ||
      student.lastName.toLowerCase().includes(text) ||
      student.location.toLowerCase().includes(text)
  );
  displayStudents(newStudents);
});

filter.addEventListener("change", function (e) {
  let value = e.target.value;
  let newStudents =
    value === "All"
      ? students
      : students.filter((student) => student.location === value);
  displayStudents(newStudents);
});
