// components/Navbar.tsx
import Link from 'next/link';
import classes from './Navbar.module.scss';
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconMoonStars,
  IconNotification,
  IconSun,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Switch,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

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
                color: colorScheme === 'dark' ? 'white' : 'black', // Change text color based on theme
              }}
            >
              Griffin Michalak
            </Text>
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/about" className={classes.link}>
              Resume
            </Link>
            <Link href="/about" className={classes.link}>
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
