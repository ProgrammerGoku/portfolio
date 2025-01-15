import React from 'react';
import styles from "./Education.module.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { getImageUrl } from '../../utils';
import { FaGraduationCap } from 'react-icons/fa';

export const Education=()=>{
  return <div className={styles.container} id="edu">
    <h1>EDUCATION</h1>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'linear-gradient(180deg,#576cbc 0%,#132a53)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Aug 2023 - May 2025"
        iconStyle={{ background: 'linear-gradient(180deg,#576cbc 0%,#132a53)', color: '#fff'}}
        icon={<FaGraduationCap/>}>
        <h2 style={{color:'white',fontSize:'25px'}}>University at Buffalo, State University of New York</h2>
        <h3 style={{fontSize:'20px',fontWeight:'400'}}>Master of Science(Honors) in Computer Science and Engineering</h3><br />
        <h4 style={{fontSize:'12px',fontWeight:'300'}}><i>Coursework:OS, Machine Learning, Deep Learning, Computer Vision and Image processing, Computer Security, Data Intensive Computing, Computer Architecture</i> 
        </h4>
        <p style={{fontSize:'20px',fontWeight:'600'}}>GPA 4.0/4.0
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'linear-gradient(180deg,#576cbc 0%,#132a53)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Jul 2019 - Jun 2023"
        iconStyle={{ background: 'linear-gradient(180deg,#576cbc 0%,#132a53)', color: '#fff'}}
        icon={<FaGraduationCap/>}>
        <h2 style={{color:'white',fontSize:'25px'}}>Anna University(MIT Campus), India</h2>
        <h3 style={{fontSize:'20px',fontWeight:'400'}}>Bachelors of Engineering in Electronics and Communication</h3>
        <p style={{fontSize:'20px',fontWeight:'600'}}>
          GPA 9.52/10
        </p>
      </VerticalTimelineElement>
    
    </VerticalTimeline>
  </div>
}