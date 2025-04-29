import React, { useState } from 'react';
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
      </div>
      <div
        className={`${styles.rightSide} ${isRightHovered ? styles.rightSideHovered : ''}`}
        onMouseEnter={() => setIsRightHovered(true)}
        onMouseLeave={() => setIsRightHovered(false)}
      >
        <Title level={2} className={styles.title}>
          Gensokyo Job Helper
        </Title>
        <Text className={styles.description}>
          An Web Application For Human usage to earn extra income - Powered by Nitori Kappa Co. - Commission by Hakurei shrine maiden
        </Text>
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
        </div>
      </div>
    </div>
  );
};