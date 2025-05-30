'use client';

import dynamic from 'next/dynamic';

const SandpackWrapper = dynamic(() => import('@/utils/sandpackWrapper'), {
  ssr: false,
});

type CodeShowcaseProps = {
  showcase: 'component' | 'code';
  tsxCode: string;
  cssCode: string;
  testCode: string;
};

export default function CodeShowcase({
  showcase,
  tsxCode,
  cssCode,
  testCode,
}: CodeShowcaseProps) {
  return (
    <SandpackWrapper
      showcase={showcase}
      tsxCode={tsxCode}
      cssCode={cssCode}
      testCode={testCode}
    />
  );
}
