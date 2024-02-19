import { TextField, Flex, Box, Button } from "@radix-ui/themes";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswored] = useState("");

  return (
    <Box style={{ width: "300px" }}>
      <Flex gap="2" direction="column">
        <TextField.Root>
          <TextField.Input
            placeholder="이메일"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input
            placeholder="비밀번호"
            type="password"
            onChange={(e) => setPasswored(e.target.value)}
          />
        </TextField.Root>
        <Button
          onClick={() => {
            console.log(email, password);
          }}
        >
          로그인
        </Button>
      </Flex>
    </Box>
  );
};

export default Login;
