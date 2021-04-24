import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Card, Form, Input } from "teemsly";
import { HeaderContent } from "../../components";
import { routerName } from "../../routers";
import { AppFooter } from "../../shared";
import { addClassName } from "../../utils";
import Logo from "../../assets/images/logo/logo-128.png";

const Signup = () => {
  const { t } = useTranslation("signup");

  return (
    <div className={addClassName("signup-layout")}>
      <div className={addClassName("signup-content")}>
        <div className={addClassName("signup-card")}>
          <img
            src={Logo}
            alt="teemsly"
            className={addClassName("signup-logo")}
          />
          <Form
            onSubmit={(e: any) => {
              e.preventDefault();
              alert("signup submited");
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
                    placeholder={t("fields.email")}
                    name="email"
                    autoFocus
                  />
                </Form.Group>

                <Form.Group id="password">
                  <Input
                    size="xl"
                    type="password"
                    placeholder={t("fields.password")}
                    name="password"
                  />
                </Form.Group>

                <Form.Group id="password">
                  <Input
                    size="xl"
                    placeholder={t("fields.companyName")}
                    name="company_name"
                  />
                </Form.Group>

                <p className={addClassName("signup-aggrement")}>
                  <Trans
                    i18nKey="signup:aggrement"
                    values={{
                      privacy: t("privacyPolicy"),
                      terms: t("termsOfService"),
                    }}
                    components={[
                      <Link
                        to="/privacy"
                        className={addClassName("signup-link-aggrement")}
                      >
                        {t("privacyPolicy")}
                      </Link>,
                      <Link
                        to="/terms"
                        className={addClassName("signup-link-aggrement")}
                      >
                        {t("termsOfService")}
                      </Link>,
                    ]}
                  />
                </p>

                <Button
                  className={addClassName("signup-button")}
                  size="lg"
                  appearance="primary"
                  type="submit"
                  block
                >
                  {t("signupButton")}
                </Button>
              </Card.Body>
            </Card>
          </Form>
          <div className={addClassName("signup-login-action")}>
            {t("alreadyAccountQuestion")}{" "}
            <Link to={routerName.login}>
              <b>{t("loginText")}</b>
            </Link>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Signup;
