import { useState } from "react";
import { ethers } from "ethers";
import ProductCard from "./components/ProductCard";
import "./styles/styles.css";

function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);
  };

  return (
    <div>
      <div className="wallet">
        <h2 className="heading">E-Commerce Website</h2>
        {!account ? (
          <button className="wallet-btn" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <span>
            Wallet: {account.slice(0, 6)}...{account.slice(-4)}
          </span>
        )}
      </div>
      <ProductCard />
    </div>
  );
}

export default App;
