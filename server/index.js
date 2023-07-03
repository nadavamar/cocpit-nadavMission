import readline from 'node:readline/promises';
import { Server } from 'socket.io';
import http from 'node:http';

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST']
  }
});

server.listen(3001);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

while (true) {
  const altitude = await rl.question('ALTITUDE: '),
    HIS = await rl.question('HIS: '),
    ADI = await rl.question('ADI: '),
    areYouSure = await rl.question('Are you sure? (Y/n) ');

  if (areYouSure !== 'n') {
    io.emit('message', {
      altitude,
      HIS,
      ADI
    });
    console.log('Message has been sent');
  }
}

/*****************/

// const readline = require('readline');

// import express from "express";
// import pressAnyKey from "press-any-key";
// import { Server } from "socket.io";
// import http from "http";
// import cors from "cors";
// import inquirer from "inquirer";

// const ALTITUDE = "ALTITUDE: ";
// const HIS = "HIS: ";
// const ADI = "ADI: ";

// const app = express();

// app.use(cors());

// const container = {
//   altitude: null,
//   HIS: null,
//   ADI: null,
// };
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: true,
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   socket.broadcast.emit("receive_message", container);
// });

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "altitude",
//       message: ALTITUDE,
//     },
//     {
//       type: "input",
//       name: "HIS",
//       message: HIS,
//     },
//     {
//       type: "input",
//       name: "ADI",
//       message: ADI,
//     },
//   ])
//   .then((answers) => {
//     container.altitude = answers.altitude;
//     container.HIS = answers.HIS;
//     container.ADI = answers.ADI;
//     io.emit("receive_message", container);
//   });

// server.listen(3001, () => {
//   // console.log("Server is running on port 3001");
// });
