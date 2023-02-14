import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const TrackProgress = ({ fetchedData }) => {
  const status = fetchedData.CurrentStatus.state;
  console.log(status);
//   const transitionStyles = {
//     entering: { transform: "scale(1.5)" },
//     entered: { transform: "scale(1)" },
//     exiting: { transform: "scale(1.5)" },
//     exited: { transform: "scale(1)" }
//   };
  return (
    <div className="track-progress">
      <ProgressBar
        filledBackground={
          status === "DELIVERED"
            ? "#26a65b"
            : status.includes("SENDER")
            ? "red"
            : "orange"
        }
        percent={status === "DELIVERED" ? 100 : 67}
      >
        <Step>
          {({ accomplished }) => (
            <div className={`indexedStep ${accomplished ? "accomplished" : ''}`}>
              <span
                className="material-symbols-outlined check"
                // style={{
                //   color:
                //     status === "DELIVERED"
                //       ? "#26a65b"
                //       : status.includes("SENDER")
                //       ? "red"
                //       : "orange",
                // }}
              >
                check_circle
              </span>
              <p className="progress-des">Package Created</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div className={`indexedStep ${accomplished ? "accomplished" : ''}`}>
              <span
                className="material-symbols-outlined check"
                // style={{
                //   color:
                //     status === "DELIVERED"
                //       ? "#26a65b"
                //       : status.includes("SENDER")
                //       ? "red"
                //       : "orange",
                // }}
              >
                check_circle
              </span>
              <p className="progress-des">Package Received from Provider</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div className={`indexedStep ${accomplished ? "accomplished" : ''}`}>
              <span
                className="material-symbols-outlined check"
                // style={{
                //   color:
                //     status === "DELIVERED"
                //       ? "#26a65b"
                //       : status.includes("SENDER")
                //       ? "red"
                //       : "orange",
                // }}
              >
                check_circle
              </span>
              <p className="progress-des">Package Out to Delivery</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div className={`indexedStep ${accomplished ? "accomplished" : ''}`}>
              <span
                className="material-symbols-outlined check"
                // style={{
                //   color:
                //     status === "DELIVERED"
                //       ? "#26a65b"
                //       : status.includes("SENDER")
                //       ? "red"
                //       : "orange",
                // }}
              >
                check_circle
              </span>
              <p className="progress-des">{status.includes("SENDER") ? 'Package Returned' : 'Package Delivered'}</p>
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default TrackProgress;
