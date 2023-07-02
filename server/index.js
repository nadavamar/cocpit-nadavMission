const express = require("express");
const readline = require("readline");
const pressAnyKey = require("press-any-key");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ALTITUDE = "ALTITUDE: ";
const HIS = "HIS: ";
const ADI = "ADI: ";

const app = express();

app.use(cors());

const container = {
  altitude: null,
  HIS: null,
  ADI: null,
};
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.broadcast.emit("receive_message", container);
});

rl.question(ALTITUDE, (alt) => {
  container.altitude = alt;

  rl.question(HIS, (his) => {
    container.HIS = his;

    rl.question(ADI, (adi) => {
      container.ADI = adi;
         io.emit("receive_message", container);
         rl.close();
     
    });
  });
});


server.listen(3001, () => {
  // console.log("Server is running on port 3001");
});
