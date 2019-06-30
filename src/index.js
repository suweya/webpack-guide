import _ from "lodash-es";
// import Print from "./print";

function component() {
  let element = document.createElement("div");
  const button = document.createElement("button");
  const br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  // button.onclick = Print.bind(null, "Hello webpack!");

  return element;
}

document.body.appendChild(component());
