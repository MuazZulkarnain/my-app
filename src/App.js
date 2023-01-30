import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [assetId, setAssetId] = useState("");
  const [owner, setOwner] = useState("");
  const [inputAssetId, setInputAssetId] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [inputRecipientId, setInputRecipientId] = useState("");
  const [activePage, setActivePage] = useState("Tokenize");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleTokenize = () => {
    // Perform the tokenization process here.
    setAssetId("ABC123");
    setOwner(user);
  };

  const handleQuery = () => {
    // Query the asset information here.
    setAssetId(inputAssetId);
    setOwner("Jane Doe");
  };

  const handleTransfer = () => {
    // Transfer the asset here.
    setAssetId(inputAssetId);
    setOwner(inputRecipientId);
  };

  const handleSignIn = () => {
    setUser("User X");
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    setUser("");
    setLoggedIn(false);
  };

  return (
    <div className="container">
      {!loggedIn ? (
        <div className="sign-in">
          <text>Please sign in to continue:</text>
          <button onClick={handleSignIn} className="sign-in-button">
            Sign In
          </button>
        </div>
      ) : (
        <>
          <h1>Welcome, {user}!</h1>
          <div className="side-nav">
            <button
              className={`side-nav-button ${
                activePage === "Tokenize" ? "active" : ""
              }`}
              onClick={() => setActivePage("Tokenize")}
            >
              Tokenize
            </button>
            <button
              className={`side-nav-button ${
                activePage === "Query" ? "active" : ""
              }`}
              onClick={() => setActivePage("Query")}
            >
              Query
            </button>
            <button
              className={`side-nav-button ${
                activePage === "Transfer" ? "active" : ""
              }`}
              onClick={() => setActivePage("Transfer")}
            >
              Transfer
            </button>
            <button onClick={handleSignOut} className="sign-out-button">
              Sign Out
            </button>
          </div>
          {activePage === "Tokenize" && (
            <div className="input-form">
              <text>Tokenize your carbon credit:</text>
              <input
                type="number"
                placeholder="Enter amount"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                className="input-field"
              />
              <button onClick={handleTokenize} className="submit-button">
                Tokenize
              </button>
              <text>
                Asset ID: <span className="result">{assetId}</span>
              </text>
              <text>
                Owner: <span className="result">{owner}</span>
              </text>
            </div>
          )}
          {activePage === "Query" && (
            <div className="input-form">
              <text>Query your carbon credit information:</text>
              <input
                type="text"
                placeholder="Enter asset ID"
                value={inputAssetId}
                onChange={(e) => setInputAssetId(e.target.value)}
                className="input-field"
              />
              <button onClick={handleQuery} className="submit-button">
                Query
              </button>
              <text>
                Asset ID: <span className="result">{assetId}</span>
              </text>
              <text>
                Owner: <span className="result">{owner}</span>
              </text>
            </div>
          )}
          {activePage === "Transfer" && (
            <div className="input-form">
              <text>Transfer your carbon credit:</text>
              <input
                type="text"
                placeholder="Enter asset ID"
                value={inputAssetId}
                onChange={(e) => setInputAssetId(e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="Enter recipient ID"
                value={inputRecipientId}
                onChange={(e) => setInputRecipientId(e.target.value)}
                className="input-field"
              />
              <button onClick={handleTransfer} className="submit-button">
                Transfer
              </button>
              <text>
                Asset ID: <span className="result">{assetId}</span>
              </text>
              <text>
                Owner: <span className="result">{owner}</span>
              </text>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
