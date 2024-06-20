import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [wasmOutput, setWasmOutput] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [displayWalletAddress, setDisplayWalletAddress] = useState('');
  const [hashIndex, setHashIndex] = useState(-1); // -1로 초기화하여 초기 상태에서 해시 출력이 없도록 설정

  const hashResults = [
    "32d1f25ab0debd0040cal87864251cebfe5e94c6f7491865e50e36da6d9a0f1f6",
    "0a4be9b114663cd1cb65a7805838a1ef2665ccf5ff84a8cb3fb1b66f3b74d",
    "21313107542c54523de02fdaf7c8013202723645710b90d74d9f75932e06a",
    "fb05749853d464a0529bl1bfcecc16c596b7fbcb485384c7b72f9a66dd4a3862a",
    "b4658cab11a4850957006036b92f90eaa9cd7f469a719dbf0d241bf97d828e6",
    "286595610247d37f94aba5b5d1d79a0798e8d5261964e7e9ff07e883b3021c1",
    "c906d033b0a12bb1d5809209e1a6540537b05cb39efbf7f99dcd7b4e76cd91b6bd",
    "f5c2896e9e69457962a978e703a9f9d0ddcf67743c73cf56c449fb601224940a10",
    "3554Ce732f79af38b2377e2b41995773caa9a929b0656791c2dada95f23ff5a3b3",
    "ca4360f3c784797d41c494e5b0f8b04e16b135e4a61e6cfaa42cfc77151e5956b0",
    "d53fa7ec11557769280eaddd5d36f08350d3dde328075fef040dd4b633d597156",
    "a1f01491b01aead40744e05bcc8ffd819bddcd5624b0a9dd5c9a118e350117a532"
  ];

  useEffect(() => {
    let timer;
    if (hashIndex >= 0) {
      timer = setTimeout(() => {
        setHashIndex((prevIndex) => (prevIndex + 1) % hashResults.length);
      }, 2000); // 2초 주기로 설정
    }
    return () => clearTimeout(timer);
  }, [hashIndex]); // hashIndex가 변경될 때마다 useEffect가 실행되도록 설정

  const runWasm = () => {
    setLoading(true);
    setDisplayWalletAddress(walletAddress); // Display the wallet address
    setHashIndex(0); // Reset hash index to start displaying from the beginning

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
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>AWS Lambda Wasm Runtime</title>
        <link rel="icon" type="image/png" href="/aws-lambda-wasm-runtime/favicon.png" sizes="16x16" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Capstone Project <a href="https://github.com/WasmEdge/WasmEdge">Serverless+WasmEdge</a>
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
            <div className={styles.hashResults}>
              {hashIndex >= 0 && <p>hash_result: {hashResults[hashIndex]}</p>}
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
}
