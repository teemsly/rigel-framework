import FooterComponent from "./Footer";
import FooterItem from "./FooterItem";
import FooterMenu from "./FooterMenu";

type FooterType = typeof FooterComponent;

interface IFooter extends FooterType {
  Item: typeof FooterItem;
  Menu: typeof FooterMenu;
}

const Footer = FooterComponent as IFooter;
Footer.Item = FooterItem;
Footer.Menu = FooterMenu;

export default Footer;
export * from "./Footer";
