import Hero from '@/ui/hero/hero';
import Showcase from '@/ui/showcase/showcase';

export default function Home() {
  const components = [
    'Button',
    'Card',
    'Modal',
    'Tooltip',
    'Dropdown',
    'Input',
    'ToggleSwitch',
    'Avatar',
    'Navbar',
    'Sidebar',
  ];

  return (
    <>
      <Hero />
      <Showcase components={components} />
    </>
  );
}
