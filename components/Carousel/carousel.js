import React, { createContext } from "react";
import { AvatarName, CarouselData } from "./carouseldata";
import Button from "@material-ui/core/Button";
import CarouselUI from "./carouselui";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AvatarAli from "../../assets/avatar-ali.png";
import AvatarAnisha from "../../assets/avatar-anisha.png";
import AvatarRichard from "../../assets/avatar-richard.png";
import AvatarShanai from "../../assets/avatar-shanai.png";

export const AvatarContext = createContext();
export const AvatarNameContext = createContext();
export const CarouselDataContext = createContext();

function CarouselContent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-position">
        <div className="carousel-content">
          <h2> What they've said </h2>
          <Slider {...settings}>
            <div>
              <AvatarContext.Provider value={AvatarAli}>
                <AvatarNameContext.Provider value={AvatarName.ali}>
                  <CarouselDataContext.Provider value={CarouselData.ali}>
                    <CarouselUI />
                  </CarouselDataContext.Provider>
                </AvatarNameContext.Provider>
              </AvatarContext.Provider>
            </div>
            <div>
              <AvatarContext.Provider value={AvatarRichard}>
                <AvatarNameContext.Provider value={AvatarName.richard}>
                  <CarouselDataContext.Provider value={CarouselData.richard}>
                    <CarouselUI />
                  </CarouselDataContext.Provider>
                </AvatarNameContext.Provider>
              </AvatarContext.Provider>
            </div>
            <div>
              <AvatarContext.Provider value={AvatarShanai}>
                <AvatarNameContext.Provider value={AvatarName.shanai}>
                  <CarouselDataContext.Provider value={CarouselData.shanai}>
                    <CarouselUI />
                  </CarouselDataContext.Provider>
                </AvatarNameContext.Provider>
              </AvatarContext.Provider>
            </div>
            <div>
              <AvatarContext.Provider value={AvatarAnisha}>
                <AvatarNameContext.Provider value={AvatarName.anisha}>
                  <CarouselDataContext.Provider value={CarouselData.anisha}>
                    <CarouselUI />
                  </CarouselDataContext.Provider>
                </AvatarNameContext.Provider>
              </AvatarContext.Provider>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CarouselContent;
