import _ from "lodash-es";
import printMe from "./print";
import "./style.css";

function component() {
  let element = document.createElement("div");
  const btn = document.createElement("button");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module !");
    printMe();
  });
}
