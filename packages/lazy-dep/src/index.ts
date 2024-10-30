import { bar } from "singleton-dep";

export function foo() {
  console.log("foo from lazy loaded package");
  bar();
}
