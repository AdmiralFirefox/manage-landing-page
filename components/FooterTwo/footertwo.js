import footerTwoStyles from "../../styles/Home.module.scss";
import footerLogo from "../../assets/footer-logo.svg";
import FooterForm from "./footerform";

function FooterTwo() {
  return (
    <div className={footerTwoStyles["footer-two-wrapper"]} id="footer-two">
      <div className={footerTwoStyles["footer-two-content"]}>
        <div className={footerTwoStyles["logo-and-social-links"]}>
          <div>
            <img src={footerLogo} alt="Footer Logo" />
          </div>
          <div className={footerTwoStyles["footer-social-links"]}>
            <div>
              <a href="/">
                <i class="fab fa-facebook-square"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i class="fab fa-pinterest"></i>
              </a>
            </div>
            <div>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={footerTwoStyles["footer-nav-links"]}>
          <div>
            <div>
              <a href="/">Home</a>
            </div>

            <div>
              <a href="/">Pricing</a>
            </div>

            <div>
              <a href="/">Product</a>
            </div>

            <div>
              <a href="/">About Us</a>
            </div>
          </div>
          <div>
            <div>
              <a href="/">Careers</a>
            </div>

            <div>
              <a href="/">Community</a>
            </div>

            <div>
              <a href="/">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div>
          <FooterForm />
        </div>
        <div className={footerTwoStyles["footer-copyright"]}>
          <p>Copyright 2020. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default FooterTwo;
