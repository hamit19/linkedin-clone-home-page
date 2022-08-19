import React from "react";
import { ThreeDots } from "react-loader-spinner";

const LoadingSpinnerBtn = () => {
  return (
    <ThreeDots
      height="30"
      width="30"
      radius="9"
      color="#fff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: "absolute",
        right: "0",
        bottom: "0",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default LoadingSpinnerBtn;
