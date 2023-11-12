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
  sessionStorage.setItem("tasks", toDoList.innerHTML);
}
function createTask(datas: any) {
  /**Fonction qui crée des bloc de tâches à réaliser */
  const li = document.createElement("li");
  const div = document.createElement("div");
  const divInfos = document.createElement("div");
  const span0 = document.createElement("span");
  const span1 = document.createElement("span");
  span0.innerHTML = "\u00d7";
  span1.innerHTML = "stylou";
  div.className = "tasks";
  divInfos.className = "infos";
  divInfos.appendChild(span0);
  divInfos.appendChild(span1);

  const title = document.createElement("h3");
  title.innerHTML = `${datas[0]}`;
  const date = document.createElement("p");
  date.innerHTML = `${datas[1]}`;
  div.appendChild(divInfos);
  div.appendChild(title);
  div.appendChild(date);
  li.appendChild(div);
  toDoList.appendChild(li);
  saveDatas();
}

function deleteTask(element: HTMLSpanElement) {
  element.parentElement?.remove();
  saveDatas();
}
const toDoList = document.getElementById("list") as HTMLUListElement;
if (toDoList != undefined) {
  toDoList.innerHTML = sessionStorage.getItem("tasks")!;
}
