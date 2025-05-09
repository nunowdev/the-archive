'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './component-selector.module.css';

export function ComponentSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string>('Button');
  const components = ['Button', 'Input', 'Select', 'Checkbox', 'Radio'];

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectComponent = (component: string) => {
    setSelectedComponent(component);
    handleToggle();
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to parent
    handleToggle(); // Toggle open/close for the dropdown
  };

  return (
    <div className={styles.component_selector} onClick={handleContainerClick}>
      <div className={styles.component_button}>
        <p className={styles.component_name}>
          <span className={styles.import_keyword}>import </span>
          {'{'}
          <span
            className={styles.import_name}
          >{` ${selectedComponent} `}</span>{' '}
          {'}'}
          <span className={styles.import_keyword}> from </span>
          <span className={styles.import_path}>{'"@archive"'}</span>
        </p>
        <ChevronDown
          className={`${styles.arrow_down} ${isOpen ? styles.chevron_open : ''}`}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.dropdown}
          >
            <ul>
              {components.map((component) => (
                <li
                  key={component}
                  className={styles.dropdown_item}
                  onClick={(e) => {
                    handleSelectComponent(component);
                    e.stopPropagation(); // Prevent closing the dropdown if you select an item
                  }}
                >
                  <span className={styles.component_name_hover}>
                    {component}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
