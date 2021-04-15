import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <div style={{ textAlign: "center", padding: "40px 0", width: "100%" }}>
      <h2>{t("title")}</h2>
    </div>
  );
};

export default Home;
