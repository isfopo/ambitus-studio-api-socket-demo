import React, { useState, useRef } from "react";

import { Manager } from "socket.io-client";
import "./App.css";
const ENDPOINT = "http://localhost:3000";

const objectToQuery = (object) => {
  return Object.keys(object)
    .map((key) => key + "=" + object[key])
    .join("&");
};

function App() {
  const socket = useRef();

  const [ProjectId, setProjectId] = useState("");
  const [token, setToken] = useState("");
  const [project, setProject] = useState("");
  const [error, setError] = useState("");

  const connect = () => {
    const manager = new Manager(ENDPOINT, {
      reconnectionDelayMax: 10000,
      query: {
        ProjectId,
      },
    });

    socket.current = manager.socket("/", {
      auth: {
        token: `Bearer ${token}`,
      },
    });

    socket.current.on("project", (data) => {
      setProject(data.project);
      console.log(data);
    });

    socket.current.on("update", (data) => {
      console.log(data);
      fetch(`${ENDPOINT}${data.path}?${objectToQuery(data.query)}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    });

    socket.current.on("error", (error) => {
      setError(error);
      console.log(error);
    });
  };

  const disconnect = () => {
    socket.current.disconnect();
    setProject("");
  };

  return (
    <div>
      <form>
        <label>
          ProjectId:
          <input
            type="text"
            value={ProjectId}
            onChange={(e) => setProjectId(e.target.value)}
          />
        </label>
      </form>
      <br />
      <form>
        <label>
          Token:
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
      </form>
      <br />
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
      <br />
      {error ? (
        <h1>{error}</h1>
      ) : (
        <p>{project ? `Connected to ${project.name}` : `Not connected`}</p>
      )}
    </div>
  );
}

export default App;
