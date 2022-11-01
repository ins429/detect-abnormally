import React, { useEffect, useRef } from "react";

const Monit = () => {
  const workerRef = useRef(null);

  useEffect(() => {
    if (window.Worker) {
      const myWorker = new Worker("worker.js");
      workerRef.current = myWorker;

      myWorker.onmessage = (e) => {
        if (e.data?.message === "ping") {
          console.log("ping");
          myWorker.postMessage("pong");
        }
      };
    }

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  return null;
};

export default Monit;
