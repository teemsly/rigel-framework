import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Card, Form, Input } from "teemsly";
import { HeaderContent, Logo } from "../../components";
import { routerName } from "../../routers";
import { AppFooter } from "../../shared";
import { addClassName } from "../../utils";

const ForgotPassword = () => {
  const { t } = useTranslation("forgot-password");

  return (
    <div className={addClassName("forgot-password-layout")}>
      <div className={addClassName("forgot-password-header")}>
        <Logo alt="teemsly-logo" />
        <div>
          <Link
            to={routerName.login}
            className={addClassName([
              "forgot-password-button",
              "forgot-password-login-button",
            ])}
          >
            {t("loginText")}
          </Link>
          <Link
            to={routerName.signup}
            className={addClassName([
              "forgot-password-button",
              "forgot-password-signup-button",
            ])}
          >
            {t("signupText")}
          </Link>
        </div>
      </div>
      <div className={addClassName("forgot-password-content")}>
        <Form
          onSubmit={(e: any) => {
            e.preventDefault();
            alert("submit action");
          }}
        >
          <Card>
            <Card.Body>
              <HeaderContent
                heading={t("heading")}
                subheading={t("subheading")}
              />

              <Form.Group>
                <Input name="email" size="lg" placeholder={t("fields.email")} />
              </Form.Group>

              <Form.Group>
                <Button appearance="primary" size="lg" type="submit">
                  {t("actionButton")}
                </Button>
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </div>
      <AppFooter />
    </div>
  );
};

export default ForgotPassword;
