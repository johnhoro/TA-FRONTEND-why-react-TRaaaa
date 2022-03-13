let input = document.querySelector(".input");
let root = document.querySelector("ul");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

function isHandleWatch(event) {
  let id = event.target.id;
  arr[id].isWatch = !arr[id].isWatch;
  localStorage.setItem("arr", JSON.stringify(arr));
  createUI(arr);
}

function createUI(arr) {
  let movieUI = arr.map((element, i) => {
    let li = React.createElement(
      "li",
      {},
      React.createElement("p", {}, element.name),
      React.createElement(
        "button",
        {
          id: i,
          onClick: isHandleWatch,
        },
        element.isWatch ? "Watched" : "To Watch"
      )
    );

    return li;
  });
  ReactDOM.render(movieUI, root);
}

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
