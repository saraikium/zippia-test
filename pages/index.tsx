/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading, Flex, Text } from "@theme-ui/components";
import Link from "next/link";

export default function Home() {
  return (
    <Flex
      sx={{
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        flexDirection: "column"
      }}
      p={6}
    >
      <Heading mb={2}>Zippia Test Home page</Heading>
      <Text sx={{ fontSize: 2, fontWeight: 500 }}>
        This is the Home page of the test. To check out the actual test
        implementation, go to the{" "}
        <Link href="/test/jobs">
          <a>Jobs</a>
        </Link>{" "}
        page.
      </Text>
    </Flex>
  );
}
