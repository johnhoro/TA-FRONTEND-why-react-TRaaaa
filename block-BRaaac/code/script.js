let input = document.querySelector(".input");
let root = document.querySelector("ul");
let arr = JSON.parse(localStorage.getItem("arr")) || [];
let button = document.querySelector("button");

function isHandleWatch(event) {
  let id = event.target.id;
  arr[id].isWatch = !arr[id].isWatch;
  localStorage.setItem("arr", JSON.stringify(arr));
  createUI(arr);
}

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUI(arr) {
  root.innerHTML = "";
  arr.forEach((element, i) => {
    let li = elm(
      "li",
      { classList: "flex justify-between align-center" },
      elm("p", {}, element.name),
      elm("button", { id: i }, element.isWatch ? "Watched" : "To Watch")
    );
    root.append(li);
  });
}

button.addEventListener("click", isHandleWatch);

input.addEventListener("keyup", (event) => {
  let value = event.target.value;
  if (event.keyCode === 13 && value) {
    arr.push({ name: value, isWatch: false });
    localStorage.setItem("arr", JSON.stringify(arr));
    createUI(arr);
    event.target.value = "";
  }
});

createUI(arr);
