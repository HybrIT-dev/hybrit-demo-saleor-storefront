import "./scss/index.scss";

import * as React from "react";
import { Button, Form, SelectField, TextField } from "@temp/components";
import { maybe } from "@utils/misc";
import { useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import { SelectValue } from "@temp/components/SelectField";

const Page: React.FC<{
  loading: boolean;
}> = ({ loading }) => {
  const [bikeSelection, setBikeSelection] = React.useState<any>();
  const [leasePeriodSelection, setLeasePeriodSelection] = React.useState<any>();
  const intl = useIntl();

  const bikeOptions = [
    { label: "Vogue SLX", value: "Vogue SLX" },
    { label: "Vogue Elite 7", value: "Vogue Elite 7" },
    { label: "Vogue Easy Go", value: "Vogue Easy Go" },
    { label: "Vogue Easy Go", value: "Vogue Easy Go" },
    { label: "Vogue Superior Deluxe", value: "Vogue Superior Deluxe" },
    { label: "Vogue Tri-Velo", value: "Vogue Tri-Velo" },
  ];

  const leasePeriodOptions = [
    { label: "12 Maanden", value: "12 Maanden" },
    { label: "24 Maanden", value: "12 Maanden" },
    { label: "36 Maanden", value: "12 Maanden" },
    { label: "48 Maanden", value: "12 Maanden" },
  ];

  return (
    <div className="lease-page">
      <div className="lease-title">E-bike Leasen</div>
      <div className="lease-description">
        Vul onderstaand formulier in om een lease plan op maat te ontvangen.
      </div>
      <Form
        errors={maybe(() => null, [])}
        onSubmit={(event, { email, password }) => {
          event.preventDefault();
        }}
      >
        <div className="grid-container">
          <div />
          <div className="form-cell">
            <SelectField
              onChange={e =>
                setBikeSelection((e as SelectValue).value as string)
              }
              value={bikeOptions.find(option => option.value === bikeSelection)}
              styles={{
                control: base => ({
                  ...base,
                }),
              }}
              options={bikeOptions}
              placeholder="E-Bike type"
            />
          </div>
          <div className="grid-container-period">
            <div className="form-cell-sm">
              <SelectField
                onChange={e =>
                  setLeasePeriodSelection((e as SelectValue).value as string)
                }
                value={leasePeriodOptions.find(
                  option => option.value === leasePeriodSelection
                )}
                styles={{
                  control: base => ({
                    ...base,
                  }),
                }}
                options={leasePeriodOptions}
                placeholder="Lease periode"
              />
            </div>
            <div />
          </div>
          <div />
          <div />
          <TextField name="firstName" label="Voornaam" type="text" required />
          <TextField name="lastName" label="Achternaam" type="text" required />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <TextField
            name="password"
            autoComplete="email"
            label="Email"
            type="email"
            required
          />
          <div />
          <div />
          <div />
          Geboortedatum
          <div />
          <div />
          <div />
          <div className="grid-container-birth">
            <TextField name="day" label="Dag" type="text" required />
            <TextField name="month" label="Maand" type="text" required />
            <TextField name="year" label="Jaar" type="text" required />
          </div>
          <div />
          <div />
          <div />
          <TextField name="street" label="Straat" type="text" required />
          <div className="grid-container-period">
            <TextField name="housenr" label="Nr" type="text" required />
          </div>
          <div />
          <div />
          <TextField name="city" label="Plaats" type="text" required />
          <div className="grid-container-period">
            <TextField name="zipcode" label="Postcode" type="text" required />
          </div>
          <div />
          <div />
          <TextField name="phone" label="Telefoon" type="text" required />
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
