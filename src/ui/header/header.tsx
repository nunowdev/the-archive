'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/utils/useTheme';
import styles from './header.module.css';

function Header() {
  const [theme, toggleTheme] = useTheme();
  const [isFading, setIsFading] = useState(false);

  const handleThemeToggle = () => {
    setIsFading(true);
    setTimeout(() => {
      toggleTheme();
      setIsFading(false);
    }, 600); // 600ms for animation
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.link_left}>
          <p>
            <span>@</span>nunowdev
          </p>
        </div>
        <div className={styles.link_right}>
          <p onClick={handleThemeToggle} style={{ cursor: 'pointer' }}>
            {theme === 'dark' ? '#000' : '#fff'}
          </p>
        </div>
      </header>

      {/* Global Fade Animation */}
      <AnimatePresence>
        {isFading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fade-overlay"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
