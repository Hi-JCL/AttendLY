'use strict'

let stage = 0;
if(localStorage.getItem("stage") != null){
    stage = parseInt(localStorage.getItem("stage"));
}

const emptyField = /([^\s])/;    // this regex check empty field and also if there are only spaces in the field

const body = document.getElementById("body");

const loginNxtBtn = document.getElementById("loginNxtBtn");
const loginInput = document.querySelectorAll(".loginInput");
const crName = document.getElementById("crName");
const CourseBranch = document.getElementById("CourseBranch");
const courseSem = document.getElementById("courseSem");
const branchSec = document.getElementById("branchSec");
const loginPageSec = document.getElementById("loginPageSec");
const subjectDetailSec = document.getElementById("subjectDetailSec");
const cr = document.getElementById("cr");
const course = document.getElementById("course");
const headSec = document.getElementById("headSec");

const addSubNext = document.getElementById("addSubNext");
const subBox = document.getElementById("subBox");
const nextBtn = document.getElementById("nextBtn");

const timeTableSec = document.getElementById("timeTableSec");
const dayCardsBoxs = document.querySelectorAll(".dayCardsBox");
const downArrow = document.querySelectorAll(".downArrow");
const subSetBoxs = document.querySelectorAll(".subSetBox");
const dayBtn = document.querySelectorAll(".dayBtn");

const done = document.getElementById('done');
const attendanceSec = document.getElementById("attendanceSec");
const header = document.getElementById("header");
const selectSet = document.getElementById("selectSet");
const selectSub = document.getElementById("selectSub");
const dayDate = document.getElementById("dayDate");

const hamMenu = document.getElementById("hamMenu");
const menuBox = document.getElementById("menuBox");
const menuClose = document.getElementById("menuClose");

const addStudent = document.getElementById("addStudent");
const addStdBox = document.getElementById("addStdBox");
const stdCancel = document.getElementById("stdCancel");
const addStdBtn = document.getElementById("addStdBtn");
const stdInputBox = document.getElementById("stdInputBox");
const stdBtnDone = document.getElementById("stdBtnDone");
const footer = document.getElementById("footer");

const reset = document.getElementById("reset");
const resetOverlay = document.getElementById("resetOverlay");
const rstNo = document.getElementById("rstNo");
const rstYes = document.getElementById("rstYes");

const editBtn = document.getElementById("editBtn");
const editDone = document.getElementById("editDone");
const editBoxCan = document.getElementById("editBoxCan");
const editOverlay = document.getElementById("editOverlay");
const edtDone = document.getElementById("edtDone");

const proClose = document.getElementById("proClose");
const profileBox = document.getElementById("profileBox");
const profile = document.getElementById("profile");
const proDone = document.getElementById("proDone");
const editSubTech = document.getElementById("editSubTech");
const subTeachBox = document.getElementById("subTeachBox");
const subEditBox = document.getElementById("subEditBox");
const pro = document.getElementById("pro");
const EditaddSub = document.getElementById("EditaddSub");
const editTimeTable = document.getElementById("editTimeTable");
const edSets = document.getElementById("edSets");

const imgFile = document.getElementById("imgFile");
const userImgBox = document.getElementById("userImgBox");
const genPDF = document.getElementById("genPDF");

const pdfGenOption = document.getElementById('pdfGenOption');
const pdfOptClose = document.getElementById('pdfOptClose');


let timeTableData = {
    "Monday" : {
                "9.55": {  "sub": "",
                            "set": "" },
                "10.50": {  "sub": "",
                            "set": "" },
                "11.45": {  "sub": "",
                            "set": "" },
                "12.40": {  "sub": "",
                            "set": "" },
                "1.35": {  "sub": "",
                            "set": "" },
                "2.30": {  "sub": "",
                            "set": "" },
                "3.25": {  "sub": "",
                            "set": "" },
                "4.20": {  "sub": "",
                            "set": "" }
            },
    "Tuesday" : {
                "9.55": {  "sub": "",
                            "set": "" },
                "10.50": {  "sub": "",
                            "set": "" },
                "11.45": {  "sub": "",
                            "set": "" },
                "12.40": {  "sub": "",
                            "set": "" },
                "1.35": {  "sub": "",
                            "set": "" },
                "2.30": {  "sub": "",
                            "set": "" },
                "3.25": {  "sub": "",
                            "set": "" },
                "4.20": {  "sub": "",
                            "set": "" }
            },
    "Wednesday" : {
                "9.55": {  "sub": "",
                            "set": "" },
                "10.50": {  "sub": "",
                            "set": "" },
                "11.45": {  "sub": "",
                            "set": "" },
                "12.40": {  "sub": "",
                            "set": "" },
                "1.35": {  "sub": "",
                            "set": "" },
                "2.30": {  "sub": "",
                            "set": "" },
                "3.25": {  "sub": "",
                            "set": "" },
                "4.20": {  "sub": "",
                            "set": "" }
            },
    "Thursday" : {
                "9.55": {  "sub": "",
                            "set": "" },
                "10.50": {  "sub": "",
                            "set": "" },
                "11.45": {  "sub": "",
                            "set": "" },
                "12.40": {  "sub": "",
                            "set": "" },
                "1.35": {  "sub": "",
                            "set": "" },
                "2.30": {  "sub": "",
                            "set": "" },
                "3.25": {  "sub": "",
                            "set": "" },
                "4.20": {  "sub": "",
                            "set": "" }
            },
    "Friday" : {
                "9.55": {  "sub": "",
                            "set": "" },
                "10.50": {  "sub": "",
                            "set": "" },
                "11.45": {  "sub": "",
                            "set": "" },
                "12.40": {  "sub": "",
                            "set": "" },
                "1.35": {  "sub": "",
                            "set": "" },
                "2.30": {  "sub": "",
                            "set": "" },
                "3.25": {  "sub": "",
                            "set": "" },
                "4.20": {  "sub": "",
                            "set": "" }
            },
    "Saturday" : {
                "9.55": {  "sub": "",
                            "set": "" },
                "10.50": {  "sub": "",
                            "set": "" },
                "11.45": {  "sub": "",
                            "set": "" },
                "12.40": {  "sub": "",
                            "set": "" },
                "1.35": {  "sub": "",
                            "set": "" },
                "2.30": {  "sub": "",
                            "set": "" },
                "3.25": {  "sub": "",
                            "set": "" },
                "4.20": {  "sub": "",
                            "set": "" }
            },
    "Sunday" : 0
}


