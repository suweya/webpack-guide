const markdownAst = require("markdown-ast");

class MDParser {
  constructor(content) {
    this.data = markdownAst(content);
    console.log("AST : ", this.data);
    this.parse();
  }

  parse() {
    this.data = this.traverse(this.data);
  }

  traverse(ast) {
    let body = "";

    ast.forEach((item) => {
      switch (item.type) {
        case "bold":
        case "break":
        case "codeBlock":
          body += "<Code>" + item.code + "</Code>";
          break;
        case "codeSpan":
        case "image":
        case "italic":
        case "link":
        case "list":
          item.type = item.bullet === "-" ? "ul" : "ol";
          if (item.type !== "-") {
            item.startatt = ` start=${item.indent.length}`;
          } else {
            item.startatt = "";
          }
          body +=
            "<" +
            item.type +
            item.startatt +
            ">\n" +
            this.traverse(item.block) +
            "</" +
            item.type +
            ">\n";
          break;
        case "quote":
          let quoteString = this.traverse(item.block);
          body += "<blockquote>\n" + quoteString + "</blockquote>\n";
          break;
        case "strike":
        case "text":
        case "title":
          body += `<h${item.rank}>${item.text}</h${item.rank}>`;
          break;
        default:
          throw Error(
            "error",
            `No corresponding treatment when item.type equal${item.type}`
          );
      }
    });

    return body;
  }
}

module.exports = MDParser;
