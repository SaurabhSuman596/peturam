import styles from './Header.module.css';
import Image from 'next/image';
import logo from '../../public/iconwitoutbackground.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Dropdown from '../dropdown/Dropdown';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.header} id="home">
        <div className={styles.container}>
          <div>
            <Link href="/">
              <a className={styles.left}>
                <Image src={logo} height={80} width={80} />
                <h1 className={styles.h1}>Peturam&apos;s</h1>
              </a>
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.bigScreen}>
              <ul className={styles.list}>
                <li>
                  <Link href="#home"> Home</Link>
                </li>
                <li>
                  <Link href="#product">Product</Link>
                </li>
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            {open ? (
              <AiOutlineClose
                onClick={handleClick}
                className={styles.icon}
                size={50}
              />
            ) : (
              <FaBars onClick={handleClick} className={styles.icon} size={50} />
            )}
          </div>
        </div>
      </div>
      {open && <Dropdown />}
    </>
  );
};

export default Header;
