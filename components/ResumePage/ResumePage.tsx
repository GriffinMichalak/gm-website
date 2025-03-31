import classes from './ResumePage.module.scss';
import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Image,
  List,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import datadog from '../../assets/datadog.png';
import hanover from '../../assets/hanover.png';
import liberty from '../../assets/liberty.png';
import northeastern from '../../assets/northeastern.png';
import verizon from '../../assets/verizon.png';

export default function ResumePage() {
  const companies = [
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
        'Implemented many tickets for the Liberty+ Application to assist homeownwers with the maintenance and care of their homes',
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

  const education = [
    {
      school: 'Northeastern University',
      degree: 'Bachelor of Science in Computer Science',
      duration: 'Sept 2022 - May 2026',
      website: 'https://www.northeastern.edu/',
    },
  ];

  const isMobile = useMediaQuery('(max-width: 414px)');

  return (
    <Container size="md" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title order={1} mb="lg">
        Resume
      </Title>
      <Text size="lg" mb="xl">
        Here are some of the companies I've worked at and the roles I've held, along with my
        educational background.
      </Text>
      <Button
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/1gtE3lz-m0UUGoZ4m0bh2FyrPcuusvpmc/view',
            '_blank'
          )
        }
        mb={20}
        fullWidth={isMobile}
        variant="outline"
      >
        View PDF Resume
      </Button>

      <Title order={2} mb="sm">
        Education
      </Title>
      <Stack mb={20}>
        {education.map((edu, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
            <Group align="center">
              <a
                href={edu.website}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.logoLink}
              >
                <Image
                  src={northeastern.src}
                  alt="northeastern logo"
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </a>
              <div>
                <Text size="lg">
                  <b>{edu.school}</b>
                </Text>
                <Text size="sm">{edu.degree}</Text>
                <Text size="sm" c="dimmed">
                  {edu.duration}
                </Text>
              </div>
            </Group>
          </Card>
        ))}
      </Stack>

      <Title order={2} mb="sm">
        Work Experience
      </Title>
      <Stack>
        {companies.map((company, index) => (
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
            <Group align="center">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.logoLink}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </a>
              <div>
                <Text size="lg">
                  <b>{company.name}</b>
                </Text>
                <Text size="sm">{company.role}</Text>
                <Text size="sm" c="dimmed">
                  {company.duration}
                </Text>
              </div>
            </Group>
            <Divider my="sm" />
            <List style={{ paddingRight: '20px' }} withPadding={!isMobile}>
              {company.bullets.map((bullet, bulletIndex) => (
                <List.Item key={bulletIndex}>{bullet}</List.Item>
              ))}
            </List>
            <div style={{ marginTop: '10px' }}>
              {company.skills.map((skill, skillIndex) => (
                // <Pill
                //   key={skillIndex}
                //   variant="default"
                //   color="blue"
                //   style={{ marginRight: '5px', marginTop: '5px' }}
                // >
                //   {skill}
                // </Pill>
                <Badge
                  style={{ marginRight: '5px', marginTop: '5px' }}
                  variant="outline"
                  key={skillIndex}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
