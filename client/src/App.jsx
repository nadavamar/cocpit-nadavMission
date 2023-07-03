import { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import DataProvider from "./contextFolder/DataProvider";
import Main from "./components/cockpit guides/Main";
//create the socket for connecting the backend
const socket = io.connect("http://localhost:3001");

function App() {
  const [messageRecived, setMessageReceived] = useState("");

  useEffect(() => {
    
  socket.on("message", (data) => {
    
   setMessageReceived(data)
  });
  }, []);

  return (
    <DataProvider data={messageRecived}>
      <Main/>
    </DataProvider>
  );
}

export default App;
