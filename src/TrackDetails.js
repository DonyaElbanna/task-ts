import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  return (
    <div>
      <table className="track-details">
        <thead>
          <tr>
            <th>
              {t("trno")} {fetchedData.TrackingNumber}
            </th>
            <th>{t("latest")}</th>
            <th>{t("prv")}</th>
            <th>{t("dlvdt")}</th>
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
              {t(status.state)}
            </td>
            <td>
              {t(getDayName(parseDate(handleDate(status.timestamp))))}{'\u00A0'}
              {handleDate(status.timestamp)} {t("at")}{' '}
              {i18n.language === "ar"
                ? handleTime(status.timestamp).split(" ")
                : handleTime(status.timestamp)}
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
    </div>
  );
};

export default TrackDetails;
