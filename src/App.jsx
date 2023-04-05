import { useState } from "react";
import "./app.css"

function App() {
     const [inp1, setInp1] = useState(null)
     const [inp2, setInp2] = useState(null)
     function getInp1(e) {
          setInp1(e.target.value);
     }
     function getInp2(e) {
          setInp2(e.target.value);
     }
     function plus() {
          console.log((inp1 * 1) + (inp2 * 1));
     }
     function minus() {
          console.log((inp1 * 1) - (inp2 * 1));
     }
     function bol() {
          console.log((inp1 * 1) / (inp2 * 1));
     }
     function kop() {
          console.log((inp1 * 1) * (inp2 * 1));
     }
     function res() {
          if (select.value == "+") {
               plus()
          }
          else if (select.value == "-") {
               minus()
          }
          else if (select.value == "*") {
               kop()
          }
          else if (select.value == "/") {
               bol()
          }
     }
     return (
          <div className="container">
               <input onChange={getInp1} id="inp1" type="number" />
               <select id="select">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
               </select>
               <input onChange={getInp2} id="inp3" type="number" />
               <button onClick={res}>Click</button>
          </div>
     )
}

export default App
