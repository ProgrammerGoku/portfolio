import React from "react";
import styles from './Skills.module.css'
import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils";
export const Skills=()=>{
    return <div className={styles.container} id='skills'>
        <h1>SKILLS</h1>
        <div className={styles.skills}>{
            skills.map((skillItem,id)=>{
                return(
                    <div className={styles.imgTextWrap} id={id}>
                        <div className={styles.img}>
                        <img src={getImageUrl(skillItem.imageSrc)} alt="" />
                        </div>
                        <div className={styles.text}>
                            <p>{skillItem.skill}</p>
                        </div>
                    </div>

                );
            })}
        
        </div>

    </div>
}