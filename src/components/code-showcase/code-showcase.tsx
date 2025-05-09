'use client';

import { SandpackWrapperProps } from '@/utils/sandpackWrapper';
import dynamic from 'next/dynamic';

// import SandpackWrapper from '@/utils/sandpackWrapper';
const SandpackWrapper = dynamic(() => import('@/utils/sandpackWrapper'), {
  ssr: false,
});

export default function CodeShowcase({ activeFile }: SandpackWrapperProps) {
  const tsxCode = `
import React from 'react';
import styles from './MyComponent.module.css';

const MyComponent: React.FC = () => {
  return <div className={styles.box}>Hello TypeScript + Sandpack!</div>;
};

export default MyComponent;
`;

  const cssCode = `
.box {
  background-color: lightblue;
  padding: 20px;
  border-radius: 8px;
}
`;

  const testCode = `
import { render, screen } from "@testing-library/react";
import MyComponent from "./App";

test("renders component", () => {
  render(<MyComponent />);
  expect(screen.getByText(/hello typescript/i)).toBeInTheDocument();
});
`;

  return (
    <SandpackWrapper
      tsxCode={tsxCode}
      cssCode={cssCode}
      testCode={testCode}
      activeFile={activeFile}
    />
  );
}
