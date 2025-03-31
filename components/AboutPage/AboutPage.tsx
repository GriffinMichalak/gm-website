import Image from 'next/image';
import classes from './AboutPage.module.scss';
import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, List, Text, ThemeIcon, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import northeastern from '../../assets/northeastern.png';

export function AboutPage() {
  const isMobile = useMediaQuery('(max-width: 414px)');

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            👋 Hi, I'm <span className={classes.highlight}>Griffin</span>
          </Title>
          <Text c="dimmed" mt="md">
            I'm a passionate software engineer currently studying at Northeastern University. I love
            building scalable applications, solving complex problems, and learning new technologies.
            Whether it's developing intuitive user experiences or working on backend systems, I
            enjoy tackling challenges and continuously growing as a developer.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Full-Stack Development</b> – Experienced with building responsive web applications
              using modern frameworks like React, Next.js, and Node.js.
            </List.Item>
            <List.Item>
              <b>Backend Engineering</b> – Passionate about building efficient APIs, managing
              databases, and ensuring seamless server-side performance.
            </List.Item>
            <List.Item>
              <b>Continuous Learner</b> – Always eager to explore new technologies and improve my
              coding skills.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              View My Projects
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Connect With Me
            </Button>
          </Group>
        </div>
        <Image
          src={northeastern.src}
          className={classes.image}
          alt="Northeastern University"
          width={300}
          height={300}
        />
      </div>
    </Container>
  );
}
