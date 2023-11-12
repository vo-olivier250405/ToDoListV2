function showForm() {
  const form: HTMLFormElement = document.querySelector("form")!;
  const section: any = document.querySelector("section.new-todo")!;
  form.style.visibility = "visible";
  section.style.visibility = "visible";
}

function getDatas() {
  const datas: HTMLInputElement[] = [
    document.getElementById("name") as HTMLInputElement,
    document.getElementById("date") as HTMLInputElement,
    document.getElementById("description") as HTMLInputElement,
  ];
  const res = Array();
  for (const data of datas) {
    res.push(data.value);
  }
  return res;
}
