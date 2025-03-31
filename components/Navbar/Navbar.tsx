import Link from 'next/link';
import classes from './Navbar.module.scss';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { Box, Group, Switch, Text, useMantineColorScheme, useMantineTheme } from '@mantine/core';

export function Navbar() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Text
              fw={700}
              size="xl"
              style={{
                color: colorScheme === 'dark' ? 'white' : 'black',
              }}
            >
              Griffin Michalak
            </Text>
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/resume" className={classes.link}>
              Resume
            </Link>
            <Link href="/" className={classes.link}>
              About Me
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <Switch
              defaultChecked={true}
              size="md"
              color="dark.4"
              onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
              offLabel={
                <IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />
              }
              onClick={toggleColorScheme}
            />
          </Group>
        </Group>
      </header>
    </Box>
  );
}
