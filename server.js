const {publicRuntimeConfig, serverRuntimeConfig} = require('./next.config.js');
const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser')
const os = require("os");
const {PORT, HTTP} = serverRuntimeConfig;
const hostname = process.env.host;
const port = 8801

const {isLocal, isDev, isProd, ENV} = publicRuntimeConfig;
const app = next({dev: !isProd, hostname, port});

app.prepare()
    .then(() => {
        const handle = app.getRequestHandler();
        const server = express();
        // server.use(morgan('combined', { stream: stream, skip: skipLog}))
        // server.use(cookieParser());
        // server.use(express.static(__dirname + '/public'))
        server.get('*', async (req, res) => {
            if (req.url.includes('_app')) {
                console.log("Cookies : ", req.cookies);
            }
            return await handle(req, res);
        });
        setServerListen(server);
    });

function setServerListen(server) {
    server.listen(PORT, err => {
        if (err) throw err;
        const serverUrl = `${HTTP}://localhost:${PORT}`;
        console.log(`
        App is running at:
        - Local: ${serverUrl}
        - Network: ${HTTP}://${getIPAdress()}:${PORT}
        - ApiNetwork : ${process.env.NEXT_PUBLIC_API_SERVER_URL}
        - isLocal : ${isLocal}
        - isDev : ${isDev}
        - isProduction : ${isProd}
        - ENV : ${ENV}
        - HostName : ${hostname}
      `);
    });
}
function getIPAdress() {
    const interfaces = os.networkInterfaces();

    for (let devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}