import React from "react";
import { useTranslation } from "react-i18next";
import { AppLayout, AppTopNavigation } from "../../shared";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <AppLayout>
      <AppTopNavigation title="Home" />

      <div style={{ textAlign: "center", padding: "40px 0", width: "100%" }}>
        <h3 style={{ fontWeight: 500, fontSize: "24px" }}>{t("title")}</h3>
        <div>Check out any upcoming tasks and recent projects below!</div>
      </div>
    </AppLayout>
  );
};

export default Home;
