import Header from '../header/header';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.hero_middle}>
        <h1 className={styles.hero_slogan}>
          A clean space for creative chaos.
        </h1>
        <p className={styles.hero_description}>
          totally not a chat-gpt created slogan :)
        </p>
      </div>
      <div className={`${styles.hero_title}`}>the archive</div>
    </section>
  );
}

export default Hero;
