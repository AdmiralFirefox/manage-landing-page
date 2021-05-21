import CarouselContent from "../components/Carousel/carousel";
import ExtraButton from "../components/ExtraButton/extrabutton";
import FooterOne from "../components/FooterOne/footerone";
import FooterTwo from "../components/FooterTwo/footertwo";
import Main from "../components/Main/main";
import Sub from "../components/Sub/sub";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import Reveal from "react-awesome-reveal";
import { ArrowUpAnimation } from "../components/Animation";

export default function Home() {
  const [scrollToUp, setScrollToUp] = useState(false);

  const scrollingToTop = () => {
    if (window.scrollY >= 90) {
      setScrollToUp(true);
    } else {
      setScrollToUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollingToTop);
  }, []);

  return (
    <div>
      <Main />
      <Sub />
      <CarouselContent />
      <ExtraButton />
      <FooterOne />
      <FooterTwo />

      <div className={scrollToUp ? "scroll-to-up-active" : "scroll-to-up"}>
        <Reveal keyframes={ArrowUpAnimation}>
          <Link
            activeClass="active"
            to="main-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <i class="fas fa-arrow-circle-up"></i>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
