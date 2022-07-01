import Head from 'next/head'
import Link from 'next/dist/client/link'
import Image from "next/Image"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from '../styles/Home.module.css'
import BackgroundLine from '../components/bg-line'
import { clock, scrollLoop } from '../components/icons'
import articleImage from "../public/media/article-image.png"
import aboutImage from "../public/media/aboutImage.png"

export default function Home() {
  const style = {
    "content-center": "content-center",
    "mainSectionInner": "mainSectionInner",
    "hidden": "hidden"
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dream Arch | Home</title>
        <meta name="description" content="Dream Arch Company" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <div id={styles.body} className="body">
        <main>
          <section className={styles.landing}>
            <Header />
            <div className="content-center landing-content">
              <p className={styles.landingMainText}>Modern architectural solutions</p>
              <p className={styles.landingSecondaryText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptas ipsa labore.</p>
              <Link href="/about">
                <a className="main-btn">About us</a>
              </Link>  
              <div className={styles.fullScroll}>
                <div className="loop-scroll">{scrollLoop}</div>
              </div>
              <BackgroundLine />
            </div>
          </section>
          <section className={styles.mainSection}>
            <div className={`${styles.mainSectionInner} ${style["content-center"]}`}>
              <p className={styles.sectionTitle}><span className="yellow">Services</span> offered by our team are provided by their <span className="yellow">masters</span></p>
              <div className={styles.servicesContainer}>
                <Link href="/services">
                  <a className={styles.service}>
                    <div className={styles.serviceContent}>
                      <p className={styles.serviceName}>Architecture</p>
                      <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.</p>
                    </div>
                    <button className={styles.secondaryBtnHome}>Read more</button>
                  </a>
                </Link>
                <Link href="/services">
                  <a className={styles.service}>
                    <div className={styles.serviceContent}>
                      <p className={styles.serviceName}>Interior design</p>
                      <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.</p>
                    </div>
                    <button className={styles.secondaryBtnHome}>Read more</button>
                  </a>
                </Link>
                <Link href="/services">
                  <a className={styles.service}>
                    <div className={styles.serviceContent}>
                      <p className={styles.serviceName}>Exterior design</p>
                      <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, assumenda.</p>
                    </div>
                    <button className={styles.secondaryBtnHome}>Read more</button>
                  </a>
                </Link>
              </div>  
              <BackgroundLine />
            </div>
            <p className={styles.backTitle}>Ser&shy;vi&shy;ces</p>
          </section>
          <section className={styles.mainSection}>
            <div className={`${styles.mainSectionInner} ${style["content-center"]}`}>
              <p className={styles.sectionTitle}>these short <span className="yellow">statistics</span> will replace many commendations</p>
              <div className={styles.qubbaContainer}>
                <div className={styles.qubba}>
                  <p className={styles.qubbaNumber}>50</p>
                  <p className={styles.qubbaText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dignissimos.</p>
                </div>
                <div className={styles.qubba}>
                  <p className={styles.qubbaNumber}>35</p>
                  <p className={styles.qubbaText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dignissimos.</p>
                </div>
                <div className={styles.qubba}>
                  <p className={styles.qubbaNumber}>10</p>
                  <p className={styles.qubbaText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dignissimos.</p>
                </div>
              </div>  
              <BackgroundLine />
            </div>
            <p className={styles.backTitle}>Sta&shy;tis&shy;ti&shy;cs</p>
          </section>
          <section className={styles.mainSection}>
            <div className={`${styles.mainSectionInner} ${style["content-center"]}`}>
              <div className={styles.aboutGridDiv}>
                <div className={`${styles.aboutGrid} ${styles.aboutSectionImage}`}>
                  <Image src={aboutImage} layout="fill" alt="about" objectFit="cover" />
                  <p className={styles.asideTextDiv}><span className={styles.asideText}>hello</span></p>
                </div>
                <div className={`${styles.aboutGrid} ${styles.aboutSectionContent}`}>
                  <div className={styles.aboutTextContainer}>
                    <p className={styles.aboutTitle}>Brief about our team</p>
                    <p className={styles.aboutText}>Volutpat cras consectetur tellus congue tellus sapien, facilisis tortor. Nulla tristique pellentesque nisi nisi, elementum rhoncus. Accumsan cursus eu egestas fermentum augue. Pharetra sem tempor rutrum viverra amet ullamcorper fringilla aliquet. Ipsum velit sit nunc, habitant turpis scelerisque nulla aliquam eu deliranbum.</p>
                  </div>
                  <Link href="/about">
                    <a className='secondary-btn'>Read More</a>
                  </Link>
                </div>
              </div>
              <BackgroundLine />
            </div>
            <p className={styles.backTitle}>About us</p>
          </section>
          <section className={`${styles.mainSection} ${style["hidden"]}`}>
            <div className={`${styles.mainSectionInner} ${style["content-center"]}`}>
              <p className={styles.sectionTitle}>Collection of top <span className="yellow">project</span> implemented by <span className="yellow">our team</span></p>
              <BackgroundLine />
            </div>
            <p className={styles.backTitle}>Port&shy;fo&shy;lio</p>
          </section>
          <section className={styles.mainSection}>
            <div className={`${styles.mainSectionInner} ${style["content-center"]}`}>
              <p className={styles.sectionTitle}>List of best <span className="yellow">articles</span> published by <span className="yellow">our team</span></p>
              <div className={styles.articlesContainer}>
                <Article />
                <Article />
                <Article />
              </div>
              <div className={styles.articleAllButton}><button className='secondary-btn'>All our articles</button></div>  
              <BackgroundLine />
            </div>
            <p className={styles.backTitle}>Blog</p>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

const Article = () => {
  return (
    <div className={styles.article}>
      <div className={styles.articleImage}>
        <Image src={articleImage} alt='article' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.articleContent}>
        <div className={styles.articleContentTop}>
          <div className={styles.viewDiv}>
            <span className={styles.clock}>{clock}</span>
            <span className={styles.viewTime}>about 10 hours ago</span>
          </div>
          <p className={styles.articleText}>When the Architect Designs for Communities: 9 Popular Residential Designs</p>
        </div>
        <button className={styles.secondaryBtnHome}>Read more</button>
      </div>
    </div>
  )
}



// const data = [
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
//   {},
// ]

// for (let index = 0; index < data.length; index++) {
  
// }
// 4 taga boliw har bir arrayni logikasi
