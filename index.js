//---------- select tbody---------------------
let tabletbody = document.querySelector('table tbody');

// creat task
let tasks = [
    // { taskname: "go to gem", taskDescription: "cardio", taskstatus: true },
    // { taskname: "go to gem", taskDescription: "cardio", taskstatus: true },
    // { taskname: "go to gem", taskDescription: "cardio", taskstatus: false },
    // { taskname: "go to gem", taskDescription: "cardio", taskstatus: false },
    // { taskname: "go to gem", taskDescription: "cardio", taskstatus: true },
    // { taskname: "go to gem", taskDescription: "cardio", taskstatus: true },
    // { taskname: "go to gem", taskDescription: "cardio", taskstatus: true },
];
let displaytask = () => {
    tabletbody.innerHTML = '';
    tasks.forEach((el, index) => {
        tabletbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.taskname}</td>
                <td>${el.taskDescription}</td>
                <td>
                   <button onclick="toggleupdetetask(${index})" class="btn ${el.taskstatus == true ? 'btn-info' : ' btn-danger'}">
                        ${el.taskstatus == true ? 'done' : ' created '}
                   </button>
                </td>
                <td class="d-flex gap-1">
                    <button  onclick=" removetask(${index})"  class="btn btn-danger d-flex gap-1" id="Delete"> <i
                            class="bi bi-trash-fill"></i></button>
                    <button class="btn btn-light" onclick="sendtaskmodal(${index}) " id="Edittasks"><i class="bi bi-pencil"></i></button>
                </td>
            </tr>
        `
    })
};
displaytask()
// ------------------- select modal -----------------
let mymodal = document.querySelector('.modal');
let showmymodal = () => {
    mymodal.style.display = "flex";
}
let clossmodal = () => {
    mymodal.style.display = "none";
}
// ----------- select add task modal ----------------------
let Nemeadd = document.querySelector('#Nemeadd');
let Descriptionadd = document.querySelector('#Descriptionadd');
let btnadd = document.querySelector('#btnadd');

let addtasks = () => {
    let Nemeaddindex = Nemeadd.value;
    let Descriptionaddindex = Descriptionadd.value;
    let newobj = { taskname: Nemeaddindex, taskDescription: Descriptionaddindex, taskstatus: false };
    tasks.push(newobj)
    displaytask()
    Nemeadd.value = '';
    Descriptionadd.value = '';
}

btnadd.addEventListener('click', () => {
    addtasks()
    clossmodal()
})

// -------------- select updete task status --------------------------
let toggleupdetetask = (seletedIndex) => {
    tasks[seletedIndex].taskstatus = !tasks[seletedIndex].taskstatus;
    displaytask()
}
// ----------------------- modal upp date- ----------------------------
let modaluppdate = document.querySelector('.modaluppdate');
// ------------------ send data to modal ----------------------------
let nametask = document.querySelector('#nametask');
let nameDescription = document.querySelector('#nameDescription');
let numberadd = document.querySelector('#numberadd');
let btnup = document.querySelector('#btnup')

let showmymodalup = () => {
    modaluppdate.style.display = "flex";

}
let clossmodalup = () => {
    modaluppdate.style.display = "none";
}

let sendtaskmodal = (seletedIndex) => {
    numberadd.value = seletedIndex + 1;
    nametask.value = tasks[seletedIndex].taskname;
    nameDescription.value = tasks[seletedIndex].taskDescription;
    showmymodalup()
}
// ---------up date task -------------------
let updatetotask = () => {
    tasks[numberadd.value - 1].taskname = nametask.value;
    tasks[numberadd.value - 1].taskDescription = nameDescription.value;
    displaytask()
}
btnup.addEventListener('click', () => {
    updatetotask()
    clossmodalup()
});
let removetask = (seletedIndex) => {
    tasks.splice(seletedIndex, 1);
    displaytask()
}