import React from "react";
import styles from "./Experience.module.css"
import exp from "../../data/exp.json"
import research from "../../data/research.json"
import { getImageUrl } from "../../utils";

export const Experience=()=>{
    return <div className={styles.container} id='exp'>
        <h1>EXPERIENCE</h1>
        <div className={styles.subContainer}>
        <h2>TECHNICAL</h2>
            <div className={styles.expList}>
                {exp.map((expItem,id)=>{
                return(
                <div className={styles.imgTextWrap}>
                    <div className={styles.imgContainer}>
                    <img className={styles.img} src={getImageUrl(expItem.imageSrc)} alt="" />
                    </div>
                    <div className={styles.expContent}>
                        <h3>{`${expItem.role}, ${expItem.organization}`}</h3>
                        <p>{`${expItem.startDate} - ${expItem.endDate}`}</p>
                        <ul>{expItem.experiences.map((experience,id)=>{
                            return <li key={id}>{experience}</li>
                        })}</ul>
                    </div>

                </div>

                );
            })}</div>
        </div>
        <div className={styles.subContainer}>
            <h2>RESEARCH/TEACHING</h2>
            <div className={styles.expList}>
                {research.map((researchItem,id)=>{
                    return(
                    <div className={styles.imgTextWrap}>
                        <div className={styles.imgContainer}>
                        <img className={styles.img} src={getImageUrl(researchItem.imageSrc)} alt="" />
                        </div>
                        <div className={styles.expContent}>
                            <h3>{`${researchItem.role}, ${researchItem.organization}`}</h3>
                            <p>{`${researchItem.startDate} - ${researchItem.endDate}`}</p>
                            <ul>{researchItem.experiences.map((experience,id)=>{
                                return <li key={id}>{experience}</li>
                            })}</ul>
                        </div>

                    </div>

                    );
                })}
            </div>
        </div>

    </div>
}