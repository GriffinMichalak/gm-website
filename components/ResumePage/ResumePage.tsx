import {
  Button,
  Card,
  Container,
  Divider,
  Group,
  Image,
  Pill,
  Stack,
  Text,
  Title,
} from '@mantine/core';
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
    },
    {
      name: 'Liberty Mutual',
      logo: liberty.src,
      role: 'Software Developer Co-Op',
      duration: 'January 2025 - June 2025',
      website: 'https://www.libertymutual.com/',
      skills: ['React.js', 'Express.js', 'Node.js', 'TypeScript', 'Git'],
    },
    {
      name: 'Hanover Insurance Group',
      logo: hanover.src,
      role: 'Software Engineer Intern',
      duration: 'June 2024 - Aug 2024',
      website: 'https://www.hanover.com/',
      skills: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Azure'],
    },
    {
      name: 'Verizon',
      logo: verizon.src,
      role: 'Software & Network Engineer Co-Op',
      duration: 'January 2024 - June 2024',
      website: 'https://www.verizon.com/',
      skills: ['ASP.NET', 'JavaScript', 'C#', 'HTML', 'CSS', 'Python', 'SQL'],
    },
  ];

  const education = [
    {
      school: 'Northeastern University',
      degree: 'Bachelor of Science in Computer Science',
      duration: 'Sept 2021 - Present',
      website: 'https://www.northeastern.edu/',
    },
  ];

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
        mt="xl"
        mb={20}
        fullWidth
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
              <a href={edu.website} target="_blank" rel="noopener noreferrer">
                <Image
                  src={northeastern.src}
                  alt={`${edu.school} logo`}
                  width={60}
                  height={60}
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
            <Divider my="sm" />
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
              <a href={company.website} target="_blank" rel="noopener noreferrer">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={60}
                  height={60}
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
                <div style={{ marginTop: '10px' }}>
                  {company.skills.map((skill, skillIndex) => (
                    <Pill
                      key={skillIndex}
                      variant="default"
                      color="blue"
                      style={{ marginRight: '5px', marginTop: '5px' }}
                    >
                      {skill}
                    </Pill>
                  ))}
                </div>
              </div>
            </Group>
            <Divider my="sm" />
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
