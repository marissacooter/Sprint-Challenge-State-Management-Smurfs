import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SmurfList from "./SmurfList";
import { SmurfsContext } from "../context/SmurfsContext";

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        setSmurfs(res.data);
      })
      .catch((err) => {
        console.log("The data was not returned", err);
      });
  }, []);

  return (
    <div className="App">
      <SmurfsContext.Provider value={smurfs}>
        <SmurfList />
      </SmurfsContext.Provider>
    </div>
  );
};

export default App;
