const WebSocket= require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', ws => {
    console.log('Client connected, My baby!');

    ws.on('close',() =>{
        console.log('Client disconnected');
    });
});