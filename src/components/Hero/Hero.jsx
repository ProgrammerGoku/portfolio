import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';
export const Hero =()=>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Gokul Ram Subramani</h1>
            <p className={styles.description}>
            As a tech enthusiast currently pursuing my Master's in Computer Science and Engineering at the University at Buffalo, I am actively seeking opportunities in Software Development and AI/ML roles.
            </p>

            <a className={styles.contactBtn} href="mailto:gokul.subramani33@gmail.com">Reach out</a>
            <div className={styles.socialMedia}>
                <a className={styles.socialMediaBtn} href="https://github.com/ProgrammerGoku">
                    <img src={getImageUrl('contact/githubIcon.png')} alt="" />
                </a>
                <a className={styles.socialMediaBtn} href="https://linkedin.com/in/gokul-ram-s">
                    <img src={getImageUrl('contact/linkedinIcon.png')} alt="" />
                </a>
                <a className={styles.socialMediaBtn} href="https://leetcode.com/u/Gokul_Subramani/">
                    <img src={getImageUrl('contact/leetcode.png')} alt="" />
                </a>
            </div>
        </div>
        <img className={styles.heroImage} src={getImageUrl("hero/heroImage.png")} alt="Hero Image" />

        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}