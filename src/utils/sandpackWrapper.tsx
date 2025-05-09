'use client';
import { Sandpack } from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';

export interface SandpackWrapperProps {
  tsxCode?: string;
  cssCode?: string;
  testCode?: string;
  activeFile:
    | 'Component.tsx'
    | 'Component.module.css'
    | 'Component.test.tsx'
    | '/package.json'
    | '/styles.css'
    | 'tsconfig.json'
    | '/App.tsx'
    | '/index.tsx'
    | '/public/index.html';
}

export default function SandpackWrapper({
  tsxCode,
  cssCode,
  testCode,
  activeFile,
}: SandpackWrapperProps) {
  return (
    <Sandpack
      options={{
        showTabs: false,
        showConsole: false,
        editorHeight: 500,
        editorWidthPercentage: 100,
        readOnly: true,
        activeFile: `${activeFile}`,
      }}
      template="react-ts"
      theme={atomDark}
      files={{
        '/Component.tsx': {
          code: tsxCode,
          active: true,
        },
        '/Component.module.css': {
          code: cssCode,
        },
        '/Component.test.tsx': {
          code: testCode,
        },
      }}
    />
  );
}
