import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Sling as Hamburger } from "hamburger-react";
import NavbarContent from "./navbarcontent";
import WebLogo from "../../../assets/logo.svg";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 767 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 766 });
  return isMobile ? children : null;
};

const GetStartedNavButton = withStyles(() => ({
  root: {
    color: "#fff",
    backgroundColor: "hsl(12, 88%, 59%)",
    borderRadius: "20px",
    padding: "0.5em 0.9em",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "hsl(12, 88%, 70%)",
    },
  },
}))(Button);

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const closeMobileMenu = () => setNavbar(!navbar);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Desktop>
        <div className="app-bar-desktop-wrapper">
          <div className="desktop-web-name">
            <img src={WebLogo} alt="Web Logo" />
          </div>
          <div className="desktop-navlinks">
            <div>
              <a href="/">Pricing</a>
            </div>

            <div>
              <a href="/">Product</a>
            </div>

            <div>
              <a href="/">About Us</a>
            </div>

            <div>
              <a href="/">Careers</a>
            </div>

            <div>
              <a href="/">Community</a>
            </div>
          </div>

          <div>
            <a href="/">
              <GetStartedNavButton
                variant="contained"
                className="desktop-button"
              >
                Get Started
              </GetStartedNavButton>
            </a>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div>
          <div className="app-bar">
            <div className="app-bar-content-wrapper">
              <div className="app-bar-content">
                <img src={WebLogo} alt="Web Logo" />
              </div>
              <div className="app-bar-links">
                <div
                  onClick={closeMobileMenu}
                  className={navbar ? "nav_ham-active" : "nav_ham"}
                >
                  {navbar ? (
                    <Hamburger toggled={isOpen} easing="ease-in" />
                  ) : (
                    <Hamburger toggle={setOpen} easing="ease-in" />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Comment/Uncomment to enable backdrop */}
          {navbar ? (
            <div onClick={closeMobileMenu} className="back-drop" />
          ) : null}
          <NavbarContent show={navbar} close={closeMobileMenu} />
        </div>
      </Mobile>
    </div>
  );
}

export default Navbar;
