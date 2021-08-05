import React, {Component} from 'react';
import { useState } from 'react';
import BACKGROUND from 'assets/mentor/back_image.jpg';
import NavBar from 'components/NavBar';
import SimpleForm from 'components/chatbot/SimpleForm';

import styles from './styles.module.scss';
import mentors from './mentorData';


function Mentors(): JSX.Element{
  const [searchTerm, setSearchTerm] = useState("");
  return(
  <div className={styles.background}>
    <img src={BACKGROUND} alt="" className={styles.b_image} />
    <NavBar showHome />
    <div className={styles.mobile}>
    </div>

    <div className={styles.container}>
      <div className={[styles.category_title].join(' ')}>
        MENTORS
      </div>
      <a className = {styles.category_text}>Start kindling new connections by looking at our amazing mentors!</a>
      <div className={styles.shader} />
      <div className={styles.mentor_list}>
        <br />
        <br />
        <input type="text" className={styles.search} placeholder="Search..." onChange = {event => {setSearchTerm(event.target.value)}}></input>
        {mentors.filter((val)=> {
          if(searchTerm == "") {
            return val
          }
          else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
          else if (val.description.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((mentor) => (
          <div key={mentor.name} className={styles.mentor}>
            <div className={styles.mentor_image} style={{ backgroundImage: `url(${mentor.imageURL})` }} />
            <div className={styles.mentor_text}>
              <div className={styles.mentor_name}>{mentor.name}</div>
              <div className={styles.mentor_description}>
                {mentor.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className = {styles.chat}>
        <SimpleForm />
      </div>
    </div>
  </div>
  )
};

export default Mentors;
