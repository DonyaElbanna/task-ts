import React, { useState, useEffect } from "react";
import TrackNav from "./TrackNav";
import TrackDetails from "./TrackDetails";
import TrackTable from "./TrackTable";
import TrackSVG from "./TrackSVG";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Track = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputNo, setInputNo] = useState("");
  const [fetchedData, setFetchedData] = useState("");
  const trackApi = `https://tracking.bosta.co/shipments/track/${inputNo}`;

  useEffect(() => {
    if (inputNo) {
      (async () => {
        const data = await fetch(trackApi).then((response) => response.json());
        // .catch((error) => console.log("Error: ", error));
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
      alert("Invalid number");
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
        : hours + ":" + minutes + " " + ampm;
    return timeStr;
  };

  const handleString = (s) => {
    return s.split("_").join(" ");
  };

  return (
    <div>
      <div className="track-nav">
        <TrackNav />
      </div>
      <div className="center">
        <h2>Track your shipment</h2>
        <div className="form">
          <Form.Control
            placeholder="Tracking No."
            value={inputValue}
            onChange={handleChange}
          />
          <Button variant="danger" onClick={searchBtn} disabled={!inputValue}>
            <span className="material-symbols-outlined">search</span>
          </Button>
        </div>
      </div>
      {fetchedData.error ? (
        <div className="center">
          <h3>Tracking No. {inputNo} does not exist</h3>
          <p>Wrong Tracking No. please try again!</p>
        </div>
      ) : fetchedData ? (
        <div>
          <TrackDetails
            fetchedData={fetchedData ? fetchedData : false}
            handleDate={handleDate}
            handleTime={handleTime}
            handleString={handleString}
          />
          <TrackTable
            fetchedData={fetchedData ? fetchedData : false}
            handleString={handleString}
            handleDate={handleDate}
            handleTime={handleTime}
          />
        </div>
      ) : (
        ""
      )}

      <TrackSVG />
    </div>
  );
};

export default Track;
