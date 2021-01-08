import * as React from "react";
import { FormattedMessage } from "react-intl";

export const NothingFound: React.FC<{ search: string }> = ({ search }) => {
  return (
    <div className="search__products--not-found">
      <p className="u-lead u-lead--bold u-uppercase">
        <FormattedMessage
          defaultMessage="Sorry, maar we konden geen zoekresultaten vinden voor: {search}"
          values={{ search }}
        />
      </p>
      <p>
        <FormattedMessage defaultMessage="Geef niet op - controleer de spelling, bedenk iets minder specifiek en gebruik dan de zoekbalk hierboven." />
      </p>
    </div>
  );
};

export default NothingFound;
