import subStyles from "../../styles/Home.module.scss";
import SubContent from "./subcontent";
import { SubDescriptionTitle, SubDescriptionContent } from "./subdata";
import React, { createContext } from "react";
import TabletPattern from "../../assets/bg-tablet-pattern.svg";

export const SubDescriptionTitleContext = createContext();
export const SubDescriptionContentontext = createContext();

function Sub() {
  return (
    <div className={subStyles["sub-wrapper"]}>
      <div className={subStyles["sub-content"]}>
        <div className={subStyles["sub-title"]}>
          <h1>What's different about Manage?</h1>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
          <img
            src={TabletPattern}
            alt="Tablet Pattern"
            className={subStyles["sub-tablet-pattern"]}
          />
        </div>
        <div>
          <SubDescriptionTitleContext.Provider
            value={SubDescriptionTitle.titleOne}
          >
            <SubDescriptionContentontext.Provider
              value={SubDescriptionContent.descriptionOne}
            >
              <SubContent decriptionNumber="1" />
            </SubDescriptionContentontext.Provider>
          </SubDescriptionTitleContext.Provider>

          <SubDescriptionTitleContext.Provider
            value={SubDescriptionTitle.titleTwo}
          >
            <SubDescriptionContentontext.Provider
              value={SubDescriptionContent.descriptionTwo}
            >
              <SubContent decriptionNumber="2" />
            </SubDescriptionContentontext.Provider>
          </SubDescriptionTitleContext.Provider>
          <SubDescriptionTitleContext.Provider
            value={SubDescriptionTitle.titleThree}
          >
            <SubDescriptionContentontext.Provider
              value={SubDescriptionContent.descriptionThree}
            >
              <SubContent decriptionNumber="3" />
            </SubDescriptionContentontext.Provider>
          </SubDescriptionTitleContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default Sub;
