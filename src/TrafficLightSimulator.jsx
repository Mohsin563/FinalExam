import React, { useState, useEffect } from "react";

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState("red");


  return (
   <>
   <div>Traffic Light simulator</div>
    <div style={styles.container}>
      <div style={styles.trafficLight}>
        <div style={{  backgroundColor: activeLight === "red" ? "red" : "gray" }}>red</div>
        <div style={{  backgroundColor: activeLight === "yellow" ? "yellow" : "gray" }}>yellow</div>
        <div style={{  backgroundColor: activeLight === "green" ? "green" : "gray" }}>gray</div>
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
  
};

export default TrafficLightSimulator;