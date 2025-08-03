// #-----------------------------------------------------------------#
//                          add new task
// #-----------------------------------------------------------------#
let addnewtaskindex = true;
let addnewtask = document.querySelector('.addnewtask');
// #-----------------------------------------------------------------#
//                          task all task
// #-----------------------------------------------------------------#
let alltaskindex = true;
let lestall = document.querySelector('.lestall')
// #-----------------------------------------------------------------#
//                          todo lest
// #-----------------------------------------------------------------#
let todolestindex = false;
let todolest = document.querySelector('.todolest')
// #-----------------------------------------------------------------#
//                          completed lest 
// #-----------------------------------------------------------------#
let completedlestindex = false;
let completedlest = document.querySelector('.completedlest')
// #-----------------------------------------------------------------#
let checkboxindex = true;
let checkbox = document.querySelector('input[type="checkbox"]')
// ------------------------------------------------------------------#

//                      add task
let addnewtasks = () => {
    let newtask = document.querySelector('#newtask');
    let el = `
        <div class="col-12 d-flex justify-content-between p-3">
            <h3>${newtask.value}</h3>
            <input type="checkbox">
        </div>
    `
    lestall.innerHTML += el;
}
let checkboxtask = () => {
    lestall.forEach
}
//                       addnewtask
let toggleaddnewtask = () => {
    if (addnewtaskindex == true) {
        addnewtaskindex = false;
        addnewtask.classList.remove('d-flex');
        addnewtask.classList.add('d-none');
    } else {
        addnewtaskindex = true;
        addnewtask.classList.add('d-flex');
        addnewtask.classList.remove('d-none');
    }
}
//                          task all task
let togglealltask = () => {

    if (alltaskindex == true) {
        alltaskindex = false;
        lestall.classList.remove('d-flex');
        lestall.classList.add('d-none');
    } else {
        alltaskindex = true;
        lestall.classList.add('d-flex');
        lestall.classList.remove('d-none');

    }
}
//                          todo lest
let toggletodotask = () => {

    if (todolestindex == false) {
        todolestindex = true;
        todolest.classList.add('d-flex');
        todolest.classList.remove('d-none');

    } else {
        todolestindex = false;
        todolest.classList.remove('d-flex');
        todolest.classList.add('d-none');
    }
}
//                          completed lest 
let togglecompletedtask = () => {

    if (completedlestindex == false) {
        completedlestindex = true;
        completedlest.classList.add('d-flex');
        completedlest.classList.remove('d-none');

    } else {
        completedlestindex = false;
        completedlest.classList.remove('d-flex');
        completedlest.classList.add('d-none');
    }
}
