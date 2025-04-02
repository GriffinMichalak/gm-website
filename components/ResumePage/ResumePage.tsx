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
  Spoiler,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import northeastern from '../../assets/northeastern.png';
import { companies } from './companyData';

export default function ResumePage() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const education = [
    {
      school: 'Northeastern University',
      degree: 'Bachelor of Science in Computer Science',
      duration: 'Sept 2022 - May 2026',
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
        component="a"
        href="https://drive.google.com/file/d/1gtE3lz-m0UUGoZ4m0bh2FyrPcuusvpmc/view"
        target="_blank"
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
            <Spoiler maxHeight={0} showLabel="Show more" hideLabel="Show less">
              <List style={{ paddingRight: isMobile ? '20px' : '50px' }} withPadding={!isMobile}>
                {company.bullets.map((bullet, bulletIndex) => (
                  <List.Item key={bulletIndex}>{bullet}</List.Item>
                ))}
              </List>
            </Spoiler>
            <div style={{ marginTop: '10px' }}>
              {company.skills.map((skill, skillIndex) => (
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
