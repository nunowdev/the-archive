'use client';

import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackLayout,
  SandpackThemeProvider,
} from '@codesandbox/sandpack-react';
import { atomDark } from '@codesandbox/sandpack-themes';
import { indexCode } from './button-code';

export interface SandpackWrapperProps {
  showcase: 'component' | 'code';
  tsxCode: string;
  cssCode: string;
  testCode: string;
}

export default function SandpackWrapper({
  showcase,
  tsxCode,
  cssCode,
  testCode,
}: SandpackWrapperProps) {
  return (
    <SandpackProvider
      template="react-ts"
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
        '/index.tsx': {
          code: indexCode,
        },
      }}
    >
      <SandpackThemeProvider theme={atomDark}>
        <SandpackLayout>
          {showcase === 'code' && (
            <SandpackCodeEditor
              showTabs
              showLineNumbers
              wrapContent
              style={{ height: 400, width: '800px' }}
            />
          )}
          {showcase === 'component' && (
            <SandpackPreview
              showOpenInCodeSandbox={false}
              showRestartButton
              style={{ height: 400, border: '1px solid #eee', width: '500px' }}
            />
          )}
        </SandpackLayout>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
}
