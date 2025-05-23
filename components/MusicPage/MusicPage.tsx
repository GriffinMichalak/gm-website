import { useState } from 'react';
import classes from './MusicPage.module.scss';
import { Container, Grid, Group, SegmentedControl, Text, Title } from '@mantine/core';
import { BadgeCard } from '../BadgeCard/BadgeCard';
import { musicMedia } from './media';

export function MusicPage() {
  const [category, setCategory] = useState('all');
  const visibleMedia =
    category === 'all'
      ? musicMedia
      : musicMedia.filter((item) => item.category.toLowerCase() === category);

  return (
    <Container size="md" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title order={1} mb="lg">
            Music
          </Title>
          <Text c="dimmed" mt="md">
            In addition to software development, I've been playing saxophone and piano for over 10
            years. Some of my works are shown below!
          </Text>
          <Group justify="center" mt="xl" mb="xl">
            <SegmentedControl
              radius="xl"
              size="md"
              data={[
                { label: 'All', value: 'all' },
                { label: 'Solo', value: 'solo' },
                { label: 'Group', value: 'group' },
              ]}
              classNames={classes}
              onChange={(value) => {
                setCategory(value);
              }}
              defaultValue="all"
              value={category}
            />
          </Group>
          <Grid>
            {visibleMedia.map((item, index) => (
              <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
                <BadgeCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  link={item.link}
                  date={item.date}
                />
              </Grid.Col>
            ))}
          </Grid>
          <Group justify="center" mt="lg" mb="md">
            <Text>🎶</Text>
          </Group>
        </div>
      </div>
    </Container>
  );
}
