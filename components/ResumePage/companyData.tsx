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
    skills: ['Go', 'React', 'Python', 'Kubernetes', 'PostgreSQL', 'Apache Kafka'],
    bullets: ['Coming Soon 🦮'],
  },
  {
    name: 'Liberty Mutual Insurance (Solaria Labs)',
    logo: liberty.src,
    role: 'Software Developer Co-Op',
    duration: 'January 2025 - June 2025',
    website: 'https://www.libertymutual.com/',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Datadog'],
    bullets: [
      'Participated in an agile development environment with 20 weekly sprint planning sessions and collaborated with over 30 team members across engineering, product, and design team',
      'Independently led the development of 5 Liberty Mutual Guide pages, which were a critical and large-scale new feature that provided 25,000+ users with personalized how-to guides on home maintenance projects, resulting in a 35% increase in user engagement',
      'Led cross-functional team of 5 to spearhead development on AI plug-in for Earnings Report Summary Generator, reducing report generation time by 75% and processing an average of 120 financial reports weekly',
      'Selected as panelist to mentor incoming interns, sharing technical expertise and career guidance to support next-generation talent development',
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
      'Selected as panelist to mentor incoming interns, sharing technical expertise and career guidance to support next-generation talent development',
    ],
  },
];
