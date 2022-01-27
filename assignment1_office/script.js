var selectedRow = null
var formData=new Array();
var vg;

function init() {
   document.getElementById("tablerows").innerHTML = "";
   if (localStorage.formData) {
      formData = JSON.parse(localStorage.formData);
      for (var i = 0; i < formData.length; i++) {
         insertNewRecord(i, formData[i].firstname, formData[i].lastname, formData[i].email, formData[i].phone);
      }
   }
}

function onFormSubmit() {
   
   let firstname = document.getElementById("firstname").value;
   let lastname = document.getElementById("lastname").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;
   let pswd = document.getElementById("pswd").value;
   let repswd = document.getElementById("repswd").value;

   if (!firstname.match(/^[a-zA-Z ]{2,30}$/)) {
      alert('Incorrect first Name')
   } else if (!lastname.match(/^[a-zA-Z ]{2,30}$/)) {
      alert('Incorrect last name')
   } else if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      alert('Email pattern is not valid');
   } else if (!phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
      alert('Phone number is not valid');
   } else if (pswd.length < 6) {
      alert("pswdword must be at least 6 characters long.");
   }
   else if (pswd !== repswd) {
      alert('pswdwords not matched')
   }
   else {
      if (selectedRow != vg) {
         if (formData.some((v) => { return v.email == email })) {
            alert("duplicate mail id");
         } else if (formData.some((v) => { return v.phone == phone })) {
            alert("duplicate number");
         } else {
            var stuobj = {
               "firstname": firstname,
               "lastname": lastname,
               "email": email,
               "phone": phone,
               "pswd": pswd,
               "repswd": repswd
            }

            if (selectedRow === null) {
               formData.push(stuobj);
            } else {
               formData.splice(selectedRow, 1, stuobj);
            }
            localStorage.formData = JSON.stringify(formData);
            init();
            resetForm();
         }
      } else {
         var stuobj = {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "phone": phone,
            "pswd": pswd,
            "repswd": repswd
         }

         if (selectedRow === null) {
            formData.push(stuobj);
         } else {
            formData.splice(selectedRow, 1, stuobj);
         }
         localStorage.formData = JSON.stringify(formData);
         init();
         resetForm();
      }
   }
}
   

function insertNewRecord(index, firstname, lastname, email, phone) {
    var table = document.getElementById("tablerows");
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = phone;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pswd").value = "";
    document.getElementById("repswd").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("pswd").value = selectedRow.cells[3].innerHTML;
    document.getElementById("repswd").value = selectedRow.cells[3].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.phone;
}

// function onDelete(td) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("employeeList").deleteRow(row.rowIndex);
//         resetForm();
//     }
//     init();
// }
function onDelete(index) {

   formData.splice(index, 1);
   localStorage.formData = JSON.stringify(formData);
   init();
}



// var selectedRow = -1;
// let formData = new Array();
// var vg;
// function init() {
//    document.getElementById("tablerows").innerHTML = "";
//    if (localStorage.formData) {
//       formData = JSON.parse(localStorage.formData);
//       for (var i = 0; i < formData.length; i++) {
//          insertnewdata(i, formData[i].firstname, formData[i].lastname, formData[i].email, formData[i].phone);
//       }
//    }
// }
// function savedata() {
//    let firstname, lastname, email, pswd, repswd, phone
//    firstname = document.getElementById("firstname").value;
//    lastname = document.getElementById("lastname").value;
//    email = document.getElementById("email").value;
//    phone = document.getElementById("phone").value;
//    pswd = document.getElementById("pswd").value;
//    repswd = document.getElementById("repswd").value;

//    if (!firstname.match(/^[a-zA-Z ]{2,30}$/)) {
//       alert('Incorrect first Name')
//    } else if (!lastname.match(/^[a-zA-Z ]{2,30}$/)) {
//       alert('Incorrect last name')
//    } else if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
//       alert('Email pattern is not valid');
//    } else if (!phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
//       alert('Phone number is not valid');
//    } else if (pswd.length < 6) {
//       alert("pswdword must be at least 6 characters long.");
//    }
//    else if (pswd !== repswd) {
//       alert('pswdwords not matched')
//    }
//    else {
//       if (selectedRow != vg) {
//          if (formData.some((v) => { return v.email == email })) {
//             alert("duplicate mail id");
//          } else if (formData.some((v) => { return v.phone == phone })) {
//             alert("duplicate number");
//          } else {
//             var stuobj = {
//                "firstname": firstname,
//                "lastname": lastname,
//                "email": email,
//                "phone": phone,
//                "pswd": pswd,
//                "repswd": repswd
//             }

//             if (selectedRow === -1) {
//                formData.push(stuobj);
//             } else {
//                formData.splice(selectedRow, 1, stuobj);
//             }
//             localStorage.formData = JSON.stringify(formData);
//             init();
//             resetForm();
//          }
//       } else {
//          var stuobj = {
//             "firstname": firstname,
//             "lastname": lastname,
//             "email": email,
//             "phone": phone,
//             "pswd": pswd,
//             "repswd": repswd
//          }

//          if (selectedRow === -1) {
//             formData.push(stuobj);
//          } else {
//             formData.splice(selectedRow, 1, stuobj);
//          }
//          localStorage.formData = JSON.stringify(formData);
//          init();
//          resetForm();
//       }
//    }
// }

// function insertnewdata(index, firstname, lastname, email, phone) {
//    var table = document.getElementById("tablerows");
//    var newrow = table.insertRow(table.length);
//    var data1 = newrow.insertCell(0);
//    data1.innerHTML = firstname;
//    var data2 = newrow.insertCell(1);
//    data2.innerHTML = lastname;
//    var data3 = newrow.insertCell(2);
//    data3.innerHTML = email;
//    var data4 = newrow.insertCell(3);
//    data4.innerHTML = phone;
//    var data5 = newrow.insertCell(4);
//    data5.innerHTML = '<button onclick="editdata(' + index + ')">Edit</button> <button onclick="deletedata(' + index + ')">Delete</button>';
// }

// function deletedata(index) {

//    formData.splice(index, 1);
//    localStorage.formData = JSON.stringify(formData);
//    init();
// }


// function resetForm() {
//    selectedRow = -1;
//    document.getElementById("firstname").value = "";
//    document.getElementById("lastname").value = "";
//    document.getElementById("email").value = "";
//    document.getElementById("phone").value = ""
//    document.getElementById("pswd").value = ""
//    document.getElementById("repswd").value = ""
// }

// function editdata(index) {
//    vg = index
//    selectedRow = index;
//    var obj = formData[index];
//    document.getElementById("firstname").value = obj.firstname;
//    document.getElementById("lastname").value = obj.lastname;
//    document.getElementById("email").value = obj.email;
//    document.getElementById("phone").value = obj.phone;
//    // document.getElementById("pswd").value = obj.pswd;
//    // document.getElementById("repswd").value = obj.repswd;
//    document.getElementById("submit").innerHTML = "Update";
// }
