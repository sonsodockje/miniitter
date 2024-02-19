import { Flex, Box, Card, TextArea, Button } from "@radix-ui/themes";
import { miniitterUpload, liveUpdate } from "../firebase.js";

const List = () => {
  miniitterUpload("이것ssss은추가할ㅇㅇ것입", "sssss", "m4");
  liveUpdate();
  return (
    <Flex gap="2" direction="column" justify="center" align="center" style={{ marginTop: 18 }}>
      <Card style={{ minWidth: 320 }}>
        <Flex direction="column" align="end">
          <TextArea style={{ minWidth: 300 }} placeholder="내용을 작성하세요" />
          <Button style={{ maxWidth: 70, marginTop: 4}}>업로드</Button>
        </Flex>
      </Card>
      <Card style={{ minWidth: 320 }}>
        df
      </Card>
    </Flex>
  );
};

export default List;
