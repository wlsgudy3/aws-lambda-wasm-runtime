const { spawn } = require('child_process');
const path = require('path');

function _runWasm(reqBody) {
  return new Promise((resolve, reject) => {
    const wasmedge = spawn(path.join(__dirname, 'wasmedge'), ['--dir', '.', path.join(__dirname, 'wasmedge_manager.so')]);

    let d = [];
    wasmedge.stdout.on('data', (data) => {
      d.push(data);
    });

    wasmedge.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    wasmedge.on('close', (code) => {
      if (code !== 0) {
        reject(`wasmedge process exited with code ${code}`);
      } else {
        let buf = Buffer.concat(d);
        resolve(buf);
      }
    });

    if (reqBody) {
      wasmedge.stdin.write(reqBody);
    }
    wasmedge.stdin.end();
  });
}

exports.handler = async function(event, context) {
  try {
    let buf = await _runWasm(event.body);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT"
      },
      body: buf.toString()
    };
  } catch (error) {
    console.error(`Error: ${error}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
