'use client';

import { ComponentSelector } from '@/components/component-selector/component-selector';
import styles from './showcase.module.css';
import CodeShowcase from '@/components/code-showcase/code-showcase';
import { useState } from 'react';
import { SandpackWrapperProps } from '@/utils/sandpackWrapper';

function Showcase() {
  const [activeFile, setActiveFile] =
    useState<SandpackWrapperProps['activeFile']>('Component.tsx');

  return (
    <section className={styles.showcase}>
      <h1 className={styles.slogan}>
        A home for <span>all my components.</span>
      </h1>
      <ComponentSelector />
      <CodeShowcase activeFile={activeFile} />
    </section>
  );
}

export default Showcase;
