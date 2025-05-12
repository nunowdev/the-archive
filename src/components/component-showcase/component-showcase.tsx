'use client';
import dynamic from 'next/dynamic';

const SandpackWrapper = dynamic(() => import('@/utils/sandpackWrapper'), {
  ssr: false,
});

type ComponentShowcaseProps = {
  showcase: 'component' | 'code';
  tsxCode: string;
  cssCode: string;
  testCode: string;
};

export default function ComponentShowcase({
  showcase,
  tsxCode,
  cssCode,
  testCode,
}: ComponentShowcaseProps) {
  return (
    <SandpackWrapper
      showcase={showcase}
      tsxCode={tsxCode}
      cssCode={cssCode}
      testCode={testCode}
    />
  );
}
