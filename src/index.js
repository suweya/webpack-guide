import { cube } from "./math";

function component() {
  let element = document.createElement("pre");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
