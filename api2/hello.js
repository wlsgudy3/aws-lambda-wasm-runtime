const { spawn } = require('child_process');
const path = require('path');

function _runExecutable(reqBody) {
  return new Promise((resolve, reject) => {
    // extern_randomx.exe 실행
    const executable = spawn(path.join(__dirname, 'extern_randomx.exe'));

    let d = [];
    executable.stdout.on('data', (data) => {
      d.push(data);
    });

    executable.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    executable.on('close', (code) => {
      if (code !== 0) {
        reject(`extern_randomx.exe process exited with code ${code}`);
      } else {
        let buf = Buffer.concat(d);
        resolve(buf);
      }
    });

    if (reqBody) {
      executable.stdin.write(reqBody);
    }
    executable.stdin.end();
  });
}

exports.handler = async function(event, context) {
  try {
    let buf = await _runExecutable(event.body);
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