let studentData = {
    // 'md javed akhtar': {
    //     'uid': 687687673,
    //     'set': 'A'
    // }
}


const day = {'1' : "Monday", '2': "Tuesday", '3': "Wednesday", '4': "Thursday", '5': "Friday", '6': "Saturday", '0': "Sunday"}


const date = new Date();
const todayDate = [day[date.getDay()], `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`]

dayDate.innerHTML = `${todayDate[0]} &nbsp; &nbsp; ${todayDate[1]}`;


// ========================== global variable ==========================

let y = 0;
let classSet;
let divHeight;


let loginInfo = {
    cr : "",
    branch : "",
    sem : "",
    sec : ""
}


let subjectsList = ["No Lecture"];
let teachersList = ["No Lecture"];
const classSetList = [];

// ========================== common methods ==========================

const msg = function(m){
    setTimeout(() => {
        alert(m);
    }, 10);
}


const errorMark = function(el){
    el.classList.add("error");
}


const closeMenu = function(el){
    el.classList.remove("fadeInHamMenu");
    el.classList.add("fadeOutHamMenu");
    setTimeout(() => {
        el.classList.add("hide");
    }, 500);
}


const hideShowSection = function(hideElement, showElement){
    hideElement.classList.add("fadeOut");
    showElement.classList.remove("hide");
    showElement.classList.add("fadeIn");
    setTimeout(() => {
        hideElement.classList.add("hide");
    }, 1000);
}


const hideEl = function(el){
    setTimeout(() => {
        el.classList.add("hide");
    }, 500);
}


const titleCase = function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}


const isFieldEmpty = function(el){ 
    // if no input is provided than it mark the field as red
    // and if you click on red field than it remove the red mark
    if(emptyField.test(el.value) === false){
        errorMark(el);
        el.addEventListener("focus", function(){
            el.classList.remove("error");
        })
        el.value = "";
    }
}


const setData = function(stdName, uid, set){
    // this function set the new student data to database
    for(let i = 0; i < stdName.length; i++){
        studentData[titleCase(stdName[i].value).trim()] = {
                                        "uid": uid[i].value,
                                        "set": set[i].value.replace("Set ", ""),
                                        "attend": "Present" 
                                    }
    }
}


const limitDigit = function(el){
    // this event check uid should not exceed 8 digit
        el.addEventListener("keydown", function(e){
        if((el.value.length <= 8) && (/^[0-9]$/.test(el.value))){
            e.preventDefault();
            el.value += e.key
        }
        else if(['0','1','2','3','4','5','6','7','8','9'].includes(e.key) && el.value.length > 7){
            e.preventDefault();
        }
    })
}


const attendSheet = function(set){
    const studentBox = document.getElementById("studentBox");
    studentBox.classList.remove("msgCenter");
    studentBox.innerHTML = "";
    let sl = 1;

    const stdKey = Object.keys(studentData).sort();

    for(let i = 0; i < stdKey.length; i++){
        const attendCard = `<div class="stdCard ${studentData[stdKey[i]]["attend"]}">
                                <p class="stdSl">${sl < 10 ? '0'+sl : sl}</p>
                                <div class="stdDetail">
                                    <div class="nameSet">
                                        <p class="stdName">${stdKey[i]}</p>
                                        <div class="idSet">
                                            <p class="qid">QID: ${studentData[stdKey[i]]["uid"]}</p>
                                            <p class="set">Set: ${studentData[stdKey[i]]["set"]}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="absPrsntBtn">
                                    <div class="insideBtn">&nbsp;</div>
                                </div>
                                <img src="assets/edit.svg" class="edit hide">
                                <img src="assets/del2.svg" class="del hide">
                            </div>`;

        if(set == "All"){
            sl++;
            studentBox.insertAdjacentHTML("beforeend", attendCard);
        }
        else if(set == studentData[stdKey[i]]["set"]){
            sl++;
            studentBox.insertAdjacentHTML("beforeend", attendCard);
        }
    }

    let absPrsntBtn = document.querySelectorAll(".absPrsntBtn");
    let stdCard = document.querySelectorAll(".stdCard");
    for(let i = 0; i < absPrsntBtn.length; i++){  // this loop adding present and absent button's event handler
        absPrsntBtn[i].addEventListener("click", function(){
            stdCard[i].classList.toggle("Absent");
            stdCard[i].classList.toggle("Present");
        });
    }
}


