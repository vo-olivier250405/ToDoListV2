"use strict";
function showForm(element) {
    /**Fonction qui affiche le forumaire si il y a un clique sur le bouton */
    const form = document.querySelector("form");
    const section = document.querySelector("section.new-todo");
    if (element.innerHTML === "Create task") {
        form.style.visibility = "visible";
        section.style.visibility = "visible";
        section.style.display = "initial";
        element.innerHTML = "Cancel";
    }
    else {
        form.style.visibility = "hidden";
        section.style.visibility = "hidden";
        section.style.display = "none";
        element.innerHTML = "Create task";
    }
}
function getTask() {
    /**Fonction qui renvoie les données du formulaire */
    const datas = [
        document.getElementById("name"),
        document.getElementById("date"),
        document.getElementById("description"),
        document.getElementById("priority"),
    ];
    const res = Array();
    for (const data of datas) {
        res.push(data.value);
    }
    alert(res[0]);
    createTask(res);
    return res;
}
function saveDatas() {
    sessionStorage.setItem("tasks", toDoList.innerHTML);
}
function createTask(datas) {
    /**Fonction qui crée des bloc de tâches à réaliser */
    const li = document.createElement("li");
    const div = document.createElement("div");
    const divInfos = document.createElement("div");
    const span0 = document.createElement("span");
    const span1 = document.createElement("span");
    const date = document.createElement("p");
    const title = document.createElement("h3");
    span0.innerHTML = "ⓧ";
    span1.innerHTML = "ⓘ";
    span0.setAttribute("onclick", "deleteTask(this)");
    div.className = "tasks";
    divInfos.className = "infos";
    title.innerHTML = `${datas[0]}`;
    date.innerHTML = `${datas[1]}`;
    divInfos.appendChild(span0);
    divInfos.appendChild(span1);
    div.appendChild(divInfos);
    div.appendChild(title);
    div.appendChild(date);
    li.appendChild(div);
    toDoList.appendChild(li);
    saveDatas();
}
function deleteTask(element) {
    var _a, _b, _c;
    /**Fonction qui supprime une tâche */
    (_c = (_b = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
    saveDatas();
}
const toDoList = document.getElementById("list");
if (toDoList != undefined) {
    toDoList.innerHTML = sessionStorage.getItem("tasks");
}
