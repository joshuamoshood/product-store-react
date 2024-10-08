import React from "react";
import styles from "./index.module.less";

export const Heading = ({ heading, spanText }) => (
  <div className={styles.secHead}>
    <h1 className={styles.heading}>
      {`${heading} `}
      <span>{spanText}</span>
    </h1>
  </div>
);

export const SimpleHeading = ({ heading, margin, width, size, weight, cssClass }) => (
  <h1
    className={`${cssClass} ${styles.simpleHeading} `}
    style={{
      margin,
      width,
      fontSize: `${size}rem`,
      fontWeight: weight,
    }}
  >{`${heading} `}</h1>
);
