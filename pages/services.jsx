import Head from 'next/head'
import { useRef } from 'react'
import BackgroundLine, { BackgroundLineMain } from '../components/bg-line'
import Footer from '../components/footer'
import Header from '../components/header'
import { legoHand, rightArrow, scrollLoop, warning } from '../components/icons'
import styles from "../styles/Services.module.css"

export default function About() { 
  const footer = useRef();
  const goToFooter = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dream Arch | Our services</title>
        <meta name="description" content="About Dream Arch Company" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <div id='body' className="body">
        <section className="intro">
          <Header />
          <div className="intro-content content-center">
            <div className="title-div">
              <p className="section-intro-title">our <span className="yellow">services</span> are very similar to your <span className="yellow">wishes</span></p>
              <div className="section-intro-navigation">
                <span>Main Page</span>
                <span>/</span>
                <span className="intro-active-page">Our Services</span>
              </div>
            </div>
            <div className="loop-scroll">{scrollLoop}</div>
            <BackgroundLine />
          </div>
        </section>
        <main className="gray-main">
          <div className="main-inner content-center">
            <div className="main-inner-inner">
              <p className="section-title">a brief illustrated title on <span className="orange">Architecture</span></p>
              <p className="back-title">Ar&shy;chi&shy;tech&shy;tu&shy;re</p>
              <div className="short-info-div">
                <div className="short-info-icon-div">{warning}</div>
                <p className="short-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper pellentesque eget venenatis, est urna. Congue augue risus eu, egestas aliquam lacus morbi. Duis amet nec eu turpis ut pharetra a facilisi. Purus morbi ornare sollicitudin in porttitor sit. Consequat neque mauris vel integer consectetur. A aliquam commodo malesuada maecenas proin varius sodales senectus interdum. Bibendum amet, nisl turpis et tellus fames. Rhoncus suscipit elementum felis tempus aliquet. Sed et facilisis sollicitudin metus vitae pulvinar. Nunc</p>
              </div>
              <div className={styles.ratingContainer}>
                <RatingDiv />
                <RatingDiv />
                <RatingDiv />
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

const RatingDiv = () => {
  return (
    <div className={styles.rating}>
      <div>
        <div className={styles.iconContainer}>{legoHand}</div>
      </div>
      <p className={styles.ratingTitle}>Advantage</p>
      <p className={styles.ratingSubtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum placeat alias consectetur suscipit distinctio?</p>
    </div>
  )
}