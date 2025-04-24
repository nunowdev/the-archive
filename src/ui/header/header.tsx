'use client';

import { useTheme } from '@/utils/useTheme';
import { Sun, Moon } from 'lucide-react';
import styles from './header.module.css';

function Header() {
  const [theme, toggleTheme] = useTheme();
  return (
    <header className={styles.header}>
      <div className={styles.header_link_left}>
        <span>@</span>nunowdev
      </div>
      <div className={styles.header_link_right}>
        docs
        {theme === 'dark' ? (
          <Sun
            onClick={toggleTheme}
            color="white"
            size={36}
            className={styles.theme_icon}
          />
        ) : (
          <Moon
            onClick={toggleTheme}
            color="black"
            size={36}
            className={styles.theme_icon}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
