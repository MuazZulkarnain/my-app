import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("John Doe");
  const [assetId, setAssetId] = useState("");
  const [owner, setOwner] = useState("");
  const [inputAssetId, setInputAssetId] = useState("");
  const [inputAmount, setInputAmount] = useState(0);
  const [isTokenizing, setIsTokenizing] = useState(true);

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
    // Perform the transfer process here
  };

  return (
    <div className="container">
      <h1>Welcome, {user}!</h1>
      {isTokenizing ? (
        <>
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
        </>
      ) : (
        <>
          <text>Query your carbon credit:</text>
          <input
            type="text"
            placeholder="Enter asset ID"
            value={inputAssetId}
            onChange={(e) => setInputAssetId(e.target.value)}
          />
          <button type="submit" onClick={handleQuery} className="query-button">
            Query
          </button>
        </>
      )}
      <hr />
      <text>Asset ID: {assetId}</text>
      <text>Owner: {owner}</text>
      <>
        <button
          onClick={() => setIsTokenizing(!isTokenizing)}
          className="toggle-button"
        >
          {isTokenizing ? "Query" : "Tokenize"}
        </button>
        {!isTokenizing && assetId !== "" ? (
          <button onClick={handleTransfer} className="transfer-button">
            Transfer
          </button>
        ) : null}
      </>
    </div>
  );
}

export default App;
