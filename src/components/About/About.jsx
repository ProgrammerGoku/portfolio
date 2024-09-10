import React from "react";

import styles from './About.module.css';
import { getImageUrl } from "../../utils";

export const About=()=>{
    return <div className={styles.about} id='about'>
        <h1>ABOUT</h1>
        <div className={styles.imgTextWrap}>
            <img className={styles.heroImage} src={getImageUrl('about/aboutImage.png')} alt="About Image" />
            <div className={styles.content}>
                <div className={styles.tabs}>
                    <div className={styles.img}><img src={getImageUrl('about/cursorIcon.png')} alt="" /></div>
                    <div className={styles.contentText}>
                        <h3>Fullstack developer</h3>
                        <p>I love to build fullstack applications with responsive sites</p>
                    </div>

                </div>
                <div className={styles.tabs}>
                <div className={styles.img}><img src={getImageUrl('about/serverIcon.png')} alt="" /></div>
                    <div className={styles.contentText}>
                        <h3>AI/ML Researcher</h3>
                        <p>I love making machines think like humans, experienced with ML research
                        </p>
                    </div>
                </div>
                <div className={styles.tabs}>
                <div className={styles.img}><img src={getImageUrl('about/uiIcon.png')} alt="" /></div>
                    <div className={styles.contentText}>
                        <h3>Data Engineering</h3>
                        <p> I love transforming a raw data into actionable insights where I meticulously correct data inconsistencies.
                        </p>
                    </div>
                </div>
                <div className={styles.button}>
                    <a href="https://drive.google.com/file/d/1w68RBAiW4GyAUX8V5C0WcYPgaUcw4ZjP/view?usp=sharing">
                    <h3>Resume</h3></a>
                </div>
            </div>
        </div>

    </div>
}