// ========================== login page script ==========================

loginNxtBtn.addEventListener("click", function(){
    if(emptyField.test(crName.value) === false || emptyField.test(CourseBranch.value) === false || emptyField.test(courseSem.value) === false || emptyField.test(branchSec.value) === false){
        for(let i = 0; i < loginInput.length; i++){
            isFieldEmpty(loginInput[i]);
        }
        msg("Field can not be blank");
    }
    else{
        loginInfo.cr = titleCase(crName.value);
        loginInfo.branch = CourseBranch.value.toUpperCase();
        loginInfo.sem = courseSem.value;
        loginInfo.sec = branchSec.value.toUpperCase();
        hideShowSection(loginPageSec, subjectDetailSec);

        stage++;
        localStorage.setItem("stage", stage);
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    }
    window.scrollTo(0,0);
})


// ========================== adding subject and teacher name page script ==========================


const subjectCard = function(){
            return `<div class="subCard slBox fadeIn">
                        <div class="subDetail">
                            <input type="text" class="teacherName input" placeholder="Teacher's Name">
                            <input type="text" class="subject input" placeholder="Subject Name">
                        </div>
                    </div>`
};


addSubNext.addEventListener("click", function(){
    subBox.insertAdjacentHTML("beforeend", subjectCard());
})


const setOptionFun = function(needSetAll, onlyOption){
    // creating set option html element
    classSet = parseInt(localStorage.getItem("classSet"));

    let setList = ``;
    for(let i = 0; i < classSet; i++){
        let ltr = String.fromCharCode(65 + i);
        setList += `<option value="${ltr}" class="sets">Set ${ltr}</option>`;
    }

    const setOption = `
            <select class="setList">
                ${needSetAll == "yes" ? `<option value="All" selected class="sets">All</option>` : ""}
                ${setList}
            </select>
    `;

    if (onlyOption == "option"){
        return setList;
    }
    else{
        return setOption;
    }
}


const subOptionFun = function(noLec){
    // creating subject options html element
    let subjectOption = ``;
    for(let i = 0; i < subjectsList.length; i++){
        subjectOption += `<option value="${subjectsList[i]}" class="subs">${subjectsList[i]}</option>`
    }

    const subOption = `<select class="subList">
                    ${subjectOption}
                </select>`;
    
    return subOption;
}

const subTeacher = function(){
    window.scrollTo(0,0);
    divHeight = localStorage.getItem("divHeight");

    setTimeout(() => {
        // calculating monday box height and setting to css variable
        document.documentElement.style.setProperty('--divHeight', `${divHeight}px`);

        // removing hard coded html of subjects and set from monday section
        for(let i = 0; i < subSetBoxs.length; i++){
            subSetBoxs[i].innerHTML = "";
        }

        // adding subjects and set in time table show that option should show subjects and sets
        for(let i = 0; i < subSetBoxs.length; i++){
            subSetBoxs[i].insertAdjacentHTML("beforeend", subOptionFun());
            subSetBoxs[i].insertAdjacentHTML("beforeend", setOptionFun("yes", ""));
        }

    }, 1000);    

    classSet = document.getElementById("classSet").value;
    stage = 2;
}


nextBtn.addEventListener("click", function(){
    const subjects = document.querySelectorAll(".subject");
    const teacherNames = document.querySelectorAll(".teacherName");
    for(let i = 0; i < subjects.length; i++){
        subjectsList.push(titleCase(subjects[i].value).trim());
        teachersList.push(titleCase(teacherNames[i].value).trim());        
    }

    hideShowSection(subjectDetailSec, timeTableSec);
    setTimeout(() => {
        divHeight = dayCardsBoxs[0].offsetHeight;
        localStorage.setItem("divHeight", divHeight);
    }, 500);
    subTeacher();
    localStorage.setItem("stage", stage);
    localStorage.setItem("classSet", classSet);
    localStorage.setItem("subjectsList", JSON.stringify(subjectsList));
    localStorage.setItem("teachersList", JSON.stringify(teachersList));
});


for(let i = 0; i < dayCardsBoxs.length; i++){
    dayBtn[i].addEventListener("click", function(){
        dayCardsBoxs[i].classList.toggle("collapse");
        dayCardsBoxs[i].classList.toggle("expand");
        downArrow[i].classList.toggle("openTab");
    })   
}


