import { Dialog, Flex, Button, TextField, Text } from "@radix-ui/themes";

export const LoginBtn = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger style={{ minWidth: 65 }}>
          <Button>로그인</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>로그인 </Dialog.Title>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                이메일
              </Text>
              <TextField.Input
                type="email"
                defaultValue="freja@example.com"
                placeholder="이메일을 입력하세요"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                비밀번호
              </Text>
              <TextField.Input
                type="password"
                defaultValue="1234"
                placeholder="비밀번호를 입력하세요"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                회원가입
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>로그인</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export const SignupBtn = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>회원가입</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>회원가입</Dialog.Title>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                이름
              </Text>
              <TextField.Input
                type="text"
                defaultValue="홍길동"
                placeholder="이름을 입력하세요"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                이메일
              </Text>
              <TextField.Input
                type="email"
                defaultValue="freja@example.com"
                placeholder="이메일을 입력하세요"
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                비밀번호
              </Text>
              <TextField.Input
                type="password"
                defaultValue="1234"
                placeholder="비밀번호를 입력하세요"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                취소
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>회원가입</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
