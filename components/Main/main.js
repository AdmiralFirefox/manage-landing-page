import mainStyles from "../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";
import Illustration from "../../assets/illustration-intro.svg";
import TabletPattern from "../../assets/bg-tablet-pattern.svg";
import { Link } from "react-scroll";

function Main() {
  return (
    <div className={mainStyles["main-wrapper"]} id="main-content">
      <div className={mainStyles["main-content"]}>
        <div>
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Mange makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view
          </p>
          <Link
            activeClass="active"
            to="footer-two"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button variant="contained" className={mainStyles["main-button"]}>
              Get Started
            </Button>
          </Link>
        </div>
        <div>
          <img
            src={Illustration}
            alt="Illustration Image"
            className={mainStyles["illustration-img"]}
          />

          <img
            src={TabletPattern}
            alt="Tablet Pattern"
            className={mainStyles["tablet-pattern"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
