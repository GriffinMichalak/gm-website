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
import verizon from '../../assets/verizon.png';
import { MediaPost } from '../MediaPost/MediaPost';

export function AboutPage() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const featuredPosts = [
    {
      id: 1,
      author: 'Verizon',
      date: 'July 2024',
      content:
        '<p> We’re throwing it 🔙 to June, when Northeastern University students <a href="https://www.linkedin.com/in/griffinmichalak/" rel="noopener noreferrer" target="_blank">Griffin Michalak</a>, <a href="https://www.linkedin.com/in/jenny-huo88/" rel="noopener noreferrer" target="_blank">Jenny Huo</a> and <a href="https://www.linkedin.com/in/nileena-john/" rel="noopener noreferrer" target="_blank">Nileena John</a> joined us for our <a href="https://www.linkedin.com/feed/hashtag/?keywords=verizonnetworkteamcoop&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A7223673673298128896" rel="noopener noreferrer" target="_blank">#VerizonNetworkTeamCoOp</a>! When sharing their highlights from the 5G Engineering and Data Science Co-Ops, they ...</p>',
      image: verizon,
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7223673673298128896/',
    },
    {
      id: 2,
      author: 'Adriana Dawson',
      date: 'April 2024',
      content:
        '<p> I was on Trek last week… with <a href="https://www.linkedin.com/school/northeastern-university/posts/?feedView=all" rel="noopener noreferrer" target="_blank">Northeastern University</a>! I am the proud Executive Sponsor of Verizon’s campus ambassador relationship with Northeastern University. As a proud NU alumna, this full circle relationship allows me to connect the best of both worlds; Northeastern changed ...</p>',
      image:
        'https://media.licdn.com/dms/image/v2/C4E03AQGS65gvnVo0Eg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1632655330399?e=1749081600&v=beta&t=j0mXwFGObIUWGid-TTPAYfoMVlF8gSomZ5KXUuzJM1c',
      link: 'https://www.linkedin.com/posts/adrianadawson_verizon-northeasternuniversity-engagement-activity-7173004231631589376--if9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLPCWAB9fOopcmF-rZxQykCNXuv5GPeFO4',
    },
    {
      id: 3,
      author: 'Cathleen Finn',
      date: 'April 2024',
      content: `<p> Congresswoman Ayanna Pressley packed the house at Verizon's Boston Hub for the Greater Boston Chamber of Commerce Women's Network event. Many thanks to [...] <a href="https://www.linkedin.com/in/nileena-john/" rel="noopener noreferrer" target="_blank">Nileena John</a> and <a href="https://www.linkedin.com/in/griffinmichalak/" rel="noopener noreferrer" target="_blank">Griffin Michalak</a> and partners Chelsea Falkenstein and Dragica Zoric for supporting this event.</p>`,
      image:
        'https://media.licdn.com/dms/image/v2/D4E03AQE1OgEEK0rUkA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729174494360?e=1749081600&v=beta&t=wrPrZusC_AIgr0H4rWvW6VilTAfGFsrqUKEXQpAOf-A',
      link: 'https://www.linkedin.com/posts/cathleenfinn_iamvz-womenshistorymonth-bosbizwomen-activity-7178735993011769344-3avb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADLPCWAB9fOopcmF-rZxQykCNXuv5GPeFO4',
    },
  ];

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
      <Carousel
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={{ base: 2, sm: 'xl' }}
        align="start"
        slidesToScroll={isMobile ? 1 : 2}
        loop
      >
        {slides}
      </Carousel>
    </Container>
  );
}
