function showForm(element: HTMLButtonElement) {
  /**Fonction qui affiche le forumaire si il y a un clique sur le bouton */
  const form: HTMLFormElement = document.querySelector("form")!;
  const section: any = document.querySelector("section.new-todo")!;

  if (element.innerHTML === "Create task") {
    form.style.visibility = "visible";
    section.style.visibility = "visible";
    element.innerHTML = "Cancel";
  } else {
    form.style.visibility = "hidden";
    section.style.visibility = "hidden";
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
  alert(res);
  return res;
}
