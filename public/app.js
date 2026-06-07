const API = "http://localhost:3000";

const createBtn = document.getElementById("createBtn");
const searchBtn = document.getElementById("searchBtn");
const updateBtn = document.getElementById("updateBtn");

const searchResult = document.getElementById("searchResult");
const studentCards = document.getElementById("studentCards");


// =====================================
// VIEW MANAGEMENT
// =====================================

function showView(id) {

    document
        .querySelectorAll(".panel")
        .forEach(panel => {
            panel.classList.remove("active");
        });

    document
        .getElementById("home")
        .style.display = "none";

    document
        .getElementById(id)
        .classList.add("active");

    if (id === "studentsView") {
        loadStudents();
    }
}

function goHome() {

    document
        .querySelectorAll(".panel")
        .forEach(panel => {
            panel.classList.remove("active");
        });

    document
        .getElementById("home")
        .style.display = "grid";
}

window.showView = showView;
window.goHome = goHome;


// =====================================
// CREATE STUDENT
// =====================================

createBtn.addEventListener("click", async function () {

    const name = document.getElementById("createName").value;
    const course = document.getElementById("createCourse").value;

    const response = await fetch(`${API}/students`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            course: course
        })
    });

    const data = await response.json();

    alert(data.message);

    document.getElementById("createName").value = "";
    document.getElementById("createCourse").value = "";
});


// =====================================
// SEARCH STUDENT
// =====================================

searchBtn.addEventListener("click", async function () {

    const id = document.getElementById("searchId").value;

    const response = await fetch(`${API}/students/${id}`);

    const data = await response.json();

    if (!response.ok) {

        searchResult.innerHTML = `
            <div class="result-card">
                <h3>${data.message}</h3>
            </div>
        `;

        return;
    }

    searchResult.innerHTML = `
        <div class="result-card">

            <h2>${data.name}</h2>

            <p>${data.course}</p>

            <p>ID: ${data.id}</p>

            <div class="card-actions">

                <button
                    class="icon-btn delete-btn"
                    onclick="deleteStudent('${data.id}')"
                >
                    🗑
                </button>

            </div>

        </div>
    `;
});


// =====================================
// UPDATE STUDENT
// =====================================

updateBtn.addEventListener("click", async function () {

    const id = document.getElementById("updateId").value;

    const name = document.getElementById("updateName").value;

    const course = document.getElementById("updateCourse").value;

    const response = await fetch(`${API}/students/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            course: course
        })
    });

    const data = await response.json();

    alert(data.message);

    document.getElementById("updateId").value = "";
    document.getElementById("updateName").value = "";
    document.getElementById("updateCourse").value = "";
});


// =====================================
// LOAD ALL STUDENTS
// =====================================

async function loadStudents() {

    const response = await fetch(`${API}/students`);

    const students = await response.json();

    studentCards.innerHTML = "";

    students.forEach(student => {

        studentCards.innerHTML += `

            <div class="student-card">

                <div class="student-name">
                    ${student.name}
                </div>

                <div class="student-course">
                    ${student.course}
                </div>

                <div class="student-id">
                    ID: ${student.id}
                </div>

                <div class="card-actions">

                    <button
                        class="icon-btn edit-btn"
                        onclick="fillUpdateForm(
                            '${student.id}',
                            '${student.name}',
                            '${student.course}'
                        )"
                    >
                        ✏️
                    </button>

                    <button
                        class="icon-btn delete-btn"
                        onclick="deleteStudent('${student.id}')"
                    >
                        🗑️
                    </button>

                </div>

            </div>

        `;
    });
}


// =====================================
// QUICK EDIT
// =====================================

function fillUpdateForm(id, name, course) {

    showView("updateView");

    document.getElementById("updateId").value = id;

    document.getElementById("updateName").value = name;

    document.getElementById("updateCourse").value = course;
}

window.fillUpdateForm = fillUpdateForm;


// =====================================
// DELETE STUDENT
// =====================================

async function deleteStudent(id) {

    const confirmed = confirm(
        "Delete this student?"
    );

    if (!confirmed) {
        return;
    }

    const response = await fetch(
        `${API}/students/${id}`,
        {
            method: "DELETE"
        }
    );

    const data = await response.json();

    alert(data.message);

    loadStudents();

    searchResult.innerHTML = "";
}

window.deleteStudent = deleteStudent;