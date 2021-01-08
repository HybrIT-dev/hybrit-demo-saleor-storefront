import "./scss/index.scss";

import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../core/config";
import Button from "../Button";

interface NotFoundProps {
  message?: string;
}

const NotFound: React.FC<NotFoundProps> = () => (
  <div className="not-found-page">
    <h2 className="not-found-page__header">
      <FormattedMessage defaultMessage="404" />
    </h2>
    <div className="not-found-page__ruler" />
    <div className="not-found-page__message">
      <p>
        <FormattedMessage defaultMessage="We kunnen een pagina die u zoekt niet vinden!" />{" "}
      </p>
      <p>
        <FormattedMessage defaultMessage="Mogelijk hebt u het adres verkeerd getypt of is de pagina verplaatst." />{" "}
      </p>
      <p>
        <FormattedMessage defaultMessage="Het spijt ons voor de fout en we hopen dat u een fijne dag zult hebben." />
      </p>
    </div>
    <div className="not-found-page__button">
      <Link to={BASE_URL}>
        <Button testingContext="404pageGotoHomeButton" secondary>
          <FormattedMessage defaultMessage="Terug naar huis" />
        </Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
