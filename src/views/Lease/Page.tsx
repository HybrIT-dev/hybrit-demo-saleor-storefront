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
    { label: "Bundeltrekker", value: "Bundeltrekker" },
    { label: "Mobiele torenkraan", value: "Mobiele torenkraan" },
    { label: "Rupskraan", value: "Rupskraan" },
    { label: "Telescoopkraan", value: "Telescoopkraan" },
    { label: "Yardkraan", value: "Yardkraan" },
  ];

  const leasePeriodOptions = [
    { label: "12 Maanden", value: "12 Maanden" },
    { label: "24 Maanden", value: "12 Maanden" },
    { label: "36 Maanden", value: "12 Maanden" },
    { label: "48 Maanden", value: "12 Maanden" },
  ];

  return (
    <div className="lease-page">
      <div className="lease-title">Kraan huren</div>
      <div className="lease-description">
      Peinemann Kranen biedt diverse kranen aan welke u kunt huren voor een korte of lange periode.
      <div>Wat de klus ook is, Peinemann heeft de juiste kraan voor u beschikbaar.
      </div>
        <div>
        Vul onderstaand formulier in om een aanvraag in te dienen.
        </div>

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
              placeholder="Kraan type"
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
                placeholder="Huur periode"
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
              : intl.formatMessage({ defaultMessage: "Aanvraag indienen" })}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Page;
