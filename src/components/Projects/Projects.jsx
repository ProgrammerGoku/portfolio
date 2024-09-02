import React from "react";
import styles from "./Projects.module.css"
import projects from "../../data/projects.json"
import { getImageUrl } from "../../utils";
export const Projects=()=>{
    return <div className={styles.container} id="proj">
        <h1>PROJECTS</h1>
        <div className={styles.projects}>{
            projects.map((projItem,id)=>{
                return(<div className={styles.imgTextWrap}>
                    <div className={styles.imgWrapper}>
                        <img className={styles.img} src={getImageUrl(projItem.imgSrc)} alt="" />
                    </div>
                    <div className={styles.text}>
                        <h3>{projItem.title}</h3>
                        <p>{projItem.description}</p>
                        {/* <div className={styles.btn}>
                            <div className={styles.sourceBtn}>
                                <h3>Source</h3>
                            </div>
                    </div> */}
                    </div>

                </div>

                );

            })
            
            }

        </div>
    </div>
}