// ========================== adding subject and teacher name page script end ==========================


// ========================== adding time table details to timeTableData script ==========================

const timeTableFun = function(){
    header.classList.add("hide");
    loginPageSec.classList.add("hide");
    hideShowSection(timeTableSec, attendanceSec);
    setTimeout(() => {
        attendanceSec.classList.remove("fadeIn");
        footer.classList.add("fadeIn");
    }, 1000);

    // setting set option and subjects option to attendace page 
    selectSet.insertAdjacentHTML("beforeend", setOptionFun("yes", ""));
    selectSub.insertAdjacentHTML("beforeend", subOptionFun(""));    

    loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    // setting cr name, course and section to attendance sheet
    cr.innerText = `${loginInfo.cr}`;
    course.innerText = loginInfo.branch;
    headSec.innerText = `Sec: ${loginInfo.sec}`;

}


done.addEventListener("click", function(){
    const subLists = document.querySelectorAll(".subList");
    const setLists = document.querySelectorAll(".setList");
    document.getElementById("attendanceSec").classList.remove("fadeOut");
    let index = 0;
    for(const dayKey in timeTableData){
        for(const timeKey in timeTableData[dayKey]){
            timeTableData[dayKey][timeKey]["sub"] = subLists[index].value; 
            timeTableData[dayKey][timeKey]["set"] = setLists[index].value;
            index++;
        }
    }
    
    stage = 3;
    localStorage.setItem("stage", stage);
    localStorage.setItem("timeTableData", JSON.stringify(timeTableData));
    localStorage.setItem("studentData", JSON.stringify(studentData));
    timeTableFun();
    userImgBox.style.backgroundImage = `url(${localStorage.getItem("crImg") != null ? localStorage.getItem("crImg") : userImgBox.style.backgroundImage = `url(/assets/userProfile.svg)`})`;
})

// ========================== adding time table details to timeTableData script end ==========================


// ========================== hamburger script end ==========================

hamMenu.addEventListener("click", function(){
    menuBox.classList.remove("hide");
    menuBox.classList.remove("fadeOutHamMenu");
    menuBox.classList.add("fadeInHamMenu");
})


menuClose.addEventListener("click", function(){
    closeMenu(menuBox);
});


// ========================== add student button script  ==========================

let addStdCard = '';

addStudent.addEventListener("click", function(){
    addStdCard = `<div class="addStdCard">
                    <input type="text" class="addStdName nameChk" placeholder="Student Name">
                    <div class="stdIdSet">
                        <input type="number" class="stdQID qidChk" placeholder="QID">
                        <select class="stdSet">
                            ${setOptionFun("", "option")}
                        </select>
                    </div>
                    </div>`;

    closeMenu(menuBox);    
    addStdBox.classList.remove("hide");
    addStdBox.classList.add("fadeInHamMenu");
    stdInputBox.insertAdjacentHTML("beforeend", addStdCard);
    limitDigit(document.querySelectorAll(".qidChk")[0]);
});


// add student cancel button login
stdCancel.addEventListener("click", function(){
    closeMenu(addStdBox);
    addStdBox.classList.remove("fadeOutHamMenu");
    stdInputBox.innerHTML = "";
    y = 0;
});


addStdBtn.addEventListener("click", function(){
    y++;
    stdInputBox.insertAdjacentHTML("beforeend", addStdCard);
    limitDigit(document.querySelectorAll(".qidChk")[y]);
});

// ========================== add student button script end ==========================


// ========================== edit button script ==========================

let eventCount = true;
let oldName = "";
let editBtnIndex = null;

editBtn.addEventListener("click", function(){
    const editButtons = document.querySelectorAll(".edit");
    const absPreBtns = document.querySelectorAll(".absPrsntBtn");
    const stdNames = document.querySelectorAll(".stdName");
    const stQid = document.querySelectorAll(".qid");
    const editSet = document.getElementById("editSet");
    const delBtns = document.querySelectorAll(".del");
    const stdCard = document.querySelectorAll(".stdCard");

    document.getElementById("editCtrlBox").classList.add("fadeInHamMenu");
    
    editSet.insertAdjacentHTML("beforeend", setOptionFun("", "option"));
    const sets = document.querySelectorAll(".editSet .sets");
    let nm = "";
    document.getElementById("editCtrlBox").classList.remove("hide");

    for(let i = 0; i < editButtons.length; i++){
        editButtons[i].classList.remove("hide");
        delBtns[i].classList.remove("hide");
        absPreBtns[i].classList.add("hide");
        if(eventCount){
            // individual edit buttons event handler code
            editButtons[i].addEventListener("click", function(){
                editBtnIndex = null;
                editOverlay.classList.remove("hide");
                nm = stdNames[i].innerText;
                editBtnIndex = i;
                oldName = nm;
                document.getElementById("editName").value = nm;
                document.getElementById("editQid").value = Number(stQid[i].innerText.split(" ")[1]);
                for(let i = 0; i < sets.length; i++){
                    sets[i].removeAttribute("selected");
                    if(sets[i].value == studentData[nm]["set"]){
                        sets[i].setAttribute("selected", "selected");
                    }
                }
            })

            // delete button event handler code
            delBtns[i].addEventListener("click", function(){
                stdCard[i].classList.add("remove");
                delete studentData[stdNames[i].innerText];
                setTimeout(() => {
                    stdCard[i].remove();
                    const sl = document.querySelectorAll(".stdSl")
                    for(let i = 0; i < sl.length; i++){
                        sl[i].innerText = i+1;
                    }
                }, 500);
            })
        }
    }
    
    eventCount = false;
    closeMenu(menuBox);
})


