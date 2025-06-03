import React, { useState, useEffect } from "react";

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const changeLights = () => {
      setActiveLight((prev) =>
        prev === "red" ? "yellow" : prev === "yellow" ? "green" : "red"
      );
    };
    
  }, 3000);

  return (
    <>
     <div>Traffic Light simulator</div>
    <div style={styles.container}>
      <div style={styles.trafficLight}>
        <div style={{ ...styles.light, backgroundColor: activeLight === "red" ? "red" : "gray" }}>red</div>
        <div style={{ ...styles.light, backgroundColor: activeLight === "yellow" ? "yellow" : "gray" }}>yellow</div>
        <div style={{ ...styles.light, backgroundColor: activeLight === "green" ? "green" : "gray" }}>gray</div>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#222",
  },
  trafficLight: {
    display: "flex",
    flexDirection: "column",
    width: "80px",
    padding: "10px",
    backgroundColor: "black",
    borderRadius: "10px",
    alignItems: "center",
  },
  light: {
    width: "50px",
    height: "50px",
    margin: "5px",
    borderRadius: "50%",
  },
};

export default TrafficLightSimulator;