import { Flex, Box, Card } from "@radix-ui/themes";
import { miniitterUpload, liveUpdate } from "../firebase.js";

const List = () => {
  miniitterUpload("이것ssss은추가할ㅇㅇ것입", "sssss", "m4");
  liveUpdate();
  return (
    <Flex gap="2" direction="column" justify="center" align="center">
      <Card>df</Card>
      <Card>df</Card>
    </Flex>
  );
};

export default List;
