/** @jsxRuntime classic */
/** @jsx jsx */
import { ChangeEvent, useMemo, useState } from "react";
import { jsx } from "theme-ui";
import { Grid, Flex, Heading, Button, Select } from "@theme-ui/components";
import JobCard from "../../components/jobCard";
import Job from "../../interfaces/Job";

interface Props {
  jobs: Job[];
}

const increment = 10;

export default function Jobs({ jobs }: Props) {
  const [jobsToShow, setJobsToShow] = useState(jobs.slice(0, increment));
  const [companyFilter, setCompanyFilter] = useState(false);
  const [sevenDayFilter, setSevenDayFilter] = useState(false);

  // Since we have a single API call, we don't wanna calculate this on every single time
  // Seven day filter is applied

  const { jobsInLastWeek, companyNames } = useMemo(() => {
    const jobsInLastWeek = jobs.filter((job) => {
      const datePosted = job.postedDate.trim();
      if (datePosted[1] === "h") {
        return true;
      } else if (datePosted[1] === "d") {
        return Number.parseInt(datePosted[0]) <= 7;
      } else {
        return false;
      }
    });

    const companyNames = Array.from(
      new Set(jobs.map((job) => job.companyName))
    );

    return { jobsInLastWeek, companyNames };
  }, [jobs]);

  const showJobsInLastWeek = () => {
    setSevenDayFilter(true);
    setJobsToShow(jobsInLastWeek);
  };

  const clearWeekFilter = () => {
    setSevenDayFilter(false);
    setJobsToShow(jobs.slice(0, increment));
  };

  const showMore = () => {
    const currentLength = jobsToShow.length;
    setJobsToShow([
      ...jobsToShow,
      ...jobs.slice(currentLength, currentLength + increment)
    ]);
  };

  const clearCompanyFilter = () => {
    setJobsToShow(jobs.slice(0, increment));
    setCompanyFilter(false);
  };

  const onSelectCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (value.toLowerCase() === "all") {
      clearCompanyFilter();
      return;
    }
    setCompanyFilter(true);
    setJobsToShow(jobs.filter((job) => job.companyName === value));
  };

  return (
    <Flex sx={{ flexDirection: "column" }} p={4}>
      <Heading as="h2" my={4} sx={{ textTransform: "uppercase", fontSize: 5 }}>
        Developer jobs near me
      </Heading>
      <Flex sx={{ justifyContent: "start", alignItems: "center" }} mt={2}>
        <Select
          variant="primary"
          mr={4}
          sx={{
            minWidth: 180,
            fontFamily: "system-ui",
            border: "1px solid tomato"
          }}
          onChange={onSelectCompany}
        >
          <option sx={{ fontFamily: "system-ui" }}>All</option>
          {companyNames.map((name) => (
            <option sx={{ fontFamily: "system-ui" }} value={name} key={name}>
              {name}
            </option>
          ))}
        </Select>
        <Button
          variant="primary"
          onClick={sevenDayFilter ? clearWeekFilter : showJobsInLastWeek}
        >
          {sevenDayFilter ? "Show all jobs " : "Jobs in last week"}
        </Button>
      </Flex>
      <Grid
        my={4}
        gap={2}
        columns={[
          "repeat(1, minmax(246px,1fr))",
          "repeat(2, minmax(246px,1fr))",
          "repeat(3, minmax(246px,1fr))",
          "repeat(4, minmax(246px,1fr))"
        ]}
      >
        {jobsToShow.map((job) => {
          return <JobCard job={job} key={job.jobId} />;
        })}
      </Grid>
      {jobsToShow.length < jobs.length && !sevenDayFilter && !companyFilter ? (
        <Button
          sx={{ alignSelf: "center", cursor: "pointer" }}
          onClick={showMore}
        >
          Show More Jobs
        </Button>
      ) : null}
    </Flex>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://www.zippia.com/api/jobs/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 20,
      previousListingHashes: []
    })
  });

  if (!res.ok) {
    return {
      props: {
        jobs: []
      }
    };
  }

  const { jobs } = await res.json();

  return {
    props: {
      jobs
    }
  };
}