editBoxCan.addEventListener("click", function(){
    editOverlay.classList.add("hide");
})


edtDone.addEventListener("click", function(){
    const editName = document.getElementById("editName");
    const editQid = document.getElementById("editQid");
    const editSet = document.getElementById("editSet");

    delete studentData[oldName];
    const nam = titleCase(editName.value.trim())
    
    studentData[nam] = {
                        "uid": editQid.value, 
                        "set": editSet.value
                        };
    
    document.querySelectorAll(".stdName")[editBtnIndex].innerText = nam;
    document.querySelectorAll(".qid")[editBtnIndex].innerText = "QID: " + editQid.value;
    document.querySelectorAll(".set")[editBtnIndex].innerText = "Set: " + editSet.value;
    
    editOverlay.classList.add("hide");
})


const editWindowClose = function(){
    const editButtons = document.querySelectorAll(".edit");
    const absPreBtns = document.querySelectorAll(".absPrsntBtn");
    const delBtns = document.querySelectorAll(".del");

    for(let i = 0; i < editButtons.length; i++){
        editButtons[i].classList.add("hide");
        delBtns[i].classList.add("hide");
        absPreBtns[i].classList.remove("hide");
    }

    localStorage.setItem("studentData", JSON.stringify(studentData));
    document.getElementById("editCtrlBox").classList.add("hide");
}

editDone.addEventListener("click", editWindowClose);


stdBtnDone.addEventListener("click", function(){
    const nameChks = document.querySelectorAll(".nameChk");
    const qidChks = document.querySelectorAll(".qidChk");
    const stdSet = document.querySelectorAll(".stdSet");
    let x = false;

    // this check input field is empty or not 
    // if empty it produce error message
    for(let i = 0; i < nameChks.length; i++){
        if(emptyField.test(nameChks[i].value) === false || emptyField.test(qidChks[i].value) === false){
            isFieldEmpty(nameChks[i]);
            isFieldEmpty(qidChks[i]);
            x = true;
        }
    }
    if(x == true){
        msg("Field can not be blank");
    }

    if(!x){
        setData(nameChks, qidChks, stdSet)
        addStdBox.classList.add("hide");
        attendSheet("All");
        stdInputBox.innerHTML = "";
        localStorage.setItem("studentData", JSON.stringify(studentData));
    }

})


selectSet.addEventListener("change", function(){
    eventCount = true; // this eventCount controlling the event handler that should not attached more then once
    studentAttend();
    attendSheet(selectSet.value)
})


let timeId;
let timeOutId;

reset.addEventListener("click", function(){
    resetOverlay.classList.remove("fadeOut");
    resetOverlay.classList.remove("hide");
    rstYes.setAttribute("disabled", "");
    setTimeout(() => {
        resetOverlay.classList.add("fadeIn");
    }, 10);

    let t = 15;
    timeId = setInterval(() => {
        rstYes.innerText = `${t}s`;
        t--;
    }, 1000);

    timeOutId = setTimeout(() => {
        clearInterval(timeId);
        timeId = null;
        rstYes.removeAttribute("disabled");
        rstYes.classList.remove("dis");
        rstYes.innerText = "Yes";
    }, 15000);

})


rstNo.addEventListener("click", function(){
    closeMenu(menuBox);
    resetOverlay.classList.remove("fadeIn");
    resetOverlay.classList.add("fadeOut");
    setTimeout(() => {
        resetOverlay.classList.add("hide");
    }, 500);
    clearInterval(timeId);
    timeId = null;
    clearTimeout(timeOutId);
})


rstYes.addEventListener("click", function(){
    localStorage.clear();
    window.location.reload();
})


