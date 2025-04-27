import Header from '../header/header';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.middle}>
        <h1 className={styles.slogan}>A clean space for creative chaos.</h1>
        <p className={styles.description}>
          totally not a chat-gpt created slogan :)
        </p>
      </div>
      <div className={`${styles.title}`}>the archive</div>
    </section>
  );
}

export default Hero;
