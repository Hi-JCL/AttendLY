"use strict";let stage=0;null!=localStorage.getItem("stage")&&(stage=parseInt(localStorage.getItem("stage")));const emptyField=/([^\s])/,body=document.getElementById("body"),loginNxtBtn=document.getElementById("loginNxtBtn"),loginInput=document.querySelectorAll(".loginInput"),crName=document.getElementById("crName"),CourseBranch=document.getElementById("CourseBranch"),courseSem=document.getElementById("courseSem"),branchSec=document.getElementById("branchSec"),loginPageSec=document.getElementById("loginPageSec"),subjectDetailSec=document.getElementById("subjectDetailSec"),cr=document.getElementById("cr"),course=document.getElementById("course"),headSec=document.getElementById("headSec"),addSubNext=document.getElementById("addSubNext"),subBox=document.getElementById("subBox"),nextBtn=document.getElementById("nextBtn"),timeTableSec=document.getElementById("timeTableSec"),dayCardsBoxs=document.querySelectorAll(".dayCardsBox"),downArrow=document.querySelectorAll(".downArrow"),subSetBoxs=document.querySelectorAll(".subSetBox"),dayBtn=document.querySelectorAll(".dayBtn"),done=document.getElementById("done"),attendanceSec=document.getElementById("attendanceSec"),header=document.getElementById("header"),selectSet=document.getElementById("selectSet"),selectSub=document.getElementById("selectSub"),dayDate=document.getElementById("dayDate"),hamMenu=document.getElementById("hamMenu"),menuBox=document.getElementById("menuBox"),menuClose=document.getElementById("menuClose"),addStudent=document.getElementById("addStudent"),addStdBox=document.getElementById("addStdBox"),stdCancel=document.getElementById("stdCancel"),addStdBtn=document.getElementById("addStdBtn"),stdInputBox=document.getElementById("stdInputBox"),stdBtnDone=document.getElementById("stdBtnDone"),footer=document.getElementById("footer"),reset=document.getElementById("reset"),resetOverlay=document.getElementById("resetOverlay"),rstNo=document.getElementById("rstNo"),rstYes=document.getElementById("rstYes"),editBtn=document.getElementById("editBtn"),editDone=document.getElementById("editDone"),editBoxCan=document.getElementById("editBoxCan"),editOverlay=document.getElementById("editOverlay"),edtDone=document.getElementById("edtDone"),proClose=document.getElementById("proClose"),profileBox=document.getElementById("profileBox"),profile=document.getElementById("profile"),proDone=document.getElementById("proDone"),editSubTech=document.getElementById("editSubTech"),subTeachBox=document.getElementById("subTeachBox"),subEditBox=document.getElementById("subEditBox"),pro=document.getElementById("pro"),EditaddSub=document.getElementById("EditaddSub"),editTimeTable=document.getElementById("editTimeTable"),edSets=document.getElementById("edSets"),imgFile=document.getElementById("imgFile"),userImgBox=document.getElementById("userImgBox"),genPDF=document.getElementById("genPDF");let timeTableData={Monday:{"9.55":{sub:"",set:""},"10.50":{sub:"",set:""},"11.45":{sub:"",set:""},"12.40":{sub:"",set:""},"1.35":{sub:"",set:""},"2.30":{sub:"",set:""},"3.25":{sub:"",set:""},"4.20":{sub:"",set:""}},Tuesday:{"9.55":{sub:"",set:""},"10.50":{sub:"",set:""},"11.45":{sub:"",set:""},"12.40":{sub:"",set:""},"1.35":{sub:"",set:""},"2.30":{sub:"",set:""},"3.25":{sub:"",set:""},"4.20":{sub:"",set:""}},Wednesday:{"9.55":{sub:"",set:""},"10.50":{sub:"",set:""},"11.45":{sub:"",set:""},"12.40":{sub:"",set:""},"1.35":{sub:"",set:""},"2.30":{sub:"",set:""},"3.25":{sub:"",set:""},"4.20":{sub:"",set:""}},Thursday:{"9.55":{sub:"",set:""},"10.50":{sub:"",set:""},"11.45":{sub:"",set:""},"12.40":{sub:"",set:""},"1.35":{sub:"",set:""},"2.30":{sub:"",set:""},"3.25":{sub:"",set:""},"4.20":{sub:"",set:""}},Friday:{"9.55":{sub:"",set:""},"10.50":{sub:"",set:""},"11.45":{sub:"",set:""},"12.40":{sub:"",set:""},"1.35":{sub:"",set:""},"2.30":{sub:"",set:""},"3.25":{sub:"",set:""},"4.20":{sub:"",set:""}},Saturday:{"9.55":{sub:"",set:""},"10.50":{sub:"",set:""},"11.45":{sub:"",set:""},"12.40":{sub:"",set:""},"1.35":{sub:"",set:""},"2.30":{sub:"",set:""},"3.25":{sub:"",set:""},"4.20":{sub:"",set:""}},Sunday:0},studentData={};const day={1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",0:"Sunday"},date=new Date,todayDate=[day[date.getDay()],`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`];dayDate.innerHTML=`${todayDate[0]} &nbsp; &nbsp; ${todayDate[1]}`;let y=0,classSet,divHeight,loginInfo={cr:"",branch:"",sem:"",sec:""},subjectsList=["No Lecture"],teachersList=["No Lecture"];const classSetList=[],msg=function(e){setTimeout(()=>{alert(e)},10)},errorMark=function(e){e.classList.add("error")},closeMenu=function(e){e.classList.remove("fadeInHamMenu"),e.classList.add("fadeOutHamMenu"),setTimeout(()=>{e.classList.add("hide")},500)},hideShowSection=function(e,t){e.classList.add("fadeOut"),t.classList.remove("hide"),t.classList.add("fadeIn"),setTimeout(()=>{e.classList.add("hide")},1e3)},hideEl=function(e){setTimeout(()=>{e.classList.add("hide")},500)},titleCase=function(e){e=e.toLowerCase().split(" ");for(let t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")},isFieldEmpty=function(e){!1===emptyField.test(e.value)&&(errorMark(e),e.addEventListener("focus",function(){e.classList.remove("error")}),e.value="")},setData=function(e,t,s){for(let n=0;n<e.length;n++)studentData[titleCase(e[n].value).trim()]={uid:t[n].value,set:s[n].value.replace("Set ",""),attend:"Present"}},limitDigit=function(e){e.addEventListener("keydown",function(t){e.value.length<=8&&/^[0-9]$/.test(e.value)?(t.preventDefault(),e.value+=t.key):["0","1","2","3","4","5","6","7","8","9"].includes(t.key)&&e.value.length>7&&t.preventDefault()})},attendSheet=function(e){let t=document.getElementById("studentBox");t.classList.remove("msgCenter"),t.innerHTML="";let s=1,n=Object.keys(studentData).sort();for(let l=0;l<n.length;l++){let d=`<div class="stdCard ${studentData[n[l]].attend}">
                                <p class="stdSl">${s}</p><div class="stdDetail"><div class="nameSet"><p class="stdName">${n[l]}</p><div class="idSet"><p class="qid">QID: ${studentData[n[l]].uid}</p>
                                            <p class="set">Set: ${studentData[n[l]].set}</p></div></div></div>
                                <div class="absPrsntBtn">
                                    <div class="insideBtn">&nbsp;</div>
                                </div>
                                <img src="assets/edit.svg" class="edit hide">
                                <img src="assets/del2.svg" class="del hide">
                            </div>`;"All"==e?(s++,t.insertAdjacentHTML("beforeend",d)):e==studentData[n[l]].set&&(s++,t.insertAdjacentHTML("beforeend",d))}let a=document.querySelectorAll(".absPrsntBtn"),r=document.querySelectorAll(".stdCard");for(let o=0;o<a.length;o++)a[o].addEventListener("click",function(){r[o].classList.toggle("Absent"),r[o].classList.toggle("Present")})};loginNxtBtn.addEventListener("click",function(){if(!1===emptyField.test(crName.value)||!1===emptyField.test(CourseBranch.value)||!1===emptyField.test(courseSem.value)||!1===emptyField.test(branchSec.value)){for(let e=0;e<loginInput.length;e++)isFieldEmpty(loginInput[e]);msg("Field can not be blank")}else loginInfo.cr=titleCase(crName.value),loginInfo.branch=CourseBranch.value.toUpperCase(),loginInfo.sem=courseSem.value,loginInfo.sec=branchSec.value.toUpperCase(),hideShowSection(loginPageSec,subjectDetailSec),stage++,localStorage.setItem("stage",stage),localStorage.setItem("loginInfo",JSON.stringify(loginInfo));window.scrollTo(0,0)});const subjectCard=function(){return`<div class="subCard slBox fadeIn">
                        <div class="subDetail">
                            <input type="text" class="teacherName input" placeholder="Teacher's Name">
                            <input type="text" class="subject input" placeholder="Subject Name">
                        </div>
                    </div>`};addSubNext.addEventListener("click",function(){subBox.insertAdjacentHTML("beforeend",subjectCard())});const setOptionFun=function(e,t){classSet=parseInt(localStorage.getItem("classSet"));let s="";for(let n=0;n<classSet;n++){let l=String.fromCharCode(65+n);s+=`<option value="${l}" class="sets">Set ${l}</option>`}let d=`
            <select class="setList">
                ${"yes"==e?'<option value="All" selected class="sets">All</option>':""}
                ${s}
            </select>
    `;return"option"==t?s:d},subOptionFun=function(e){let t="";for(let s=0;s<subjectsList.length;s++)t+=`<option value="${subjectsList[s]}" class="subs">${subjectsList[s]}</option>`;let n=`<select class="subList">
                    ${t}
                </select>`;return n},subTeacher=function(){window.scrollTo(0,0),divHeight=localStorage.getItem("divHeight"),setTimeout(()=>{document.documentElement.style.setProperty("--divHeight",`${divHeight}px`);for(let e=0;e<subSetBoxs.length;e++)subSetBoxs[e].innerHTML="";for(let t=0;t<subSetBoxs.length;t++)subSetBoxs[t].insertAdjacentHTML("beforeend",subOptionFun()),subSetBoxs[t].insertAdjacentHTML("beforeend",setOptionFun("yes",""))},1e3),classSet=document.getElementById("classSet").value,stage=2};nextBtn.addEventListener("click",function(){let e=document.querySelectorAll(".subject"),t=document.querySelectorAll(".teacherName");for(let s=0;s<e.length;s++)subjectsList.push(titleCase(e[s].value).trim()),teachersList.push(titleCase(t[s].value).trim());hideShowSection(subjectDetailSec,timeTableSec),setTimeout(()=>{divHeight=dayCardsBoxs[0].offsetHeight,localStorage.setItem("divHeight",divHeight)},500),subTeacher(),localStorage.setItem("stage",stage),localStorage.setItem("classSet",classSet),localStorage.setItem("subjectsList",JSON.stringify(subjectsList)),localStorage.setItem("teachersList",JSON.stringify(teachersList))});for(let i=0;i<dayCardsBoxs.length;i++)dayBtn[i].addEventListener("click",function(){dayCardsBoxs[i].classList.toggle("collapse"),dayCardsBoxs[i].classList.toggle("expand"),downArrow[i].classList.toggle("openTab")});const timeTableFun=function(){header.classList.add("hide"),loginPageSec.classList.add("hide"),hideShowSection(timeTableSec,attendanceSec),setTimeout(()=>{attendanceSec.classList.remove("fadeIn"),footer.classList.add("fadeIn")},1e3),selectSet.insertAdjacentHTML("beforeend",setOptionFun("yes","")),selectSub.insertAdjacentHTML("beforeend",subOptionFun("")),loginInfo=JSON.parse(localStorage.getItem("loginInfo")),cr.innerText=`${loginInfo.cr}`,course.innerText=loginInfo.branch,headSec.innerText=`Sec: ${loginInfo.sec}`};done.addEventListener("click",function(){let e=document.querySelectorAll(".subList"),t=document.querySelectorAll(".setList");document.getElementById("attendanceSec").classList.remove("fadeOut");let s=0;for(let n in timeTableData)for(let l in timeTableData[n])timeTableData[n][l].sub=e[s].value,timeTableData[n][l].set=t[s].value,s++;stage=3,localStorage.setItem("stage",stage),localStorage.setItem("timeTableData",JSON.stringify(timeTableData)),localStorage.setItem("studentData",JSON.stringify(studentData)),timeTableFun(),userImgBox.style.backgroundImage=`url(${null!=localStorage.getItem("crImg")?localStorage.getItem("crImg"):userImgBox.style.backgroundImage="url(/assets/userProfile.svg)"})`}),hamMenu.addEventListener("click",function(){menuBox.classList.remove("hide"),menuBox.classList.remove("fadeOutHamMenu"),menuBox.classList.add("fadeInHamMenu")}),menuClose.addEventListener("click",function(){closeMenu(menuBox)});let addStdCard="";addStudent.addEventListener("click",function(){addStdCard=`<div class="addStdCard">
                    <input type="text" class="addStdName nameChk" placeholder="Student Name">
                    <div class="stdIdSet">
                        <input type="number" class="stdQID qidChk" placeholder="QID">
                        <select class="stdSet">
                            ${setOptionFun("","option")}
                        </select>
                    </div>
                    </div>`,closeMenu(menuBox),addStdBox.classList.remove("hide"),addStdBox.classList.add("fadeInHamMenu"),stdInputBox.insertAdjacentHTML("beforeend",addStdCard),limitDigit(document.querySelectorAll(".qidChk")[0])}),stdCancel.addEventListener("click",function(){closeMenu(addStdBox),addStdBox.classList.remove("fadeOutHamMenu"),stdInputBox.innerHTML="",y=0}),addStdBtn.addEventListener("click",function(){y++,stdInputBox.insertAdjacentHTML("beforeend",addStdCard),limitDigit(document.querySelectorAll(".qidChk")[y])});let eventCount=!0,oldName="",editBtnIndex=null;editBtn.addEventListener("click",function(){let e=document.querySelectorAll(".edit"),t=document.querySelectorAll(".absPrsntBtn"),s=document.querySelectorAll(".stdName"),n=document.querySelectorAll(".qid"),l=document.getElementById("editSet"),d=document.querySelectorAll(".del"),a=document.querySelectorAll(".stdCard");document.getElementById("editCtrlBox").classList.add("fadeInHamMenu"),l.insertAdjacentHTML("beforeend",setOptionFun("","option"));let r=document.querySelectorAll(".editSet .sets"),o="";document.getElementById("editCtrlBox").classList.remove("hide");for(let c=0;c<e.length;c++)e[c].classList.remove("hide"),d[c].classList.remove("hide"),t[c].classList.add("hide"),eventCount&&(e[c].addEventListener("click",function(){editBtnIndex=null,editOverlay.classList.remove("hide"),o=s[c].innerText,editBtnIndex=c,oldName=o,document.getElementById("editName").value=o,document.getElementById("editQid").value=Number(n[c].innerText.split(" ")[1]);for(let e=0;e<r.length;e++)r[e].removeAttribute("selected"),r[e].value==studentData[o].set&&r[e].setAttribute("selected","selected")}),d[c].addEventListener("click",function(){a[c].classList.add("remove"),delete studentData[s[c].innerText],setTimeout(()=>{a[c].remove();let e=document.querySelectorAll(".stdSl");for(let t=0;t<e.length;t++)e[t].innerText=t+1},500)}));eventCount=!1,closeMenu(menuBox)}),editBoxCan.addEventListener("click",function(){editOverlay.classList.add("hide")}),edtDone.addEventListener("click",function(){let e=document.getElementById("editName"),t=document.getElementById("editQid"),s=document.getElementById("editSet");delete studentData[oldName];let n=titleCase(e.value.trim());studentData[n]={uid:t.value,set:s.value},document.querySelectorAll(".stdName")[editBtnIndex].innerText=n,document.querySelectorAll(".qid")[editBtnIndex].innerText="QID: "+t.value,document.querySelectorAll(".set")[editBtnIndex].innerText="Set: "+s.value,editOverlay.classList.add("hide")});const editWindowClose=function(){let e=document.querySelectorAll(".edit"),t=document.querySelectorAll(".absPrsntBtn"),s=document.querySelectorAll(".del");for(let n=0;n<e.length;n++)e[n].classList.add("hide"),s[n].classList.add("hide"),t[n].classList.remove("hide");localStorage.setItem("studentData",JSON.stringify(studentData)),document.getElementById("editCtrlBox").classList.add("hide")};editDone.addEventListener("click",editWindowClose),stdBtnDone.addEventListener("click",function(){let e=document.querySelectorAll(".nameChk"),t=document.querySelectorAll(".qidChk"),s=document.querySelectorAll(".stdSet"),n=!1;for(let l=0;l<e.length;l++)(!1===emptyField.test(e[l].value)||!1===emptyField.test(t[l].value))&&(isFieldEmpty(e[l]),isFieldEmpty(t[l]),n=!0);!0==n&&msg("Field can not be blank"),n||(setData(e,t,s),addStdBox.classList.add("hide"),attendSheet("All"),stdInputBox.innerHTML="",localStorage.setItem("studentData",JSON.stringify(studentData)))}),selectSet.addEventListener("change",function(){eventCount=!0,studentAttend(),attendSheet(selectSet.value)});let timeId,timeOutId;reset.addEventListener("click",function(){resetOverlay.classList.remove("fadeOut"),resetOverlay.classList.remove("hide"),rstYes.setAttribute("disabled",""),setTimeout(()=>{resetOverlay.classList.add("fadeIn")},10);let e=15;timeId=setInterval(()=>{rstYes.innerText=`${e}s`,e--},1e3),timeOutId=setTimeout(()=>{clearInterval(timeId),timeId=null,rstYes.removeAttribute("disabled"),rstYes.classList.remove("dis"),rstYes.innerText="Yes"},15e3)}),rstNo.addEventListener("click",function(){closeMenu(menuBox),resetOverlay.classList.remove("fadeIn"),resetOverlay.classList.add("fadeOut"),setTimeout(()=>{resetOverlay.classList.add("hide")},500),clearInterval(timeId),timeId=null,clearTimeout(timeOutId)}),rstYes.addEventListener("click",function(){localStorage.clear(),window.location.reload()});const createPDF=function(){document.getElementById("pdfCr").innerText=loginInfo.cr,document.getElementById("pdfCor").innerText=loginInfo.branch,document.getElementById("pdfSec").innerText=loginInfo.sec,document.getElementById("pdfS").innerText=loginInfo.sem,document.getElementById("techName").innerText=teachersList[subjectsList.indexOf(selectSub.value)],document.getElementById("pdfSub").innerText=selectSub.value,document.getElementById("pdfDate").innerText=todayDate[1],document.getElementById("period").innerText=assignPeriodToPdf();let e=document.querySelectorAll(".stdCard"),t=document.querySelectorAll(".stdName"),s=document.getElementById("stdAttendBox");s.innerHTML="";let n=1;for(let l=0;l<t.length;l++){let d=`<div class="stdAtCard">
                        <p class="AtInfo atSl">${n}</p>
                        <p class="AtInfo attendance ${"Present"==e[l].classList[1]?"pre":"abs"}">${e[l].classList[1]}</p>
                        <p class="AtInfo pdfName">${t[l].innerText}</p>
                        <p class="AtInfo pqid">${studentData[t[l].innerText].uid}</p>
                        <p class="AtInfo pset">${studentData[t[l].innerText].set}</p>
                    </div>`;s.insertAdjacentHTML("beforeend",d),n++}document.title=`${selectSub.value.replaceAll(" ","")}${todayDate[1]}`,window.print()},lecturePeriod=function(){let e=date.getHours();e>=1&&e<=6&&(e+=12);let t=Number.parseFloat(e+"."+(10>date.getMinutes()?`0${date.getMinutes()}`:date.getMinutes()));if(t>9&&t<=9.55)return"9.55";if(t>9.55&&t<=10.5)return"10.50";if(t>10.5&&t<=11.45)return"11.45";if(t>11.45&&t<=12.4)return"12.40";if(t>12.4&&t<=13.35)return"1.35";else if(t>13.35&&t<=14.3)return"2.30";else if(t>14.3&&t<=15.25)return"3.25";else if(t>15.25&&t<=16.2)return"4.20";else return"00.00"},assignSetAndSub=function(){let e=lecturePeriod(),t;return void 0!=timeTableData[todayDate[0]][e]?(selectSet.value=timeTableData[todayDate[0]][e].set,t=timeTableData[todayDate[0]][e].set,selectSub.value=timeTableData[todayDate[0]][e].sub):t="All",t},assignPeriodToPdf=function(){let e=lecturePeriod();if("9.55"==e)return"09:00 - 09:55";if("10.50"==e)return"09:55 - 10:50";if("11.45"==e)return"10:50 - 11:45";if("12.40"==e)return"11:45 - 12:40";if("1.35"==e)return"12:40 - 1:35";else if("2.30"==e)return"1:35 - 2:30";else if("3.25"==e)return"2:30 - 3:25";else if("4.30"==e)return"3:25 - 4:30";else return"00:00"},openProBox=function(){profileBox.classList.remove("hide"),profileBox.classList.remove("fadeOutHamMenu"),profileBox.classList.add("fadeInHamMenu")};proClose.addEventListener("click",function(){closeMenu(profileBox),hideEl(subTeachBox),hideEl(loginBox)});let editLoc=null;const crn=document.getElementById("crn"),crs=document.getElementById("crs"),logSec=document.getElementById("logSec"),logSem=document.getElementById("logSem");profile.addEventListener("click",function(){pro.innerText="Profile",document.getElementById("loginBox").classList.remove("hide"),editLoc="profile",closeMenu(menuBox),edSets.value=classSet,crn.value=loginInfo.cr,crs.value=loginInfo.branch,logSec.value=loginInfo.sec,logSem.value=loginInfo.sem,openProBox()});const deleteElement=function(e){setTimeout(()=>{e.remove();let t=document.querySelectorAll(".subSl");for(let s=0;s<t.length;s++)t[s].innerText=s+1<10?"0"+(s+1):s+1},500)},subTeachDelEvent=function(){let e=document.querySelectorAll(".editDel"),t=document.querySelectorAll(".subTeachCard"),s=document.querySelectorAll(".editHr");for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(){t[n].classList.add("remove"),s[n].classList.add("remove"),deleteElement(t[n]),deleteElement(s[n])})};editSubTech.addEventListener("click",function(){closeMenu(menuBox),editLoc="editSub",pro.innerText="Edit Subjects",subEditBox.innerHTML="";for(let e=1;e<subjectsList.length;e++){let t=`
                    <div class="subTeachCard">
                        <div class="editsl">
                            <p class="subSl">${e<10?"0"+e:e}</p>
                            <img src="assets/del2.svg" class="editDel del">
                        </div>
                        <div class="subTe">
                            <input type="text" class="sub" placeholder="Subject Name" value="${subjectsList[e]}">
                            <input type="text" class="teach" placeholder="Teacher's Name" value="${teachersList[e]}">
                        </div>
                    </div>
                    <hr class="editHr hr">`;subEditBox.insertAdjacentHTML("beforeend",t)}subTeachDelEvent(),subTeachBox.classList.remove("hide"),openProBox()}),EditaddSub.addEventListener("click",function(){let e=document.querySelectorAll(".subSl").length+1,t=`
                    <div class="subTeachCard">
                        <div class="editsl">
                            <p class="subSl">${e<10?"0"+e:e}</p>
                            <img src="assets/del2.svg" class="editDel del">
                        </div>
                        <div class="subTe">
                        <input type="text" class="teach" placeholder="Teacher's Name">
                            <input type="text" class="sub" placeholder="Subject Name">
                        </div>
                    </div>
                    <hr class="editHr hr">`;subEditBox.insertAdjacentHTML("beforeend",t),subTeachDelEvent()}),editTimeTable.addEventListener("click",function(){divHeight=Number(localStorage.getItem("divHeight")),document.documentElement.style.setProperty("--divHeight",`${divHeight}px`),closeMenu(menuBox),timeTableSec.classList.remove("fadeOut"),header.classList.remove("hide"),hideShowSection(attendanceSec,timeTableSec);for(let e=0;e<subSetBoxs.length;e++)subSetBoxs[e].innerHTML="";for(let t=0;t<subSetBoxs.length;t++)subSetBoxs[t].insertAdjacentHTML("beforeend",subOptionFun()),subSetBoxs[t].insertAdjacentHTML("beforeend",setOptionFun("yes",""));let s=[...Object.keys(timeTableData)];s.pop();let n=Object.keys(timeTableData.Monday),l=document.querySelectorAll(".subList"),d=document.querySelectorAll(".setList"),a=0;s.forEach(e=>{n.forEach(t=>{l[a].value=`${timeTableData[e][t].sub}`,d[a].value=timeTableData[e][t].set,a++})})}),proDone.addEventListener("click",function(){if("profile"==editLoc)loginInfo.cr=titleCase(crn.value).trim(),loginInfo.branch=crs.value.toUpperCase().trim(),loginInfo.sec=logSec.value.toUpperCase().trim(),loginInfo.sem=logSem.value.trim(),classSet=Number(edSets.value),cr.innerText=`${titleCase(crn.value)}`,course.innerText=crs.value.toUpperCase(),headSec.innerText=`Sec: ${logSec.value.toUpperCase()}`,localStorage.setItem("classSet",classSet),localStorage.setItem("loginInfo",JSON.stringify(loginInfo)),hideEl(loginBox),editLoc=null,closeMenu(profileBox);else if("editSub"==editLoc){let e=document.querySelectorAll(".sub"),t=document.querySelectorAll(".teach"),s=!1;for(let n=0;n<e.length;n++)(!1===emptyField.test(e[n].value)||!1===emptyField.test(t[n].value))&&(isFieldEmpty(e[n]),isFieldEmpty(t[n]),s=!0);if(!0==s)msg("Field can not be blank");else{subjectsList=["No Lecture"],teachersList=["No Lecture"];for(let l=0;l<e.length;l++)subjectsList[l+1]=titleCase(e[l].value).trim(),teachersList[l+1]=titleCase(t[l].value).trim();localStorage.setItem("subjectsList",JSON.stringify(subjectsList)),localStorage.setItem("teachersList",JSON.stringify(teachersList)),window.location.reload(),editLoc=null,closeMenu(profileBox)}}}),1===stage?(loginPageSec.classList.add("hide"),subjectDetailSec.classList.remove("hide"),loginInfo=JSON.parse(localStorage.getItem("loginInfo")),divHeight=dayCardsBoxs[0].offsetHeight,localStorage.setItem("divHeight",divHeight)):2===stage?(loginPageSec.classList.add("hide"),subjectDetailSec.classList.add("hide"),timeTableSec.classList.remove("hide"),classSet=parseInt(localStorage.getItem("classSet")),teachersList=JSON.parse(localStorage.getItem("teachersList")),subjectsList=JSON.parse(localStorage.getItem("subjectsList")),subTeacher(),dayCardsBoxs[0].classList.remove("collapse"),dayCardsBoxs[0].classList.add("expand")):3===stage&&(timeTableData=JSON.parse(localStorage.getItem("timeTableData")),subjectsList=JSON.parse(localStorage.getItem("subjectsList")),teachersList=JSON.parse(localStorage.getItem("teachersList")),timeTableFun(),0!=Object.keys(studentData=JSON.parse(localStorage.getItem("studentData"))).length&&attendSheet(assignSetAndSub()),assignSetAndSub(),userImgBox.style.backgroundImage=`url(${null!=localStorage.getItem("crImg")?localStorage.getItem("crImg"):userImgBox.style.backgroundImage="url(/assets/userProfile.svg)"})`),genPDF.addEventListener("click",createPDF),window.addEventListener("beforeprint",function(){document.getElementById("pdfBox").classList.remove("hide")}),window.addEventListener("afterprint",function(){document.getElementById("pdfBox").classList.add("hide")}),imgFile.addEventListener("change",function(){let e=new FileReader;e.readAsDataURL(this.files[0]),e.addEventListener("load",function(){userImgBox.style.backgroundImage=`url(${e.result})`,localStorage.setItem("crImg",e.result)})}),document.getElementById("delPP").addEventListener("click",function(){localStorage.removeItem("crImg"),userImgBox.style.backgroundImage="url(/assets/userProfile.svg)",closeMenu(profileBox),msg("Profile Image deleted Successfully.")});const studentAttend=function(){let e=document.querySelectorAll(".stdCard"),t=document.querySelectorAll(".stdName");for(let s=0;s<e.length;s++)studentData[t[s].innerText].attend=!0==e[s].classList.contains("Present")?"Present":"Absent"};document.getElementById("prsntAll").addEventListener("click",function(){let e=document.querySelectorAll(".stdCard");e.forEach(e=>{e.classList.remove("Absent"),e.classList.add("Present")})}),window.addEventListener("beforeunload",function(){studentAttend(),localStorage.setItem("studentData",JSON.stringify(studentData))});