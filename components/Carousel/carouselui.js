import React, { useContext } from "react";
import {
  AvatarContext,
  AvatarNameContext,
  CarouselDataContext,
} from "./carousel";
import carouselUIStyles from "../../styles/Home.module.scss";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

function CarouselUI() {
  const avatar = useContext(AvatarContext);
  const avatarName = useContext(AvatarNameContext);
  const carouselData = useContext(CarouselDataContext);

  return (
    <div className={carouselUIStyles["carousel-ui-wrapper"]}>
      <div className={carouselUIStyles["carousel-ui-position"]}>
        <div className={carouselUIStyles["carousel-ui-content"]}>
          <img src={avatar} alt="Carousel Avatar" />
          <CardActionArea>
            <Card id={carouselUIStyles["card-ui"]}>
              <h3>{avatarName}</h3>
              <p>"{carouselData}"</p>
            </Card>
          </CardActionArea>
        </div>
      </div>
    </div>
  );
}

export default CarouselUI;