// this function first create the page for pdf with student detail including present and absent
// then invoke print dialog box of browser
const createPDF = function(att){
    document.getElementById("pdfCr").innerText = loginInfo["cr"];
    document.getElementById("pdfCor").innerText = loginInfo["branch"];
    document.getElementById("pdfSec").innerText = loginInfo["sec"];
    document.getElementById("pdfS").innerText = loginInfo["sem"];
    document.getElementById("techName").innerText = teachersList[subjectsList.indexOf(selectSub.value)];
    document.getElementById("pdfSub").innerText = selectSub.value;
    document.getElementById("pdfDate").innerText = todayDate[1];
    document.getElementById("period").innerText = assignPeriodToPdf();

    const student = document.querySelectorAll(".stdCard");
    const names = document.querySelectorAll(".stdName");
    const stdAttendBox = document.getElementById("stdAttendBox");
    stdAttendBox.innerHTML = "";

    
    let x = 1;
    let card;
    for(let i = 0; i < names.length; i++){
        
        if(student[i].classList[1] == att){
            card = `<div class="stdAtCard">
                        <p class="AtInfo atSl">${x}</p>
                        <p class="AtInfo attendance ${student[i].classList[1] == "Present" ? "pre" : "abs"}">${student[i].classList[1]}</p>
                        <p class="AtInfo pdfName">${names[i].innerText}</p>
                        <p class="AtInfo pqid">${studentData[names[i].innerText]["uid"]}</p>
                        <p class="AtInfo pset">${studentData[names[i].innerText]["set"]}</p>
                    </div>`;
            stdAttendBox.insertAdjacentHTML("beforeend", card);
            x++;
        }
        else if(att == 'all'){
            card = `<div class="stdAtCard">
                        <p class="AtInfo atSl">${x}</p>
                        <p class="AtInfo attendance ${student[i].classList[1] == "Present" ? "pre" : "abs"}">${student[i].classList[1]}</p>
                        <p class="AtInfo pdfName">${names[i].innerText}</p>
                        <p class="AtInfo pqid">${studentData[names[i].innerText]["uid"]}</p>
                        <p class="AtInfo pset">${studentData[names[i].innerText]["set"]}</p>
                    </div>`;
            stdAttendBox.insertAdjacentHTML("beforeend", card);
            x++;
        }   
    }

    document.title = `${selectSub.value.replaceAll(" ", "")}${todayDate[1]}`;
    window.print();
}


const lecturePeriod = function(){
    let hrs = date.getHours();

    if(hrs >= 1 && hrs <= 6){
        hrs += 12;
    }

    const lecTime = Number.parseFloat(hrs + "." + (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()));
    
    if(lecTime > 9.00 && lecTime <= 9.55){
        return "9.55";
    }
    else if(lecTime > 9.55 && lecTime <= 10.50){
        return "10.50";
    }
    else if(lecTime > 10.50 && lecTime <= 11.45){
        return "11.45";
    }
    else if(lecTime > 11.45 && lecTime <= 12.40){
        return "12.40";
    }
    else if(lecTime > 12.40 && lecTime <= 13.35){
        return "1.35";
    }
    else if(lecTime > 13.35 && lecTime <= 14.30){
        return "2.30";
    }
    else if(lecTime > 14.30 && lecTime <= 15.25){
        return "3.25";
    }
    else if(lecTime > 15.25 && lecTime <= 16.20){
        return "4.20";
    }
    else{
        return "00.00"
    }
}


// this function check day and time.
// and according to the time table, it assign the set and subject automatically to the footer controller
const assignSetAndSub = function(){
    const tm = lecturePeriod();
    // const tm = "10.50";
    let st;

    // this if condition lecture hours, if it is not the lecture hours then it return undefined
    // therefore we move to else condition and assign the set to "All"
    if(timeTableData[todayDate[0]][tm] != undefined){  
        selectSet.value = timeTableData[todayDate[0]][tm]["set"];
        st = timeTableData[todayDate[0]][tm]["set"];
        selectSub.value = timeTableData[todayDate[0]][tm]["sub"];
    }
    else{
        st = "All";
    }

    return st;  // returning set letter 
}


const assignPeriodToPdf = function(){
    const time = lecturePeriod();

    if(time == "9.55"){
        return "09:00 - 09:55";
    }
    else if(time == "10.50"){
        return "09:55 - 10:50";
    }
    else if(time == "11.45"){
        return "10:50 - 11:45";
    }
    else if(time == "12.40"){
        return "11:45 - 12:40";
    }
    else if(time == "1.35"){
        return "12:40 - 1:35";
    }
    else if(time == "2.30"){
        return "1:35 - 2:30";
    }
    else if(time == "3.25"){
        return "2:30 - 3:25";
    }
    else if(time == "4.30"){
        return "3:25 - 4:30";
    }
    else{
        return "00:00";
    }
}


const openProBox = function(){
    profileBox.classList.remove("hide");
    profileBox.classList.remove("fadeOutHamMenu");
    profileBox.classList.add("fadeInHamMenu");
}

proClose.addEventListener("click", function(){
    studentBox.classList.remove('hide');
    closeMenu(profileBox);
    hideEl(subTeachBox);
    hideEl(loginBox);
})

let editLoc = null;

const crn = document.getElementById("crn");
const crs = document.getElementById("crs");
const logSec = document.getElementById("logSec");
const logSem = document.getElementById("logSem");

profile.addEventListener("click", function(){
    profileBox.style.position = 'absolute';
    pro.innerText = "Profile";
    document.getElementById("loginBox").classList.remove("hide");
    editLoc = "profile";
    closeMenu(menuBox);
    studentBox.classList.add('hide');
    
    edSets.value = classSet;
    crn.value = loginInfo["cr"];
    crs.value = loginInfo["branch"];
    logSec.value = loginInfo["sec"];
    logSem.value = loginInfo["sem"];

    openProBox();
})



