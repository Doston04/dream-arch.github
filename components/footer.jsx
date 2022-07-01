import { facebook, instagram, logo, telegram } from "./icons"
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Map />
      <div className="footer-inner content-center">
        <Link href="/">
          <a className="logo" aria-label="home">{logo}</a>
        </Link>
        <nav className="footer-navigation">
          <Link href="/">
            <a className="footer-icon-div">{instagram}</a>
          </Link>  
          <Link href="/">
            <a className="footer-icon-div">{telegram}</a>
          </Link>  
          <Link href="/">
            <a className="footer-icon-div">{facebook}</a>
          </Link>  
        </nav>
      </div>  
    </footer>
  )  
}

const Map = () => {
  return (
    <section className="map-section">
      <iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11985.084316364819!2d69.2235174950916!3d41.324718386471396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b91c4d972d5%3A0x8c354f8eb8db7aaa!2zR3Vsb2JvZCwg0KLQvtGI0LrQtdC90YIsIE9gemJla2lzdG9u!5e0!3m2!1suz!2s!4v1654869409598!5m2!1suz!2s" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
      <div className="map-content-container">
        <div className="mapDiv content-center">
          <div className="map-content">
            <Link href="tel:+998977072711">
              <a className="footer-number"><span className="yellow">(97)</span> 707-27-11</a>
            </Link>
            <p className="footer-address">Toshkent shahar, Shayxontohur tumani, Gulobod mahallasi, 8-40</p>
          </div>
        </div>
      </div>
    </section>  
  )  
}