"use strict";
function showForm() {
    const form = document.querySelector("form");
    const section = document.querySelector("section.new-todo");
    form.style.visibility = "visible";
    section.style.visibility = "visible";
}
function getDatas() {
    const datas = [
        document.getElementById("name"),
        document.getElementById("date"),
        document.getElementById("description"),
    ];
    const res = Array();
    for (const data of datas) {
        res.push(data.value);
    }
    alert(res);
}
