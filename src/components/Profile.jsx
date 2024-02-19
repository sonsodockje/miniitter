import { Card, Flex, Box, Text } from "@radix-ui/themes";

const Profile = () => {
  return (
    <>
      <Card style={{ minWidth: 140, height: 60 }}>
        <Flex gap="3" align="center" justify="center">
          <Box>
            <Text as="div" size="2" weight="bold">
              홍길동
            </Text>
            <Text as="div" size="2" color="gray">
              hong@gmail.com
            </Text>
          </Box>
        </Flex>
      </Card>
    </>
  );
};

export default Profile;
