/////////////////////////////////

///npm run dev to start

import mongoose from "./db/db.js";
import express from "express";
import cors from "cors";
import routes from "./router/index.js";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";

const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(routes);

const PORT = process.env.PORT;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5175",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (dat) => {
    io.emit("receive_message", dat);

    console.log(dat);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

app.get("*", (req, res) => {
  res.json({ message: "router not found" });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
