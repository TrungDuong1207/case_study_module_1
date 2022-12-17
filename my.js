let studentList = [];
let addbtn = document.getElementById('add');
addbtn.addEventListener('click', check);
addbtn.addEventListener('click', addStudent);

function showStudentList() {
    document.getElementById('result').innerHTML = " ";
    for (let i = 0; i < studentList.length; i++) {
        document.getElementById('result').innerHTML += `<tr>
<td>${i + 1}</td>
<td class="n">${studentList[i].name}</td>
<td>${studentList[i].age}</td>
<td>${studentList[i].gender}</td>
<td>${studentList[i].cl}</td>
<td>${studentList[i].mark}</td>
<td><button onclick="editStudent(${i})">Edit</button></td>
<td><button onclick="deleteStudent(${i})">Delete</button></td>
</tr>`
    };
}

function addStudent() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let cl = document.getElementById('cl').value;
    let mark = document.getElementById('mark').value;
    let student = new Student(name, age, gender, cl, mark);
    if (indexPresent == -1 && checkValue == 0) {
        studentList.push(student);
        showStudentList();
    } else {
        studentList[indexPresent] = student;
        indexPresent = -1;
        checkValue = 0;
        document.getElementById("add").innerHTML = "ADD";
        showStudentList();
    }
}

function deleteStudent(index) {
    let a = confirm('Would you like to delete ?');
    if (a == true) {
        studentList.splice(index, 1);
        showStudentList();
    }
    ;

}

let indexPresent = -1;

function editStudent(index) {
    indexPresent = index;
    document.getElementById('name').value = studentList[index].name;
    document.getElementById('age').value = studentList[index].age;
    document.getElementById('gender').value = studentList[index].gender;
    document.getElementById('cl').value = studentList[index].cl;
    document.getElementById('mark').value = studentList[index].mark;
    document.getElementById("add").innerHTML = "UPDATE";
}
let checkValue = 0;
function check (){
    document.getElementById('name').style.borderColor = 'black';
    document.getElementById('age').style.borderColor = 'black';
    document.getElementById('gender').style.borderColor = 'black';
    document.getElementById('cl').style.borderColor = 'black';
    document.getElementById('mark').style.borderColor = 'black';
    if (document.getElementById('name').value == '' ){
        document.getElementById('name').style.borderColor = 'red';
        checkValue++;
    }
    if (document.getElementById('age').value == '' ){
        document.getElementById('age').style.borderColor = 'red';
        checkValue++;
    }
    if (document.getElementById('gender').value == '' ){
        document.getElementById('gender').style.borderColor = 'red';
        checkValue++;
    }
    if (document.getElementById('cl').value == '' ){
        document.getElementById('cl').style.borderColor = 'red';
        checkValue++;
    }
    if (document.getElementById('mark').value == '' ){
        document.getElementById('mark').style.borderColor = 'red';
        checkValue++;
    }
}
function save(){
    localStorage.removeItem('studentList');
    localStorage.setItem("studentList", JSON.stringify(studentList));
}
function reShowList(){
    document.getElementById('result').innerHTML = " ";
    let stu = JSON.parse(localStorage.getItem("studentList"));
    for (let i = 0; i < stu.length; i++) {
        document.getElementById('result').innerHTML += `<tr>
<td>${i + 1}</td>
<td class="n">${stu[i].name}</td>
<td>${stu[i].age}</td>
<td>${stu[i].gender}</td>
<td>${stu[i].cl}</td>
<td>${stu[i].mark}</td>
<td><button onclick="editStudent(${i})">Edit</button></td>
<td><button onclick="deleteStudent(${i})">Delete</button></td>
</tr>`
    };
    for (let j=0; j<stu.length;j++){
        studentList.push(stu[j]);
    };
}