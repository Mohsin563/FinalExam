
const TrafficLightSimulator = () => {


  return (
<> <div>Traffic light TrafficLightSimulator</div>
    <div style={styles.container}>
       
      <div style={styles.trafficLight}>
        <div > red</div>
        <div >yellow</div>
        <div >green</div>
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
  }
};

export default TrafficLightSimulator;