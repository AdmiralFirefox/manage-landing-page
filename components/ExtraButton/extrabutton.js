import extrabuttonStyles from "../../styles/Home.module.scss";
import Button from "@material-ui/core/Button";

function ExtraButton() {
  return (
    <div className={extrabuttonStyles["extra-button-wrapper"]}>
      <Button variant="contained" className={extrabuttonStyles["extra-button"]}>
        Get Started
      </Button>
    </div>
  );
}

export default ExtraButton;
