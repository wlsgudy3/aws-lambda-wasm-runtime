const { spawn } = require('child_process');
const path = require('path');

function _runWasm() {
  return new Promise((resolve, reject) => {
    const wasmedge = spawn(path.join(__dirname, 'wasmedge'), ['--dir', '.', path.join(__dirname, 'wasmedge_manager.so')]);

    let d = [];
    wasmedge.stdout.on('data', (data) => {
      d.push(data);
    });

    wasmedge.stderr.on('data', (data) => {
      d.push(data);
    });

    wasmedge.on('close', (code) => {
        let buf = Buffer.concat(d);
        resolve(buf);
    });

  });
}

exports.handler = async function(event, context) {
    let buf = await _runWasm();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT"
      },
      body: buf.toString()
    };
};
