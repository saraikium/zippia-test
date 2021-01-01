export default interface Job {
  jobId: string;
  jobTitle: string;
  companyName: string;
  shortDesc: string;
  companyLogo?: string;
  estimatedSalary: string;
  postedDate: string;
  location: string;
  skillsets: string[];
}
