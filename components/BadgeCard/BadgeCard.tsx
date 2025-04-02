import classes from './BadgeCard.module.scss';
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';

export interface BadgeCardProps {
  image: string;
  title: string;
  description: string;
  country: string;
  link: string;
  date: string;
}

export function BadgeCard({ image, title, country, link, date }: BadgeCardProps) {
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {date}
        </Text>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }} component="a" href={link} target="_blank">
          Show details
        </Button>
      </Group>
    </Card>
  );
}
