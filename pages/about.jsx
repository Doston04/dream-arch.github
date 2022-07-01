import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import BackgroundLine, { BackgroundLineMain } from '../components/bg-line'
import Footer from '../components/footer'
import Header from '../components/header'
import { chevron, clock, rightArrow, scrollLoop, warning } from '../components/icons'
import styles from "../styles/About.module.css"
import staff from "../public/media/staffjan.png"
import articleImage from "../public/media/article-image.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import yigit from "../public/media/yigit.png"

export default function About() { 
  const style = {
    "hidden": "hidden"
  }
  const footer = useRef();
  const goToFooter = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  const answer = useRef()
  const chevronDiv = useRef(null)
  function toggleAnswer() {
    answer.current.classList.toggle("hidden")
    chevronDiv.current.classList.toggle("rotatejan")
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dream Arch | About Us</title>
        <meta name="description" content="About Dream Arch Company" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      </Head>
      <div id='body' className="body">
        <section className="intro">
          <Header />
          <div className="intro-content content-center">
            <div className="title-div">
              <p className="section-intro-title"><span className="yellow">Full</span> information <br />about <span className="yellow">our team</span></p>
              <div className="section-intro-navigation">
                <span>Main Page</span>
                <span>/</span>
                <span className="intro-active-page">About Us</span>
              </div>
            </div>
            <div className="loop-scroll">{scrollLoop}</div>
            <BackgroundLine />
          </div>
        </section>
        <main className="gray-main">
          <div className="main-inner content-center">
            <div className="main-inner-inner">
              <p className="section-title">Learn more <span className="orange">about</span> us to <span className="orange">partner</span> with Us</p>
              <p className="back-title">About us</p>
              <div className="short-info-div">
                <div className="short-info-icon-div">{warning}</div>
                <p className="short-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper pellentesque eget venenatis, est urna. Congue augue risus eu, egestas aliquam lacus morbi. Duis amet nec eu turpis ut pharetra a facilisi. Purus morbi ornare sollicitudin in porttitor sit. Consequat neque mauris vel integer consectetur. A aliquam commodo malesuada maecenas proin varius sodales senectus interdum. Bibendum amet, nisl turpis et tellus fames. Rhoncus suscipit elementum felis tempus aliquet. Sed et facilisis sollicitudin metus vitae pulvinar. Nunc</p>
              </div>
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
              <div className={styles.staffContainer}>
                <StaffCard />
                <StaffCard />
                <StaffCard />
                <StaffCard />
                <StaffCard />
                <StaffCard />
                <StaffCard />
                <StaffCard />
              </div>
              <div className={styles.carouselContainer}>
                <Carousel centerMode="true" centerSlidePercentage={30} autoPlay="true" showThumbs="false">
                  <CarouselDiv />
                  <CarouselDiv />
                  <CarouselDiv />
                  <CarouselDiv />
                  <CarouselDiv />
                  <CarouselDiv />
                  <CarouselDiv />
                  <CarouselDiv />
                </Carousel>
              </div>
              <div className={styles.zakovatContainer}>
                <div onClick={toggleAnswer} className={styles.savolDiv}>
                  <p className={styles.savol}>How much does it cost to make an App?</p>
                  <span ref={chevronDiv}>{chevron}</span>
                </div>
                <p ref={answer} className={`${styles.javob} ${style["hidden"]}`}>“Not all apps are created equal” - says the ‘Declaration of Techdependence’. The type of web and mobile app will determine the complexity of the solution and the number of hours required for its development process. In IT the industry standard on paying people is measured in hourly rates cost of which varies anywhere from $20 to $200/hour.</p>
              </div>
              <div className={styles.articlesContainer}>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
              <div className={styles.articleAllButton}><button className='third-btn'>All our articles</button></div>
              </div>
              <div className="footer-ref-div">
                <div className="yoqdimi">
                  <p>Did you like our projects?</p>
                  <span>{rightArrow}</span>
                </div>
                <button onClick={() => {goToFooter(footer)}} className="third-btn">Contact Us</button>
              </div>
            </div>
            <BackgroundLineMain />
          </div>
        </main>
        <div ref={footer}><Footer /></div>
      </div>
    </div>
  )
}

const StaffCard = () => {
  return (
    <div className={styles.staff}>
      <div className={styles.staffImageDiv}>
        <Image className="image" src={staff} alt="staff" layout="fill" objectFit="cover" />  
      </div>
      <div className={styles.staffInfo}>
        <div className={styles.staffInfoContent}>
          <p className={styles.staffName}>Bobur Radjabov</p>
          <p className={styles.staffProfession}>Interyer dizayn</p>
        </div>
      </div>
    </div>
  )
}

const ArticleCard = () => {
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
        <button className="third-btn">Read more</button>
      </div>
    </div>
  )
}

const SavolJavob = () => {
  return (
    <div>
      <div className={styles.savolDiv}>
        <p className={styles.savol}>How much does it cost to make an app</p>
        <span>{chevron}</span>
      </div>
      <p className={styles.javob}>“Not all apps are created equal” - says the ‘Declaration of Techdependence’. The type of web and mobile app will determine the complexity of the solution and the number of hours required for its development process. In IT the industry standard on paying people is measured in hourly rates cost of which varies anywhere from $20 to $200/hour.</p>
    </div>
  )
}

const CarouselDiv = () => {
  return (
    <div className={styles.carouselDiv}>
      <div className={styles.quoteDiv}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum mollitia aliquam beatae dolorum nemo natus temporibus quisquam veniam non repellat?</div>
      <div className={styles.personContainer}>
        <div className={styles.personInfoContainer}>
          <div className={styles.personImage}>
            <Image src={yigit} layout="fill" alt="yigit" objectFit='cover' />
          </div>
          <p className={styles.personNameDiv}>Sardorbek Rashidov</p>
        </div>
      </div>
    </div>
  )
}