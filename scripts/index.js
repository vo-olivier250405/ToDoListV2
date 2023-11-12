"use strict";
function showForm(element) {
    /**Fonction qui affiche le forumaire si il y a un clique sur le bouton */
    const form = document.querySelector("form");
    const section = document.querySelector("section.new-todo");
    //   alert(element.innerHTML);
    //   form.style.visibility = "visible";
    //   section.style.visibility = "visible";
    //   element.innerHTML = "Cancel";
    //   element.addEventListener("click", function () {
    //     alert(element.innerHTML);
    //     if (element.innerHTML == "Cancel") {
    //       form.style.visibility = "hidden";
    //       section.style.visibility = "hidden";
    //       element.innerHTML = "Create task";
    //     }
    //   });
    if (element.innerHTML === "Create task") {
        form.style.visibility = "visible";
        section.style.visibility = "visible";
        element.innerHTML = "Cancel";
    }
    else {
        form.style.visibility = "hidden";
        section.style.visibility = "hidden";
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
    alert(res);
    return res;
}
