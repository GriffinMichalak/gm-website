import classes from './Welcome.module.scss';
import { Button, Container, Group, Text } from '@mantine/core';

export function Welcome() {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner}>
        <h1 className={classes.title}>
          Hey! I'm{'  '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Griffin Michalak
          </Text>
          {', a '}
          software developer
        </h1>

        <Text className={classes.description} c="dimmed">
          I am an honors CS & AI student at Northeastern University. Based in Boston, I have 2+ YOE
          in software development at Datadog, Verizon, and Liberty Mutual. Take a look at my website
          to learn more about me!
        </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            // leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
