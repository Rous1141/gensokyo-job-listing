import  { useState } from 'react';
import { Button, Typography } from 'antd';
import landingpageImg from '/img/gensokyo.png';
import styles from '../css/landingpage.module.css';

const { Title, Text } = Typography;

export default function LandingPage(){
  const [isRightHovered, setIsRightHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.leftSide} ${isRightHovered ? styles.leftSideHovered : ''}`}
      >
        <img
          src={landingpageImg}
          alt="Gensokyo Background"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}>
         <Text className={isRightHovered?styles.overlayDescription:styles.overlayDescriptionOff}>
         "This is a remote place, far from any human habitation. In ancient times, this place was densely populated by youkai and those humans who wandered too close would be eaten by them. Most people feared the youkai, but a brave warrior would occasionally rise to defeat them. Some of those brave humans settled in Gensokyo to keep close watch on the youkai. Scientific advancements among the human race further contributed to Gensokyo's growing human minority. Due to this, Yukari Yakumo implemented a plan roughly 500 years ago to restore the power of youkai in Gensokyo by creating a "Barrier that divides Reality and Fantasy" called the Youkai Expansion Project. With the plan's implementation, Gensokyo became a place where it brought in things that have become fantasy outside; in other words, things that were forgotten in the Outside World such as youkai, lost items, and such are paranormally transported into Gensokyo. In 1885 A.D., Gensokyo was again made isolated from the rest of Earth with the creation of the Great Hakurei Barrier. Gensokyo has made next to no attempt at contact with the outside world since its creation. Gensokyo's language is modern Japanese."
        </Text>
        </div>
      </div>
      <div
        className={`${styles.rightSide} ${isRightHovered ? styles.rightSideHovered : ''}`}
        onMouseEnter={() => setIsRightHovered(true)}
        onMouseLeave={() => setIsRightHovered(false)}
      >
        <Title level={2} className={styles.title}>
          Gensokyo Job Helper
        </Title>
        <div className={styles.buttonGroup}>
          <Button
            type="primary"
            size="large"
            className={styles.primaryButton}
            href="/login" // Placeholder for routing
          >
            Login
          </Button>
          <Button
            type="primary"
            size="large"
            className={styles.primaryButton}
            href="/register" // Placeholder for routing
          >
            Register
          </Button>
          <Text className={styles.description}>
          An Web Application For Human to earn extra income - Powered by Nitori Kappa Co. - Commission by Hakurei shrine maiden
        </Text>
        </div>
      </div>
    </div>
  );
};