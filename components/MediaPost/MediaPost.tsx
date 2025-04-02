import { StaticImageData } from 'next/image';
import classes from './MediaPost.module.scss';
import { Avatar, Button, Group, Paper, Text, TypographyStylesProvider } from '@mantine/core';

export interface MediaPostProps {
  author: string;
  date: string;
  content: string;
  image: StaticImageData | string;
  link: string;
}

export function MediaPost({ author, date, content, image, link }: MediaPostProps) {
  return (
    <Paper withBorder radius="md" className={classes.comment}>
      <Group>
        <Avatar src={typeof image === 'string' ? image : image.src} alt={author} radius="xl" />
        <div>
          <Text fz="sm">{author}</Text>
          <Text fz="xs" c="dimmed">
            {date}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </TypographyStylesProvider>
      <Button
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        mt="md"
        variant="light"
        fullWidth
      >
        View Post
      </Button>
    </Paper>
  );
}
