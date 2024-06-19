import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [enableWasm, setEnableWasm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wasmOutput, setWasmOutput] = useState('');

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
            <button id="runBtn" onClick={runWasm} disabled={loading}>{loading ? 'Loading' : 'Run Wasm'}</button>
            <div className={styles.result}>
              {wasmOutput && <p>{wasmOutput}</p>}
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
