'use client';

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';
import styles from './code-showcase.module.css';

interface CodeShowcaseProps {
  componentCode: string;
}

export default function CodeShowcase({ componentCode }: CodeShowcaseProps) {
  return (
    <div className={styles.sandpack_wrapper}>
      <SandpackProvider
        template="react"
        theme={atomDark}
        files={{
          '/App.js': componentCode,
        }}
      >
        <div className={styles.sandpack_layout_wrapper}>
          <SandpackLayout>
            <SandpackPreview
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
            />
            <SandpackCodeEditor
              readOnly={true}
              showReadOnly={false}
              showRunButton={false}
            />
          </SandpackLayout>
        </div>
      </SandpackProvider>
    </div>
  );
}
