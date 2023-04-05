import { Stack, Button } from "@mui/material";

type Props = {
  Switcher: Function;
};
const Selector: React.FC<Props> = ({ Switcher }) => {
  return (
    <>
      <Stack>
        <Button variant="text" onClick={Switcher(1)}>
          Basic
        </Button>
        <Button variant="text" onClick={Switcher(2)}>
          Controlled
        </Button>
      </Stack>
    </>
  );
};
