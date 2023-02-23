import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [email, setEmail] = useState("");

  function verifyemail() {
    alert(data.has(email));
    return data.has(email);
    //valid or not valid
  }

  return (
    <div className="App">
      <div>
        <h1>ScamShield</h1>
      </div>

      <div className="centered-div">
        <div style={{ width: "100%" }}>
          <input
            className="email"
            text="email"
            placeholder="Please enter the email address of the sender whom you suspect to be suspicious."
            onChange={(event) => setEmail(event.target.value.trim())}
          />
        </div>

        <button className="button" type="button" onClick={verifyemail}>
          Verify
        </button>
      </div>

      {/* <div>
        <input
          className="issue"
          type="text"
          placeholder="Please provide a brief explanation of the scam you experienced."
          style={{ width: "400px" }}
        />
      </div> */}
    </div>
  );
}

export default App;
