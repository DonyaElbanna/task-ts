import React from "react";

const TrackDetails = ({
  fetchedData,
  handleString,
  handleDate,
  handleTime,
}) => {
  const status = fetchedData.CurrentStatus;

  const parseDate = (input) => {
    var parts = input.split("-");
    // Note: months are 0-based
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  const getDayName = (date, locale = "en-US") => {
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  if (fetchedData) {
    console.log(fetchedData);
  }

  return (
    <div>
      {!fetchedData ? (
        " "
        // <h3 className="center">Enter Tracking No. to track your shipment</h3>
      ) : (
        <table className="track-details">
          <thead>
            <tr>
              <th>Tracking No. {fetchedData.TrackingNumber}</th>
              <th>Last update</th>
              <th>Provider</th>
              <th>Promised Delivery date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  color: status.state.includes("SENDER")
                    ? "red"
                    : status.state.includes("DELIVERED")
                    ? "#26A65B"
                    : "orange",
                }}
              >
                {handleString(status.state)}
              </td>
              <td>
                {getDayName(parseDate(handleDate(status.timestamp)))}{" "}
                {handleDate(status.timestamp)} at {handleTime(status.timestamp)}
              </td>
              <td>{fetchedData.provider}</td>
              <td>
                {fetchedData.PromisedDate
                  ? handleDate(fetchedData.PromisedDate)
                  : ""}
              </td>
            </tr>
          </tbody>
        </table>
        // <h3>{fetchedData.CurrentStatus.state.split("_").join(" ")}</h3>
      )}
    </div>
  );
};

export default TrackDetails;
