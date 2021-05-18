import React from "react";

import tweeDames from "../../images/voguefietstweedames.jpg";
import dame from "../../images/Vogue_bikes_bg2.jpg";
import fbDame from "../../images/Facebook-vogue-elektrische-fietsen.png";

export const visconImages = [dame, tweeDames, fbDame];

export const mappedBackgrounds = visconImages.map(img => {
  return {
    backgroundImage: `url(${img})`,
    WebkitTransition: "background-image 1s",
    transition: "background-image 1s",
    // top: 10000,
    // left: 0,
    // width: "100%",
    // height: "100%",
  };
});

export const PreRenderImages = ({ val }) => {
  const children = ".";
  const defaultProps = {
    maxHeight: "1px",
    maxWidth: "1px",
    zIndex: -1,
    color: "#009ee3",
    MozColor: "#009ee3",
    visibility: val,
  } as React.CSSProperties;
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${tweeDames})`,
          ...defaultProps,
        }}
      >
        {children}
      </div>
      <div
        style={{
          backgroundImage: `url(${fbDame})`,
          ...defaultProps,
        }}
      >
        {children}
      </div>
      <div
        style={{
          backgroundImage: `url(${dame})`,
          ...defaultProps,
        }}
      >
        {children}
      </div>
    </div>
  );
};
