import { ComponentSelector } from '@/components/component-selector/component-selector';
import styles from './showcase.module.css';
import CodeShowcase from '@/components/code-showcase/code-showcase';

export interface ShowcaseProps {
  components: string[];
}

const buttonCode = `
    export default function App() {
      return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button
            onClick={() => alert('Button clicked!')}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Click Me
          </button>
        </div>
      );
    }
  `;

function Showcase({ components }: ShowcaseProps) {
  return (
    <section className={styles.showcase}>
      <h1 className={styles.slogan}>
        A home for <span>all my components.</span>
      </h1>
      <ComponentSelector components={components} />
      <CodeShowcase componentCode={buttonCode} />
    </section>
  );
}

export default Showcase;
