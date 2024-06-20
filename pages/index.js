import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [wasmOutput, setWasmOutput] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [displayWalletAddress, setDisplayWalletAddress] = useState('');

  return (
    <div className={styles.container}>
      <Head>
        <title>AWS Lambda Wasm Runtime</title>
        <link rel="icon" type="image/png" href="/aws-lambda-wasm-runtime/favicon.png" sizes="16x16" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/WasmEdge/WasmEdge">WasmEdge!</a>
        </h1>

        <div className={styles.operating}>
          <div>
            <input
              type="text"
              placeholder="내 wallet 주소"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <button id="runBtn" onClick={runWasm} disabled={loading}>
              {loading ? 'Loading' : 'Run Wasm'}
            </button>
            <div className={styles.result}>
              {wasmOutput && <p>{wasmOutput}</p>}
            </div>
            <div className={styles.walletDisplay}>
              {displayWalletAddress && <p>Wallet Address: {displayWalletAddress}</p>}
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://aws.amazon.com/lambda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by AWS Lambda
        </a>
      </footer>
    </div>
  );

  function runWasm() {
    setLoading(true);
    setDisplayWalletAddress(walletAddress); // Display the wallet address
    var oReq = new XMLHttpRequest();
    oReq.open("POST", process.env.NEXT_PUBLIC_FUNCTION_URL, true);
    oReq.onload = function(oEvent) {
      setLoading(false);
      if (oReq.status >= 200 && oReq.status < 300) {
        setWasmOutput(oReq.responseText);
      } else {
        console.error("Failed to fetch WebAssembly output");
      }
    };
    oReq.send();
  }
}
