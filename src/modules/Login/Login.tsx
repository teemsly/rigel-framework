import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Card, Form, Input } from "teemsly";
import Logo from "../../assets/images/logo/logo-128.png";
import { HeaderContent } from "../../components";
import { AppFooter } from "../../shared";
import { routerName } from "../../routers";

function Login() {
  const { t } = useTranslation("login");

  return (
    <div className="ts-login-layout">
      <div className="ts-login-content">
        <div className="ts-login-card">
          <img src={Logo} alt="teemsly" className="ts-login-logo" />
          <Form
            onSubmit={(e: any) => {
              e.preventDefault();
              alert("login submited");
            }}
          >
            <Card>
              <Card.Body>
                <HeaderContent
                  heading={t("heading")}
                  subheading={t("subheading")}
                />

                <Form.Group id="email">
                  <Input
                    size="xl"
                    placeholder={t("emailAddress")}
                    name="email"
                    autoFocus
                  />
                </Form.Group>

                <Form.Group id="password">
                  <Input
                    size="xl"
                    type="password"
                    placeholder={t("password")}
                    name="password"
                  />
                </Form.Group>

                <Link
                  className="ts-login-forgot-password-link"
                  to={routerName?.forgotPassword}
                >
                  {t("forgotPassword")}
                </Link>

                <Button
                  className="ts-login-button"
                  size="lg"
                  appearance="primary"
                  type="submit"
                  block
                >
                  {t("loginButton")}
                </Button>
              </Card.Body>
            </Card>
          </Form>
          <div className="ts-login-signup-action">
            {t("signupText")}{" "}
            <Link to={routerName.signup}>
              <b>{t("signupAction")}</b>
            </Link>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default Login;
