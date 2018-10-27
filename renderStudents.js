
function renderStudents(students) {
    let myStudents = '' 

    for (let i = 0; i < students.length; i++) {
        if (students[i].isPresent === true) {
            myStudents = myStudents +  `<div class="col" style="width: 200px; height: 100px; background-color: green; border: 2px solid black;">${students[i].name}<h4>present</h4></div>`
        } else if (students[i].isPresent === false) {
            myStudents = myStudents + `<div class="col" style="width: 200px; height: 100px; background-color: red; border: 2px solid black;">${students[i].name}<h4>absent</h4></div>`
        }
        console.log( myStudents )
    }
        
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Roll Call</h5>` + myStudents + `
    </div>
    </div>` 
    
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}