// this function take an html element and delete from source code after 500ms with sliding transition
const deleteElement = function(el){
    setTimeout(() => {
        el.remove();
        const subSl = document.querySelectorAll(".subSl");
        for(let i = 0; i < subSl.length; i++){
            subSl[i].innerText = i+1 < 10 ? "0"+ (i+1) : i+1 ;
        }
    }, 500);
}


const subTeachDelEvent = function(){
    const editDel = document.querySelectorAll(".editDel");
    const sbCard = document.querySelectorAll(".subTeachCard");
    const editHr = document.querySelectorAll(".editHr");
    
    // this for loop,  add event handler to the delete button of teacher and subject cards
    // when delete button is clicked than card will be deleted
    for(let i = 0; i < editDel.length; i++){
        editDel[i].addEventListener("click", function(){
            sbCard[i].classList.add("remove");
            editHr[i].classList.add("remove");

            deleteElement(sbCard[i]);
            deleteElement(editHr[i]);
        })
    }
}


editSubTech.addEventListener("click", function(){
    closeMenu(menuBox);
    editLoc = "editSub"
    profileBox.style.position = 'fixed';
    pro.innerText = "Edit Subjects";
    subEditBox.innerHTML = "";
    for(let i = 1; i < subjectsList.length; i++){
        let card = `
                    <div class="subTeachCard">
                        <div class="editsl">
                            <p class="subSl">${i < 10 ? "0"+(i) : i}</p>
                            <img src="assets/del2.svg" class="editDel del">
                        </div>
                        <div class="subTe">
                            <input type="text" class="sub" placeholder="Subject Name" value="${subjectsList[i]}">
                            <input type="text" class="teach" placeholder="Teacher's Name" value="${teachersList[i]}">
                        </div>
                    </div>
                    <hr class="editHr hr">`;

        subEditBox.insertAdjacentHTML("beforeend", card);
    }
    subTeachDelEvent();
    subTeachBox.classList.remove("hide");
    openProBox();
})


EditaddSub.addEventListener("click", function(){
    let Subcount = document.querySelectorAll(".subSl").length + 1;
    const card = `
                    <div class="subTeachCard">
                        <div class="editsl">
                            <p class="subSl">${Subcount < 10 ? "0"+Subcount : Subcount}</p>
                            <img src="assets/del2.svg" class="editDel del">
                        </div>
                        <div class="subTe">
                        <input type="text" class="teach" placeholder="Teacher's Name">
                            <input type="text" class="sub" placeholder="Subject Name">
                        </div>
                    </div>
                    <hr class="editHr hr">`;

    subEditBox.insertAdjacentHTML("beforeend", card);  
    subTeachDelEvent();
})


// editing time table code

editTimeTable.addEventListener("click", function(){
    divHeight = Number(localStorage.getItem("divHeight"));
    document.documentElement.style.setProperty('--divHeight', `${divHeight}px`);
    closeMenu(menuBox);
    timeTableSec.classList.remove("fadeOut");
    header.classList.remove("hide");
    hideShowSection(attendanceSec, timeTableSec);

     // removing hard coded html of subjects and set from monday section
     for(let i = 0; i < subSetBoxs.length; i++){
        subSetBoxs[i].innerHTML = "";
    }
    
    // adding subjects and set in time table show that option should show subjects and sets
    for(let i = 0; i < subSetBoxs.length; i++){
        subSetBoxs[i].insertAdjacentHTML("beforeend", subOptionFun());
        subSetBoxs[i].insertAdjacentHTML("beforeend", setOptionFun("yes", ""));
    }

    // filling existing time table data to editing time table page
    let days = [...Object.keys(timeTableData)];
    days.pop();
    const times = Object.keys(timeTableData["Monday"]);

    const subList = document.querySelectorAll(".subList");
    const setLt = document.querySelectorAll(".setList");

    let i = 0;
    // assiging data to each field
    days.forEach(el => {
        times.forEach(time => {
            subList[i].value = `${timeTableData[el][time]["sub"]}`;
            setLt[i].value = timeTableData[el][time]["set"];
            i++;
        });
    });
})


proDone.addEventListener("click", function(){
    if(editLoc == "profile"){
        loginInfo["cr"] = titleCase(crn.value).trim();
        loginInfo["branch"] = crs.value.toUpperCase().trim();
        loginInfo["sec"] = logSec.value.toUpperCase().trim();
        loginInfo["sem"] = logSem.value.trim();
        classSet = Number(edSets.value)        

        cr.innerText = `${titleCase(crn.value)}`;
        course.innerText = crs.value.toUpperCase();
        headSec.innerText = `Sec: ${logSec.value.toUpperCase()}`;

        localStorage.setItem("classSet", classSet);
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        hideEl(loginBox);

        editLoc = null;
        studentBox.classList.remove('hide');
        closeMenu(profileBox);
    }
    else if(editLoc == "editSub"){
        const sub = document.querySelectorAll(".sub");
        const teach = document.querySelectorAll(".teach");

        let x = false;
        for(let i = 0; i < sub.length; i++){
            if(emptyField.test(sub[i].value) === false || emptyField.test(teach[i].value) === false){
                isFieldEmpty(sub[i]);
                isFieldEmpty(teach[i]);
                x = true;
            }
        }
        if(x == true){
            msg("Field can not be blank");
        }
        else{
            subjectsList = ["No Lecture"];
            teachersList = ["No Lecture"];
            
            for(let i = 0; i < sub.length; i++){
                subjectsList[i+1] = titleCase(sub[i].value).trim();
                teachersList[i+1] = titleCase(teach[i].value).trim();
            }

            localStorage.setItem("subjectsList", JSON.stringify(subjectsList));
            localStorage.setItem("teachersList", JSON.stringify(teachersList));
            window.location.reload();

            editLoc = null;
            closeMenu(profileBox);
        }
    }
})



