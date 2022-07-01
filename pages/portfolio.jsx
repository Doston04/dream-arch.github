import Head from 'next/head'
import { useRef } from 'react'
import BackgroundLine, { BackgroundLineMain } from '../components/bg-line'
import Footer from '../components/footer'
import Header from '../components/header'
import { rightArrow, scrollLoop, warning } from '../components/icons'

export default function About() { 
  const footer = useRef();
  const goToFooter = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dream Arch | Portfolio</title>
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
              <p className="section-intro-title">The <span className="yellow">projects</span> we prepare decorate our <span className="yellow">portfolio</span></p>
              <div className="section-intro-navigation">
                <span>Main Page</span>
                <span>/</span>
                <span className="intro-active-page">Portfolio</span>
              </div>
            </div>
            <div className="loop-scroll">{scrollLoop}</div>
            <BackgroundLine />
          </div>
        </section>
        <main className="gray-main">
          <div className="main-inner content-center">
            <div className="main-inner-inner">
              <p className="section-title">all of the <span className="orange">projects</span> we have shown are working in <span className="orange">real life</span></p>
              <p className="back-title">Portfolio</p>
              <div className="short-info-div">
                <div className="short-info-icon-div">{warning}</div>
                <p className="short-info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper pellentesque eget venenatis, est urna. Congue augue risus eu, egestas aliquam lacus morbi. Duis amet nec eu turpis ut pharetra a facilisi. Purus morbi ornare sollicitudin in porttitor sit. Consequat neque mauris vel integer consectetur. A aliquam commodo malesuada maecenas proin varius sodales senectus interdum. Bibendum amet, nisl turpis et tellus fames. Rhoncus suscipit elementum felis tempus aliquet. Sed et facilisis sollicitudin metus vitae pulvinar. Nunc</p>
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
