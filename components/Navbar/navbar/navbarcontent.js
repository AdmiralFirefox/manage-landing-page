import Reveal from "react-awesome-reveal";
import { NavbarAnimation } from "../../Animation";

function NavbarContent({ show, close }) {
  return (
    <div>
      <div
        style={{
          transform: show ? "translateX(0)" : "translateX(-150vh)",
          opacity: show ? "1" : "0",
        }}
        className="navbar-wrapper" /* Wraps the whole sidebar content*/
      >
        <div className="navbar-content">
          <Reveal
            cascade
            keyframes={NavbarAnimation}
            duration={400}
            triggerOnce
            className="nav_components"
          >
            <a href="/" onClick={close}>
              Pricing
            </a>

            <a href="/" onClick={close}>
              Product
            </a>

            <a href="/" onClick={close}>
              About Us
            </a>

            <a href="/" onClick={close}>
              Careers
            </a>

            <a href="/" onClick={close}>
              Community
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default NavbarContent;
