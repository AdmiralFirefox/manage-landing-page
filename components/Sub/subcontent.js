import subDescriptionSyles from "../../styles/Home.module.scss";
import { SubDescriptionTitleContext, SubDescriptionContentontext } from "./sub";
import React, { useContext } from "react";

function SubContent({ decriptionNumber }) {
  const descriptionTitle = useContext(SubDescriptionTitleContext);
  const descriptionContent = useContext(SubDescriptionContentontext);

  return (
    <div className={subDescriptionSyles["sub-description-wrapper"]}>
      <div className={subDescriptionSyles["sub-description-content"]}>
        <div>
          <h2>{decriptionNumber}</h2>
          <h3>{descriptionTitle}</h3>
        </div>
        <div>
          <p>{descriptionContent}</p>
        </div>
      </div>
    </div>
  );
}

export default SubContent;
