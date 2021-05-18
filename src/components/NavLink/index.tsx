import * as React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { commonMessages } from "@temp/intl";

import { translateMenuItems } from "src/@next/utils/misc";

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
  const link = (url: string) => {
    let newHybritUrl;
    if (url === "/page/e-bike-lease/") {
      newHybritUrl = "/e-bike-lease/";
    } else newHybritUrl = url;
    return (
      <Link to={newHybritUrl} {...props}>
        {translateMenuItems(name, intl, commonMessages)}
      </Link>
    );
  };

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
