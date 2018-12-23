import React from 'react';
import styles from '../styles/CustomToolTip.css';

const CustomToolTip = (props) => {
  const { active } = props;
  const { payload } = props;
  if (active) {
    const { label } = payload[0].payload;
    return (
      <div className="CustomToolTip">
        <p className={styles.time}>{label}</p>
      </div>
    );
  }
  return null;
};

export default CustomToolTip;
