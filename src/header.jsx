import Profile from "./profile";
import { LoginBtn, SignupBtn } from "./logBtn";
import { Flex, Box, Grid } from "@radix-ui/themes";

const Header = () => {
  return (
    <Flex gap="2" align="center" justify="center" style={{marginTop: 25}}>
      <Profile />
      <Grid columns="1" gap="1" width="auto">
        <Box>
          <LoginBtn />
        </Box>
        <Box>
          <SignupBtn />
        </Box>
      </Grid>
    </Flex>
  );
};

export default Header;
