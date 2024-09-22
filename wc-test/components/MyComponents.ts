import r2wc from "@r2wc/react-to-web-component";
import MyComponent from "./MyComponent";

const WC = r2wc(MyComponent, {
  props: { title: "string" },
});

customElements.define("my-component", WC);
