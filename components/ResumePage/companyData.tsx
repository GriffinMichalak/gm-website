import datadog from '../../assets/datadog.png';
import hanover from '../../assets/hanover.png';
import liberty from '../../assets/liberty.png';
import verizon from '../../assets/verizon.png';

export const companies = [
  {
    name: 'Datadog',
    logo: datadog.src,
    role: 'Software Engineer Intern',
    duration: 'June 2025 - Aug 2025',
    website: 'https://www.datadoghq.com/',
    skills: ['JavaScript', 'React', 'Node.js', 'AWS'],
    bullets: ['Coming Soon 🦮'],
  },
  {
    name: 'Liberty Mutual',
    logo: liberty.src,
    role: 'Software Developer Co-Op',
    duration: 'January 2025 - June 2025',
    website: 'https://www.libertymutual.com/',
    skills: ['React.js', 'Express.js', 'Node.js', 'TypeScript', 'Git'],
    bullets: [
      'Implemented many tickets for the Liberty+ Application to assist homeowners with the maintenance and care of their homes',
      'Led development of About Us and Learn pages for ease of understanding for users',
      'Spearheaded development of LibertyGPT AI plug-in for Earnings Report Summary Generator',
    ],
  },
  {
    name: 'Hanover Insurance Group',
    logo: hanover.src,
    role: 'Software Engineer Intern',
    duration: 'June 2024 - Aug 2024',
    website: 'https://www.hanover.com/',
    skills: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Azure'],
    bullets: [
      'Spearheaded development of full-stack Angular application that streamlined the submission process for software requests from stakeholders and increased efficiency by 90%',
      'Automated metadata injection with policy forms via Angular Document Builder Tool, increasing form completion efficiency by 50%',
      'Uncovered and addressed 500+ long-standing bugs in software systems impacting company solutions',
      'Actively participated in solutions and architectural design discussions, led team reviews of designs, and presented on a key concept in software',
    ],
  },
  {
    name: 'Verizon',
    logo: verizon.src,
    role: 'Software & Network Engineer Co-Op',
    duration: 'January 2024 - June 2024',
    website: 'https://www.verizon.com/',
    skills: ['ASP.NET', 'JavaScript', 'C#', 'HTML', 'CSS', 'Python', 'SQL'],
    bullets: [
      'Developed robust, full-stack Microsoft .NET application extracting project budgeting data from SQL Server in < 1 second; optimized server-side processing for data analyses enabling seamless access for 500+ employees',
      'Automated data base operations, increasing operational efficiency by 20% through 200+ CRUD operations, 20 triggers, and 10 procedures',
      'Streamlined analysis for 1000+ Superbowl 58 network KPIs against industry rivals by implementing a data extraction and Python visualization script, reducing computation time by 50%',
      'Conducted code reviews, browser tests and frequent pairing sessions to ensure code quality',
    ],
  },
];
