/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Card,
  Divider,
  Flex,
  Heading,
  Image,
  Text
} from "@theme-ui/components";
import Job from "../interfaces/Job";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  return (
    <Card bg="white" variant="primary" p={3}>
      <Flex sx={{ flexDirection: "column", justifyContent: "start" }}>
        <div sx={{ mb: 2, height: "40px", width: "40px", textAlign: "center" }}>
          <Image
            src={job.companyLogo || "/vercel.svg"}
            width={40}
            height={40}
          />
        </div>
        <Text variant="smallHeading">{job.companyName}</Text>
        <Text variant="smallerHeading">{job.location}</Text>
        <Text variant="smallHeading">{job.jobTitle}</Text>
        <Divider />
        <Text>{job.shortDesc}...</Text>
        <Divider />
        <Flex
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text variant="smallerHeading">{job.postedDate}</Text>
          <Text variant="smallerHeading">{job.estimatedSalary}</Text>
        </Flex>
      </Flex>
    </Card>
  );
}
