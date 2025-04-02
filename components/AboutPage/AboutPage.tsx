import classes from './AboutPage.module.scss';
import { IconCheck, IconCode, IconMusic, IconPencil } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import pfp from '../../assets/pfp.png';
import { MediaPost } from '../MediaPost/MediaPost';
import { featuredPosts } from './FeaturedPosts';

export function AboutPage() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = featuredPosts.map((item) => (
    <Carousel.Slide key={item.id}>
      <MediaPost
        author={item.author}
        date={item.date}
        content={item.content}
        image={item.image}
        link={item.link}
      />
    </Carousel.Slide>
  ));

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            👋 Hi, I'm <span className={classes.highlight}>Griffin</span>
          </Title>
          <Text c="dimmed" mt="md">
            I'm a software developer currently studying at Northeastern University. I enjoy building
            robust applications, solving complex problems, and learning new technologies.
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
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconCode size={16} />
                </ThemeIcon>
              }
            >
              <b>Full-Stack Development</b> - I've built many apps from the ground up as well as
              using using modern frameworks like React, Angular, Next.js, and Node.js.
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconPencil size={16} />
                </ThemeIcon>
              }
            >
              <b>Continuous Learner</b> - Always eager to explore new technologies and improve my
              coding skills.
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconMusic size={16} />
                </ThemeIcon>
              }
            >
              <b>Musician</b> - I've been playing the saxophone for over 10 years. I specialize in
              both classical and jazz studies. I also play piano and arrange music.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              {isMobile ? 'Projects' : 'View My Projects'}
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
              href="https://www.linkedin.com/in/griffinmichalak/"
              component="a"
              target="_blank"
            >
              {isMobile ? 'Connect' : 'Connect with Me'}
            </Button>
          </Group>
        </div>
        <Image
          src={pfp.src}
          className={classes.image}
          alt="Northeastern University"
          width={300}
          height={300}
          radius="md"
        />
      </div>
      {/* ============ */}
      <Title order={2} mb={20}>
        Featured Posts
      </Title>
      <Carousel
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={{ base: 2, sm: 'xl' }}
        align="start"
        slidesToScroll={isMobile ? 1 : 2}
        loop
        mb={100}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
