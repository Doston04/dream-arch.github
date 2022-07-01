import Link from "next/link";
import { useRef } from "react";
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BackgroundLine from "./bg-line";
import { logo } from "./icons";

export default function Header() {
  const mobileHeader = useRef(null)
  const span1 = useRef(null)
  const span2 = useRef(null)
  const span3 = useRef(null)
  function openMobileMenu() {
    mobileHeader.current.classList.toggle("hidden")
    span1.current.classList.toggle("rotate45deg")
    span2.current.classList.toggle("hidden")
    span3.current.classList.toggle("rotate-45deg")
  }

  const serviceLink = useRef(null)
  const portfolioLink = useRef(null)
  const aboutLink = useRef(null)
  let {pathname} = useRouter()
  useEffect(() => {
    if (pathname == "/services") {
      serviceLink.current.classList.add("active-link")
      serviceLink.current.classList.remove("header-link")
    }
    else if (pathname == "/portfolio") {
      portfolioLink.current.classList.add("active-link")
      portfolioLink.current.classList.remove("header-link")
    }
    else if (pathname == "/about") {
      aboutLink.current.classList.add("active-link")
      aboutLink.current.classList.remove("header-link")
    }
  }, []) 

  return (
    <header>
      <div className="header-inner content-center">
        <Link href="/">
          <a className="logo" aria-label="home">{logo}</a>
        </Link>  
        <nav className="header-navigation">
          <Link href="/services">
            <a ref={serviceLink} className="header-link" aria-label="services">Our services</a>
          </Link>
          <Link href="/portfolio">
            <a ref={portfolioLink} className="header-link" aria-label="portfolio">Portfolio</a>
          </Link>
          <Link href="/about">
            <a ref={aboutLink} className="header-link" aria-label="about">About us</a>
          </Link>
        </nav>
        <div className="header-extra">
          <Link href="tel:+998977072712">
            <a className="header-phone">
              <svg className="phone-svg" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"/>
              </svg>            
              <p className="phone-number">97 707-27-12</p>
            </a>
          </Link>
          <span className="border"></span>
          <div onClick={openMobileMenu} className="hamburger">
            <span ref={span1} id="span1" className="hamburger-span"></span>
            <span ref={span2} id="span2" className="hamburger-span"></span>
            <span ref={span3} id="span3" className="hamburger-span"></span>
          </div>
        </div>
        <BackgroundLine />
      </div>
      <div ref={mobileHeader} className="mobile-header hidden">
        <div className="mobile-header-content">
          <Link href="/services">
            <a ref={serviceLink} className="header-link">Our services</a>
          </Link>
          <Link href="portfolio">
            <a ref={portfolioLink} className="header-link">Portfolio</a>
          </Link>
          <Link href="/about">
            <a ref={aboutLink} className="header-link">About us</a>
          </Link>
        </div>
    </div>
    </header> 
  ) 
}

const nimadir = () => {
  return (
    <>
      <div className="fixed-header hidden">
        <div className="fixed-header-inner content-center">
          <Link href="/">
            <a className="logo" aria-label="home">{logo}</a>
          </Link>  
          <nav className="header-navigation">
            <Link href="/services">
              <a ref={serviceLink} className="header-link" aria-label="services">Our services</a>
            </Link>
            <Link href="/portfolio">
              <a ref={portfolioLink} className="header-link" aria-label="portfolio">Portfolio</a>
            </Link>
            <Link href="/about">
              <a ref={aboutLink} className="header-link" aria-label="about">About us</a>
            </Link>
          </nav>
          <div className="header-extra">
            <Link href="tel:+998977072712">
              <a className="header-phone">
                <svg className="phone-svg" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"/>
                </svg>            
                <p className="phone-number">97 707-27-12</p>
              </a>
            </Link>
            <span className="border"></span>
            <div className="hamburger">
              <span id="span1" className="hamburger-span"></span>
              <span id="span2" className="hamburger-span"></span>
              <span id="span3" className="hamburger-span"></span>
            </div>
          </div>
          <BackgroundLine />
        </div>
      </div>
    </>
  )
}