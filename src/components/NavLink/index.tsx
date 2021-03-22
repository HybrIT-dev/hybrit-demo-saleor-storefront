import * as React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";

import { hybritMainMenuItems } from "@utils/misc";
import {
  generateCategoryUrl,
  generateCollectionUrl,
  generatePageUrl,
} from "../../core/utils";
import {
  SecondaryMenu_menu_items,
  SecondaryMenu_menu_items_children,
} from "../Footer/gqlTypes/SecondaryMenu";
import { MainMenu_menu_items } from "../MainMenu/gqlTypes/MainMenu";
import { MainMenuSubItem } from "../MainMenu/gqlTypes/MainMenuSubItem";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  item:
    | MainMenu_menu_items
    | MainMenuSubItem
    | SecondaryMenu_menu_items
    | SecondaryMenu_menu_items_children;
}
export const NavLink: React.FC<NavLinkProps> = ({ item, ...props }) => {
  const intl = useIntl();
  const { name, url, category, collection, page } = item;
  const link = (url: string) => (
    <Link to={url} {...props}>
      {name === hybritMainMenuItems.HYBRIT_COLLECTION
        ? intl.formatMessage(commonMessages.hybritCollection)
        : name === hybritMainMenuItems.DRANKJES
        ? intl.formatMessage(commonMessages.drinks)
        : name === hybritMainMenuItems.KANTOOR
        ? intl.formatMessage(commonMessages.office)
        : name === hybritMainMenuItems.KEUKEN
        ? intl.formatMessage(commonMessages.kitchen)
        : name}
    </Link>
  );

  if (url) {
    return (
      <a href={url} {...props}>
        {name}
      </a>
    );
  }
  if (category) {
    return link(generateCategoryUrl(category.id, category.name));
  }
  if (collection) {
    return link(generateCollectionUrl(collection.id, collection.name));
  }
  if (page) {
    return link(generatePageUrl(page.slug));
  }

  return <span {...props}>{name}</span>;
};
