import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { Button } from "@components/atoms";
import { commonMessages } from "@temp/intl";
import { TextField } from "../TextField";

import * as S from "./styles";
import { IProps } from "./types";

export const ResetPasswordForm: React.FC<IProps> = ({
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  tokenError,
  passwordError,
  errors,
}: IProps) => {
  const intl = useIntl();
  return (
    <S.Wrapper>
      <h3>
        <FormattedMessage defaultMessage="Stel je wachtwoord opnieuw in" />
      </h3>

      <p>
        <FormattedMessage defaultMessage="Geef een nieuw wachtwoord op" />
      </p>
      {tokenError && (
        <S.GeneralError>
          <FormattedMessage defaultMessage="Het lijkt erop dat het token voor het opnieuw instellen van het wachtwoord niet meer geldig is." />
        </S.GeneralError>
      )}
      <form onSubmit={handleSubmit}>
        <S.InputFields>
          <TextField
            label={intl.formatMessage(commonMessages.password)}
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            errors={
              errors.password || passwordError
                ? [
                    {
                      field: "password",
                      message: errors.password || passwordError,
                    },
                  ]
                : undefined
            }
          />
          <TextField
            label={intl.formatMessage({
              defaultMessage: "Geef nogmaals het wachtwoord",
            })}
            onBlur={handleBlur}
            name="retypedPassword"
            onChange={handleChange}
            type="password"
            value={values.retypedPassword}
            errors={
              errors.retypedPassword
                ? [
                    {
                      field: "retypedPassword",
                      message: errors.retypedPassword,
                    },
                  ]
                : undefined
            }
          />
        </S.InputFields>

        <Button testingContext="submit" type="submit" fullWidth>
          <FormattedMessage defaultMessage="STEL NIEUW WACHTWOORD IN" />
        </Button>
      </form>
    </S.Wrapper>
  );
};
