import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from 'react-bootstrap';

const DeliveryDetails = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h5>{t("Delivery Address")}</h5>
      <p>{t("address")}</p>
      <div className="issue">
        <img
          src="https://i0.wp.com/en.hdyo.org/assets/ask-question-2-fb180173e13f21ad6ae73ba29b08cd02.jpg?resize=628%2C628"
          alt="issue-img"
          className="issue-img"
        />
        <div className="report">
          <p>{t("issue")}</p>
          <Button variant="danger">{t("rprt")}</Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
