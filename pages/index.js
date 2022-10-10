import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import Note from '../components/note/Note';
import styles from '../styles/Home.module.css';
import Products from '../components/products/products';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <Note />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
