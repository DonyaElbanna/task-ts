import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const TrackProgress = ({ fetchedData }) => {
  const status = fetchedData.CurrentStatus.state;
  // console.log(status);

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
        percent={status.includes("DELIVERED" || "DELIVERY") ? 100 : 67}
      >
        <Step>
          {({ accomplished }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            >
              <span
                className={
                  "material-symbols-outlined check" +
                  (status === "DELIVERED"
                    ? " delivered"
                    : status.includes("SENDER")
                    ? " returned"
                    : " pending")
                }
              >
                check_circle
              </span>
              <p className="progress-des">Package Created</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            >
              <span
                className={
                  "material-symbols-outlined check" +
                  (status === "DELIVERED"
                    ? " delivered"
                    : status.includes("SENDER")
                    ? " returned"
                    : " pending")
                }
              >
                check_circle
              </span>
              <p className="progress-des">Package Received from Provider</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished ? "accomplished" : "failed"
              }`}
            >
              {status.includes("DELIVERY") ? (
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
              ) : (
                <span
                  className={
                    "material-symbols-outlined check" +
                    (status === "DELIVERED"
                      ? " delivered"
                      : status.includes("SENDER")
                      ? " returned"
                      : " pending")
                  }
                >
                  check_circle
                </span>
              )}

              <p className="progress-des">Package Out to Delivery</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            >
              <span
                className={
                  "material-symbols-outlined check" +
                  (status === "DELIVERED"
                    ? " delivered"
                    : status.includes("SENDER")
                    ? " returned"
                    : " pending")
                }
              >
                check_circle
              </span>
              {status !== ("DELIVERED") ? (
                <p className="progress-des">
                  Package Returned
                  <span className="progress-details">Package rejected by Customer</span>
                </p>
              ) : (
                <p className="progress-des">Package Delivered</p>
              )}
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default TrackProgress;
