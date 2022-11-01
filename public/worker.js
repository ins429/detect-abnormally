let timestamp, lastPongTimestamp;

setInterval(() => {
  console.log("worker sends ping");
  if (timestamp > lastPongTimestamp) {
    console.log("wat");
  }
  timestamp = Date.now();
  postMessage({ message: "ping", timestamp });
}, 3000);

onmessage = (e) => {
  // console.log("web worker", e.data);
  if (e.data === "pong") {
    lastPongTimestamp = Date.now();
    console.log("pong");
  }
};
