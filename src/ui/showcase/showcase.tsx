'use client';

import styles from './showcase.module.css';
import CodeShowcase from '@/components/code-showcase/code-showcase';
import ComponentShowcase from '@/components/component-showcase/component-showcase';
import {
  buttonTsxCode,
  buttonCssCode,
  buttonTestCode,
} from '../../utils/button-code.js'; // Import the code
import { ComponentSelector } from '@/components/component-selector/component-selector';

function Showcase() {
  return (
    <section className={styles.showcase}>
      <h1 className={styles.slogan}>
        A home for <span>all my components.</span>
      </h1>
      <ComponentSelector />
      <div className={styles.showcase_container}>
        <div className={styles.showcase_wrapper}>
          <ComponentShowcase
            showcase="component"
            tsxCode={buttonTsxCode}
            cssCode={buttonCssCode}
            testCode={buttonTestCode}
          />
        </div>
        <div className={styles.showcase_wrapper}>
          <CodeShowcase
            showcase="code"
            tsxCode={buttonTsxCode}
            cssCode={buttonCssCode}
            testCode={buttonTestCode}
          />
        </div>
      </div>
    </section>
  );
}

export default Showcase;
