import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loader-wrapper">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0088E6"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
