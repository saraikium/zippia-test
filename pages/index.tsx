/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Card, Heading, Flex, Text } from "@theme-ui/components";
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
    >
      <Card mt={4}>
        <Heading mb={2}>Zippia Test Home page</Heading>
        <Text>
          This is the Home page of the test. To check out the actual test
          implementation, go to the <Link href="/test/jobs">Jobs</Link> page.
        </Text>
      </Card>
    </Flex>
  );
}
