import ReactJoyride from "react-joyride";
import JoyrideSteps from "./JoyrideSteps";
import { steps } from "../constants/steps";

const Basic = () => {
  return (
    <>
      <ReactJoyride
        showSkipButton={true}
        continuous
        styles={{
          options: {
            arrowColor: "#14804A",
            backgroundColor: "#DEF7E1",
            overlayColor: "transparent",
            primaryColor: "#A3BAC3",
            textColor: "blackn",
            width: 250,
            zIndex: 200,
          },
        }}
        steps={steps}
      />
    </>
  );
};
export default Basic;
