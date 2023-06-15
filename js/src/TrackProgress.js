import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useTranslation } from "react-i18next";

const TrackProgress = ({ fetchedData }) => {
  const status = fetchedData.CurrentStatus.state;
  // console.log(status);
  const { t } = useTranslation();

  return (
    <div className="track-progress">
      <ProgressBar
        filledBackground={
          status === "DELIVERED"
            ? "#26a65b"
            : status.includes("SENDER")
            ? "#dc3545"
            : "orange"
        }
        percent={status === "DELIVERED" ? 100 : 67}
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
              <p className="progress-des">{t("pkgcrtd")}</p>
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
              <p className="progress-des">{t("pkgrcvd")}</p>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            >
              {/* {status.includes("DELIVERY") ? (
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
              ) : ( */}
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
              {/* )} */}

              <p className="progress-des">{t("dlvrpkg")}</p>
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
              <p className="progress-des">{t("pkgdlvrd")}</p>
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default TrackProgress;
