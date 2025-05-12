// button-code.js

export const buttonTsxCode = `
import React from "react";
import styles from "./Component.module.css";

export default function App() {
  return (
    <div style={{ padding: 20, fontSize: 18 }}>
      <button className={styles.button}>Test Code</button>
    </div>
  );
};
`.trim();
export const buttonCssCode = `
.button {
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: #0059c1;
}
`.trim();

export const buttonTestCode = `
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Component';

describe('Button', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
`.trim();

export const indexCode = `
import React from "react";
import { createRoot } from "react-dom/client";
import Component from "./Component";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Component />);
          `.trim();
