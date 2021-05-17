import "./scss/index.scss";

// import classNames from "classnames";
import * as React from "react";
import { Button, Form, SelectField, TextField } from "@temp/components";
import { maybe } from "@utils/misc";
import { useIntl } from "react-intl";
// import { Link } from "react-router-dom";

import { commonMessages } from "@temp/intl";
import { SelectValue } from "@temp/components/SelectField";
// import { Button, Loader } from "../../components";

// import {
//   ProductsList_categories,
//   ProductsList_shop,
//   ProductsList_collection_backgroundImage,
// } from "./gqlTypes/ProductsList";

const Page: React.FC<{
  loading: boolean;
}> = ({ loading }) => {
  const [bikeSelection, setBikeSelection] = React.useState<any>();
  const intl = useIntl();

  const bikeOptions = [
    { label: "Vogue SLX", value: "Vogue SLX" },
    { label: "Vogue Elite", value: "Vogue Elite" },
  ];

  return (
    <div className="lease-page">
      <Form
        errors={maybe(() => null, [])}
        onSubmit={(event, { email, password }) => {
          event.preventDefault();
          // const redirectUrl = `${window.location.origin}${accountConfirmUrl}`;
          // registerCustomer({ variables: { email, password, redirectUrl } });
        }}
      >
        <div className="grid-container">
          <SelectField
            onChange={e => setBikeSelection((e as SelectValue).value as string)}
            value={bikeOptions.find(option => option.value === bikeSelection)}
            styles={{
              control: base => ({
                ...base,
                border: 0,
                boxShadow: "none",
                minWidth: "80px",
              }),
            }}
            options={bikeOptions}
          />
          {bikeSelection && `${bikeSelection}`}
          <TextField
            name="firstName"
            // label={intl.formatMessage(commonMessages.eMail)}
            label="First Name"
            type="text"
            required
          />
          <div />
          <TextField
            name="lastName"
            // label={intl.formatMessage(commonMessages.eMail)}
            label="Last Name"
            type="text"
            required
          />
          <div />
          <TextField
            name="email"
            autoComplete="email"
            label={intl.formatMessage(commonMessages.eMail)}
            type="email"
            required
          />
          <TextField
            name="password"
            autoComplete="password"
            label={intl.formatMessage(commonMessages.password)}
            type="password"
            required
          />
        </div>
        <div className="login__content__button">
          <Button
            testingContext="submitRegisterFormButton"
            type="submit"
            {...(loading && { disabled: true })}
          >
            {loading
              ? intl.formatMessage(commonMessages.loading)
              : intl.formatMessage({ defaultMessage: "Registreren" })}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Page;
