import React from "react";
import { useTranslation } from "react-i18next";
import { AppLayout, AppTopNavigation } from "../../shared";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <AppLayout>
      <AppTopNavigation title="Home" />

      <div style={{ textAlign: "center", padding: "40px 0", width: "100%" }}>
        <h2>{t("title")}</h2>
      </div>
    </AppLayout>
  );
};

export default Home;
