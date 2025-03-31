import { Card, Container, Divider, Group, Image, Stack, Text, Title } from '@mantine/core';
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
    },
    {
      name: 'Liberty Mutual',
      logo: liberty.src,
      role: 'Software Developer Co-Op',
      duration: 'January 2025 - June 2025',
      website: 'https://www.libertymutual.com/',
    },
    {
      name: 'Hanover Insurance Group',
      logo: hanover.src,
      role: 'Software Engineer Intern',
      duration: 'June 2024 - Aug 2024',
      website: 'https://www.hanover.com/',
    },
    {
      name: 'Verizon',
      logo: verizon.src,
      role: 'Software & Network Engineer Co-Op',
      duration: 'January 2024 - June 2024',
      website: 'https://www.verizon.com/',
    },
  ];

  return (
    <Container size="md" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title order={1} mb="lg">
        Resume
      </Title>
      <Text size="lg" mb="xl">
        Here are some of the companies I've worked at and the roles I've held.
      </Text>

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
              </div>
            </Group>
            <Divider my="sm" />
            {/* <Text size="sm">
              I worked in the role of {company.role} and contributed to various projects during my
              time at {company.name}.
            </Text> */}
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
