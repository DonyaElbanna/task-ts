import React from "react";

const TrackTable = ({ fetchedData, handleString, handleDate, handleTime }) => {
  return (
    <div>
      {fetchedData ? (
        <div>
            <h4>Activity Log</h4>
          <table className="track-table">
            <thead>
              <tr>
                <th>Hub</th>
                <th>Date</th>
                <th>Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {fetchedData.TransitEvents
                // to get reversed chronological order
                // .slice(0).reverse()
                .map((event, i) => (
                  <tr key={i}>
                    <td>{event.hub && event.hub}</td>
                    <td>{handleDate(event.timestamp)}</td>
                    <td>{handleTime(event.timestamp)}</td>
                    <td>{handleString(event.state)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TrackTable;
