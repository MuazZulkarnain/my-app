import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("User X");
  const [assetId, setAssetId] = useState("");
  const [owner, setOwner] = useState("");
  const [inputAssetId, setInputAssetId] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [inputRecipient, setInputRecipient] = useState("");
  const [activePage, setActivePage] = useState("Tokenize");

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
    setOwner(inputRecipient);
  };

  return (
    <div className="container">
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
      </div>
      {activePage === "Tokenize" && (
        <div className="input-form">
          <text>Tokenize your carbon credit:</text>
          <input
            type="number"
            placeholder="Enter amount"
            value={inputAmount}
            onChange={(e) => setInputAmount(e.target.value)}
          />
          <button onClick={handleTokenize} className="tokenize-button">
            Tokenize
          </button>
        </div>
      )}
      {activePage === "Query" && (
        <div className="input-form">
          <text>Enter asset ID to query:</text>
          <input
            type="text"
            placeholder="Enter asset ID"
            value={inputAssetId}
            onChange={(e) => setInputAssetId(e.target.value)}
          />
          <button onClick={handleQuery} className="query-button">
            Query
          </button>
        </div>
      )}
      {activePage === "Transfer" && (
        <div className="input-form">
          <text>Enter asset ID and recipient ID to transfer:</text>
          <input
            type="text"
            placeholder="Enter asset ID"
            value={inputAssetId}
            onChange={(e) => setInputAssetId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter recipient ID"
            value={inputRecipient}
            onChange={(e) => setInputRecipient(e.target.value)}
          />
          <button onClick={handleTransfer} className="transfer-button">
            Transfer
          </button>
        </div>
      )}

      {assetId && (
        <div className="asset-info">
          <text>Asset ID: {assetId}</text>
          <text>Owner: {owner}</text>
        </div>
      )}
    </div>
  );
}

export default App;
