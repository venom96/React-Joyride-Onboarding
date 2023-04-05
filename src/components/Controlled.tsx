import ReactJoyride, { Step } from "react-joyride";
import { useMount, useSetState } from "react-use";
import JoyrideSteps from "./JoyrideSteps";
import { useState } from "react";

interface State {
  run: boolean;
  steps: Step[];
}

const Controlled = () => {
  const [{ run, steps }, setState] = useSetState<State>({
    run: false,
    steps: [],
  });

  const [stepIndex, setStepIndex] = useState<number>(0);

  const handleCallbackFlow = () => {
    setStepIndex(stepIndex + 1);
  };
  useMount(() => {
    setState({
      run: true,
      steps: [
        {
          target: ".first-step",
          content: "This is my awesome feature no. 1",
          disableBeacon: true,
          hideCloseButton: false,
          hideFooter: true,
          spotlightClicks: true,
        },
        {
          target: ".second-step",
          content: "This is my awesome feature no. 2",
          disableBeacon: true,
          hideCloseButton: true,
          hideFooter: true,
          spotlightClicks: true,
        },
        {
          target: ".third-step",
          content: "This is my awesome feature no. 3",
          disableBeacon: true,
          hideCloseButton: true,
          hideFooter: true,
          spotlightClicks: true,
        },
        {
          target: ".fourth-step",
          content: "This is my awesome feature no. 4",
          disableBeacon: true,
          hideCloseButton: true,
          hideFooter: true,
          spotlightClicks: true,
        },
      ],
    });
  });
  return (
    <>
      <JoyrideSteps handleCallbackFlow={handleCallbackFlow} />
      <ReactJoyride
        showSkipButton={true}
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
export default Controlled;
