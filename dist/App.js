import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import logo from "./logo.svg.proxy.js";
import "./App.css.proxy.js";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo,
    width: "100%",
    height: "auto",
    className: "App-logo",
    alt: "logo"
  }), /* @__PURE__ */ React.createElement("p", null, "Wowza Page has been open for ", /* @__PURE__ */ React.createElement("code", null, count), " seconds.")));
}
export default App;
