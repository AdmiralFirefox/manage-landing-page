import footerOneStyles from "../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";

function FooterOne() {
  return (
    <div className={footerOneStyles["footer-one-wrapper"]}>
      <div className={footerOneStyles["footer-one-content"]}>
        <div>
          <h1>Simplify how your team works today.</h1>
        </div>

        <div>
          <Button
            variant="contained"
            className={footerOneStyles["footer-one-button"]}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FooterOne;
