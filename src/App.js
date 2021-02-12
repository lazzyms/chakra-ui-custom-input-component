import { CheckIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  return (
    <Stack spacing={4} m={8}>
      <div className="searchbox">
        <label className="searchLabel">Email address</label>
        <InputGroup className="searchInput">
          <Input placeholder="Enter amount" />
          <InputRightElement
            className="searchIcon"
            children={<CheckIcon color="green.500" />}
          />
        </InputGroup>
      </div>
    </Stack>
  );
}
