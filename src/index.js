import _ from "lodash-es";

function component() {
  let element = document.createElement("div");
  const button = document.createElement("button");
  const br = document.createElement("br");

  button.innerHTML = "Click me and look at the console!";
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      const print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component());
