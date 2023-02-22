import "./App.css";

function App() {
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

function verifyemail() {}

export default App;
