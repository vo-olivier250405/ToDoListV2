function showForm(element: HTMLButtonElement) {
  /**Fonction qui affiche le forumaire si il y a un clique sur le bouton */
  const form: HTMLFormElement = document.querySelector("form")!;
  const section: any = document.querySelector("section.new-todo")!;

  if (element.innerHTML === "Create task") {
    form.style.visibility = "visible";
    section.style.visibility = "visible";
    section.style.display = "initial";
    element.innerHTML = "Cancel";
  } else {
    form.style.visibility = "hidden";
    section.style.visibility = "hidden";
    section.style.display = "none";
    element.innerHTML = "Create task";
  }
}

function getTask() {
  /**Fonction qui renvoie les données du formulaire */
  const datas: HTMLInputElement[] = [
    document.getElementById("name") as HTMLInputElement,
    document.getElementById("date") as HTMLInputElement,
    document.getElementById("description") as HTMLInputElement,
    document.getElementById("priority") as HTMLInputElement,
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
  /**Fonction qui met à jour les données */
  sessionStorage.setItem("tasks", toDoList.innerHTML);
}

function createTask(datas: any) {
  /**Fonction qui crée des bloc de tâches à réaliser */
  const li = document.createElement("li");
  const div = document.createElement("div");
  const divInfos = document.createElement("div");
  const span0 = document.createElement("span");
  const span1 = document.createElement("span");
  const date = document.createElement("p");
  const title = document.createElement("h3");
  const description = document.createElement("p");

  span0.innerHTML = "ⓧ";
  span1.innerHTML = "↓";
  span0.setAttribute("onclick", "deleteTask(this)");
  span1.setAttribute("onclick", "showDescription(this)");
  description.setAttribute("id", "description-p");
  div.className = "tasks";
  divInfos.className = "infos";
  title.innerHTML = `${datas[0]}`;
  date.innerHTML = `${datas[1]}`;
  description.innerHTML = `${datas[2]}`;

  divInfos.appendChild(span0);
  divInfos.appendChild(span1);
  title.appendChild(description);
  div.appendChild(divInfos);
  div.appendChild(title);
  div.appendChild(date);
  li.appendChild(div);
  toDoList.appendChild(li);

  saveDatas();
}

function deleteTask(element: HTMLSpanElement) {
  /**Fonction qui supprime une tâche */
  element.parentElement?.parentElement?.parentElement?.remove();
  saveDatas();
}

function showDescription(element: HTMLSpanElement) {
  const description = document.getElementById(
    "description-p"
  ) as HTMLParagraphElement;

  if (element.innerHTML == "↓") {
    element.innerHTML = "↑";
    description.style.visibility = "visible";
    description.style.display = "intitial";
  } else {
    element.innerHTML = "↓";
    description.style.visibility = "hidden";
  }
}
const toDoList = document.getElementById("list") as HTMLUListElement;
if (toDoList != undefined) {
  toDoList.innerHTML = sessionStorage.getItem("tasks")!;
}