if(stage === 1){
    loginPageSec.classList.add("hide");
    subjectDetailSec.classList.remove("hide");
    loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

    divHeight = dayCardsBoxs[0].offsetHeight;
    localStorage.setItem("divHeight", divHeight);
}
else if(stage === 2){
    loginPageSec.classList.add("hide");
    subjectDetailSec.classList.add("hide");
    timeTableSec.classList.remove("hide");
    classSet = parseInt(localStorage.getItem("classSet"));
    teachersList = JSON.parse(localStorage.getItem("teachersList"));
    subjectsList = JSON.parse(localStorage.getItem("subjectsList"));
    subTeacher();
    dayCardsBoxs[0].classList.remove("collapse");
    dayCardsBoxs[0].classList.add("expand");
}
else if(stage === 3){
    timeTableData = JSON.parse(localStorage.getItem("timeTableData"));
    subjectsList = JSON.parse(localStorage.getItem("subjectsList"));
    teachersList = JSON.parse(localStorage.getItem("teachersList"));
    timeTableFun();
    studentData = JSON.parse(localStorage.getItem("studentData"));
    if(Object.keys(studentData).length != 0){
        attendSheet(assignSetAndSub());
    }
    assignSetAndSub();  // automatically assigning set and subjects to footer controller where generate PDF button is.
    userImgBox.style.backgroundImage = `url(${localStorage.getItem("crImg") != null ? localStorage.getItem("crImg") : userImgBox.style.backgroundImage = `url(/assets/userProfile.svg)`})`;
}



const showPdfOption = function(){
    pdfGenOption.classList.remove("optHide");
    pdfGenOption.classList.add("optShow");
};

const hidePdfOption = function(){
    pdfGenOption.classList.remove('optShow');
    pdfGenOption.classList.add('optHide');
}

genPDF.addEventListener("click", showPdfOption);


pdfOptClose.addEventListener('click', hidePdfOption);

const allStudent = document.getElementById('allStudent');
const onlyPresent = document.getElementById('onlyPresent');
const onlyAbsent = document.getElementById('onlyAbsent');

onlyAbsent.addEventListener('click', function(){
    hidePdfOption();
    createPDF('Absent');
});

onlyPresent.addEventListener('click', function(){
    hidePdfOption();
    createPDF('Present');
});

allStudent.addEventListener('click', function(){
    hidePdfOption();
    createPDF('all');
});




window.addEventListener("beforeprint", function(){
    document.getElementById("pdfBox").classList.remove("hide");
    document.getElementById("attendanceSec").classList.add("hide");
})

window.addEventListener("afterprint", function(){
    document.getElementById("pdfBox").classList.add("hide");
    document.getElementById("attendanceSec").classList.remove("hide");
})

imgFile.addEventListener("change", function(){
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);

    reader.addEventListener("load", function(){
        userImgBox.style.backgroundImage = `url(${reader.result})`;
        localStorage.setItem("crImg", reader.result);
    })
})

document.getElementById("delPP").addEventListener("click", function(){
    localStorage.removeItem("crImg");
    userImgBox.style.backgroundImage = `url(/assets/userProfile.svg)`;
    studentBox.classList.remove('hide');
    closeMenu(profileBox);
    msg("Profile Image deleted Successfully.");
})


const studentAttend = function(){   // this function set the present or absent to the student and set the data to studentData object
    const stdCard = document.querySelectorAll(".stdCard");
    const stdName = document.querySelectorAll(".stdName");
    
    for(let i = 0; i < stdCard.length; i++){
        studentData[stdName[i].innerText]["attend"] = stdCard[i].classList.contains("Present") == true ? "Present" : "Absent";
    }
}

document.getElementById("prsntAll").addEventListener("click", function(){   // this function mark present to all student. if any specific set is selected then it will mark present to all for that set, not for all the student
    const stdCard = document.querySelectorAll(".stdCard");
    stdCard.forEach(el => {
        el.classList.remove("Absent");
        el.classList.add("Present");
    })
    studentAttend();
    localStorage.setItem("studentData", JSON.stringify(studentData));
})


document.getElementById("studentBox").addEventListener("click", function(e){
    if(e.target.classList.contains("absPrsntBtn") || e.target.classList.contains("insideBtn")){
        studentAttend();
        localStorage.setItem("studentData", JSON.stringify(studentData));
    }
})




