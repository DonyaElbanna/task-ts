import { useTranslation } from "react-i18next";

interface Props {
  fetchedData?:
    | any
    | {
        CurrentStatus: {
          state: string;
          timestamp: string;
        };
        TrackingNumber: string;
        provider: string;
        PromisedDate: string;
        TransitEvents: any;
      };
  handleDate: Function;
  handleTime: Function;
}

const TrackTable = ({
  fetchedData,
  handleDate,
  handleTime,
}: Props): JSX.Element => {
  const { t, i18n } = useTranslation();
  return (
    <>
      {fetchedData ? (
        <div>
          <h5 className="activity">{t("activity")}</h5>
          <table
            className="track-table"
            style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
          >
            <thead>
              <tr>
                <th>{t("hub")}</th>
                <th>{t("date")}</th>
                <th>{t("time")}</th>
                <th>{t("details")}</th>
              </tr>
            </thead>
            <tbody>
              {fetchedData.TransitEvents
                // to get reversed chronological order
                // .slice(0).reverse()
                .map((event: any, i: number) => (
                  <tr key={i}>
                    <td>{event.hub && t(event.hub)}</td>
                    <td>{handleDate(event.timestamp)}</td>
                    <td>
                      {i18n.language === "ar"
                        ? handleTime(event.timestamp).split(" ")
                        : handleTime(event.timestamp)}
                    </td>
                    <td>
                      {t(event.state)}
                      <p
                        style={{
                          color:
                            fetchedData.CurrentStatus.state === "DELIVERED"
                              ? "#26a65b"
                              : "#dc3545",
                        }}
                      >
                        {event.reason && t("reason")}
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TrackTable;
