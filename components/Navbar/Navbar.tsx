// components/Navbar.tsx
import Link from 'next/link';
import { Button, Group } from '@mantine/core';

export function Navbar() {
  return (
    <Group>
      <Link href="/" passHref>
        <Button variant="subtle">Home</Button>
      </Link>
      <Link href="/about" passHref>
        <Button variant="subtle">About</Button>
      </Link>
    </Group>
  );
}
