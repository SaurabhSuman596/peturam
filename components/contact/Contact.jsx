import React from 'react';
import styles from './Contact.module.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.ul}>
        <li>
          <a href="mailro:imperio100t@gmail.com">
            <AiOutlineMail /> <span>imperio100t@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/invites/contact/?i=1onzt7uoupa3s&utm_content=p80qr2w">
            <AiOutlineInstagram /> <span>@imperio100t</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/imperio-co-49797624b">
            <GrLinkedinOption /> <span>Imperio Co.</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/imperio_co?t=q0GxGRO0bLasuf4NUSQ5ag&s=09">
            <AiOutlineTwitter /> <span>@imperio_co</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100085549147501">
            <FaFacebookF /> <span>Imperio</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/SaurabhSuman596">
            <AiOutlineGithub /> <span>imperio100t@gmail.com</span>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Contact;
