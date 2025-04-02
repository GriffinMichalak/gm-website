import classes from './Welcome.module.scss';
import { Typewriter } from 'react-simple-typewriter';
import { Button, Container, Group, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function Welcome() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner}>
        <h1 className={classes.title}>
          Hey! I'm{'  '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Griffin Michalak
          </Text>
          {', a '}
          <br />
          {isMobile ? (
            'software engineer'
          ) : (
            <Typewriter
              words={[
                'software engineer',
                'full-stack developer',
                'musician',
                'coffee enthusiast',
                'saxophone player',
              ]}
              loop={0}
              typeSpeed={75}
              deleteSpeed={35}
              delaySpeed={2000}
              cursor
            />
          )}
        </h1>

        <Text className={classes.description} c="dimmed">
          I am an Honors CS & AI student at Northeastern University. Based in Boston, I have 2 years
          of experience in software development at Datadog, Verizon, and Liberty Mutual. Take a look
          at my website to learn more about me!
        </Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="/resume"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Resume
          </Button>

          <Button
            component="a"
            href="/about"
            size="xl"
            variant="default"
            className={classes.control}
          >
            About Me
          </Button>
        </Group>
      </Container>
    </div>
  );
}
