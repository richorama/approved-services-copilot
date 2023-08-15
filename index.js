import repl from "repl";
import query from "./query.js";
import chalk from "chalk";

function evaluate(input, _, __, callback) {
 
  query(input).then(answer => {
    console.log(chalk.green(answer))
    callback()
  });
}

repl.start({ prompt: " => ", eval: evaluate });
