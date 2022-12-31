import { ThreeDots } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#564da9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)" }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default LoadingSpinner;
