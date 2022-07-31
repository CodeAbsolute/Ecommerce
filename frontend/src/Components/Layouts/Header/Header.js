import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      burgerColor="#eb4034"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="#eb4034"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1ColorHover="#eb4034"
      link1Color="rgba(35, 35, 35,0.8)"
      link1Size="1.5rem"
      link1Margin="1vmax"
      searchIcon={true}
      SearchIconElement={SearchIcon}
      searchIconUrl="/search"
      searchIconColor="rgba(35, 35, 35,0.8)"
      searchIconColorHover="#eb4034"
      searchIconSize="2.5vmax"
      searchIconMargin="1vmax"
      cartIcon={true}
      CartIconElement={ShoppingCartIcon}
      cartIconUrl="/cart"
      cartIconColor="rgba(35, 35, 35,0.8)"
      cartIconColorHover="#eb4034"
      cartIconMargin="1vmax"
      cartIconSize="2.5vmax"
      profileIcon={true}
      ProfileIconElement={PersonIcon}
      profileIconColor="rgba(35, 35, 35,0.8)"
      profileIconColorHover="#eb4034"
      profileIconUrl="/account"
      profileIconSize="2.5vmax"
      profileIconMargin="1vmax"
    />
  );
};

export default Header;
