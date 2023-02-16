import React, { useState, useEffect } from "react";
import TrackNav from "./TrackNav";
import TrackDetails from "./TrackDetails";
import TrackProgress from "./TrackProgress";
import TrackTable from "./TrackTable";
import DeliveryDetails from "./DeliveryDetails";
import TrackSVG from "./TrackSVG";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { useTranslation } from "react-i18next";

const Track = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputNo, setInputNo] = useState("");
  const [fetchedData, setFetchedData] = useState("");
  const [showToast, setShowToast] = useState(false);
  const trackApi = `https://tracking.bosta.co/shipments/track/${inputNo}`;

  useEffect(() => {
    if (inputNo) {
      (async () => {
        const data = await fetch(trackApi).then((response) => response.json());
        setFetchedData(data);
      })();
    }
  }, [inputNo, trackApi]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchBtn = () => {
    const regex = /^[0-9\b]+$/;
    if (inputValue && regex.test(inputValue)) {
      setInputNo(inputValue);
      setInputValue("");
      // console.log(inputNo);
    } else {
      setShowToast(true);
      setInputValue("");
    }
  };
  const handleDate = (string) => {
    return string.slice(0, 10).split("-").reverse().join("-");
  };
  const handleTime = (string) => {
    // return string.slice(11, 16);
    let hours = Number(string.slice(11, 13));
    let minutes = string.slice(14, 16);
    let ampm = hours >= 12 ? "pm" : "am";
    let timeStr =
      hours > 12
        ? hours - 12 + ":" + minutes + " " + ampm
        : hours === 0
        ? "12 :" + minutes + " am"
        : hours + ":" + minutes + " " + ampm;
    return timeStr;
  };

  const handleString = (s) => {
    return s.split("_").join(" ");
  };
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  // console.log(i18n.language);
  return (
    <div>
      <div className="track-nav">
        <TrackNav />
      </div>
      <div className="center">
        <h2>{t("title")}</h2>
        <div className="form">
          <Form.Control
            placeholder={t("trno")}
            value={inputValue}
            onChange={handleChange}
            style={{
              borderRadius:
                i18n.language === "ar" ? "0 5px 5px 0" : "5px 0 0 5px",
            }}
          />
          <Button
            className="search-btn"
            variant="danger"
            onClick={searchBtn}
            disabled={!inputValue}
            style={{
              borderRadius:
                i18n.language === "ar" ? "5px 0 0 5px" : "0 5px 5px 0",
            }}
          >
            <span className="material-symbols-outlined">search</span>
          </Button>
        </div>
      </div>
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={2000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">{t('inpterr')}</strong>
            </Toast.Header>
          </Toast>
      {fetchedData.error ? (
        <div className="center warning-container">
          <h5>
            {t("trno")} {inputNo}
          </h5>
          <p className="warning-msg">
            <span className="material-symbols-sharp warning">error</span>
            {t("error")}
          </p>
          <TrackSVG />
        </div>
      ) : fetchedData ? (
        <div>
          <TrackDetails
            fetchedData={fetchedData ? fetchedData : false}
            handleDate={handleDate}
            handleTime={handleTime}
            handleString={handleString}
          />
          <TrackProgress fetchedData={fetchedData ? fetchedData : false} />
          <div className="track-body">
            <TrackTable
              fetchedData={fetchedData ? fetchedData : false}
              handleDate={handleDate}
              handleTime={handleTime}
            />
            <DeliveryDetails />
          </div>
        </div>
      ) : (
        <TrackSVG />
      )}
    </div>
  );
};

export default Track;
